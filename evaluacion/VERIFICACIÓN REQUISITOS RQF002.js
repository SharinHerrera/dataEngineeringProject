// VERIFICACIÓN REQUISITOS RQF002-01 al 06


// RQF002-01 — Registrar usuario

// Paso 1 — Verificar que quien registra sea legislativo
let usuarioSesion = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (usuarioSesion && usuarioSesion.rol === "legislativo" && usuarioSesion.permisos.gestionUsuarios === true) {

  // Paso 2 — Verificar que el correo no esté ya registrado (evitar duplicados)
  let correoNuevo = "sofia.ramirez@carvalho.gov.co";
  let existeCorreo = db.usuarios.findOne({ correoUsuario: correoNuevo });

  if (existeCorreo) {
    print("El correo ya está registrado. No se puede duplicar.");
  } else {

    // Paso 3 — Insertar nuevo usuario con rol "general" por defecto
    let nuevoId = db.usuarios.find().sort({ _id: -1 }).limit(1).toArray()[0]._id + 1;

    db.usuarios.insertOne({
      _id: nuevoId,
      nombreUsuario:  "SOFIA RAMIREZ",
      correoUsuario:  correoNuevo,
      celularUsuario: "3001112233",
      contrasena:     "sof1234",
      estado:         "activo",
      rol:            "general",
      permisos: {
        gestionUsuarios:  false,
        gestionProyectos: true,
        verReportes:      false,
        verAuditoria:     false,
        crearOrdenDelDia: false
      },
      fechaCreacion: new Date()
    });

    print("Usuario SOFIA RAMIREZ registrado correctamente.");
    printjson(db.usuarios.findOne({ correoUsuario: correoNuevo }));
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede registrar usuarios.");
}

// RQF002-02 — Asignar y modificar rol a usuario


// Definir permisos por rol (fuente única de verdad)
let permisosPorRol = {
  legislativo: {
    gestionUsuarios:  true,
    gestionProyectos: true,
    verReportes:      true,
    verAuditoria:     true,
    crearOrdenDelDia: true
  },
  general: {
    gestionUsuarios:  false,
    gestionProyectos: true,
    verReportes:      false,
    verAuditoria:     false,
    crearOrdenDelDia: false
  }
};

// Verificar que quien cambia el rol sea legislativo
let quienCambia = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienCambia && quienCambia.rol === "legislativo") {

  let correoACambiar = "sofia.ramirez@carvalho.gov.co";
  let nuevoRol       = "legislativo"; // nuevo rol a asignar

  // Cambiar rol Y permisos al mismo tiempo
  db.usuarios.updateOne(
    { correoUsuario: correoACambiar },
    {
      $set: {
        rol:      nuevoRol,
        permisos: permisosPorRol[nuevoRol]  // permisos actualizados automáticamente
      }
    }
  );

  print(`Rol actualizado a "${nuevoRol}" para ${correoACambiar}.`);
  print("   Permisos actualizados automáticamente:");
  printjson(db.usuarios.findOne({ correoUsuario: correoACambiar }, { _id: 0, nombreUsuario: 1, rol: 1, permisos: 1 }));

} else {
  print("Acceso denegado. Solo el grupo legislativo puede modificar roles.");
}

// RQF002-03 — Consultar usuarios
// Lista completa con nombre, rol y estado

// Solo legislativo puede ver la lista completa
let quienConsulta = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienConsulta && quienConsulta.rol === "legislativo") {

  print("Lista completa de usuarios del sistema:");
  db.usuarios.find(
    {},
    { _id: 0, nombreUsuario: 1, correoUsuario: 1, rol: 1, estado: 1 }
  ).forEach(u => {
    print(`  [${u.estado.toUpperCase()}] ${u.nombreUsuario} | ${u.rol} | ${u.correoUsuario}`);
  });

  // Estadísticas adicionales útiles para gestión
  print("Resumen:");
  print(`  Total usuarios:   ${db.usuarios.countDocuments()}`);
  print(`  Activos:          ${db.usuarios.countDocuments({ estado: "activo" })}`);
  print(`  Inactivos:        ${db.usuarios.countDocuments({ estado: "inactivo" })}`);
  print(`  Rol legislativo:  ${db.usuarios.countDocuments({ rol: "legislativo" })}`);
  print(`  Rol general:      ${db.usuarios.countDocuments({ rol: "general" })}`);

} else {
  print("Acceso denegado. Solo el grupo legislativo puede consultar usuarios.");
}

// RQF002-04 — Actualizar datos de usuario
// Legislativo: puede editar cualquier usuario
// General: solo puede editar su propio correo y celular

// --- CASO A: Legislativo actualiza a otro usuario ---
let editorLegislativo = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (editorLegislativo && editorLegislativo.rol === "legislativo") {

  let correoNuevo = "sofia.nueva@carvalho.gov.co";

  // Verificar que el nuevo correo no lo tenga otro usuario
  let correoDuplicado = db.usuarios.findOne({
    correoUsuario: correoNuevo,
    _id: { $ne: editorLegislativo._id }
  });

  if (correoDuplicado) {
    print("El nuevo correo ya pertenece a otro usuario.");
  } else {
    db.usuarios.updateOne(
      { correoUsuario: "sofia.ramirez@carvalho.gov.co" },
      { $set: { nombreUsuario: "SOFIA RAMIREZ UPDATED", correoUsuario: correoNuevo } }
    );
    print("Datos de usuario actualizados.");
  }
}

// --- CASO B: General actualiza SOLO su propio correo y celular ---
let editorGeneral = db.usuarios.findOne({ correoUsuario: "d.urrea@carvalho.gov.co", estado: "activo" });

if (editorGeneral && editorGeneral.rol === "general") {

  // Solo puede cambiar correo y celular propios
  db.usuarios.updateOne(
    { _id: editorGeneral._id },
    { $set: {
        correoUsuario:  "daniel.urrea.nuevo@carvalho.gov.co",
        celularUsuario: "3009998877"
    }}
  );
  print("Correo y celular propios actualizados.");

  // Revertir para no dañar datos de prueba
  db.usuarios.updateOne(
    { _id: editorGeneral._id },
    { $set: {
        correoUsuario:  "d.urrea@carvalho.gov.co",
        celularUsuario: "3109876543"
    }}
  );
}

//RQF002-05 - Consulta de proyectos asignados por usuario
// Solo el grupo legislativo puede ver esta consulta
let quienConsulta = db.usuarios.findOne({
  correoUsuario: "juanita@carvalho.gov.co",
  estado: "activo"
});
 
if (quienConsulta && quienConsulta.rol === "legislativo") {
 
  print("Proyectos asignados por usuario (grupo general):\n");
 
  // Agrupar proyectos por personaAsignada y cruzar con usuarios
  db.proyectos.aggregate([
    // Paso 1 — Solo proyectos que tengan un usuario asignado
    {
      $match: {
        personaAsignada: { $exists: true, $ne: null, $ne: "" }
      }
    },
    // Paso 2 — Agrupar por personaAsignada
    {
      $group: {
        _id:               "$personaAsignada",
        totalProyectos:    { $sum: 1 },
        proyectos:         {
          $push: {
            numero: "$numero",
            titulo: "$nombreProyecto",
            estado: "$estadoProyecto"
          }
        }
      }
    },
    // Paso 3 — Traer información del usuario desde la colección usuarios
    {
      $lookup: {
        from:         "usuarios",
        localField:   "_id",
        foreignField: "nombreUsuario",
        as:           "infoUsuario"
      }
    },
    // Paso 4 — Dar forma al resultado final
    {
      $project: {
        _id:            0,
        personaAsignada: "$_id",
        rol:            { $arrayElemAt: ["$infoUsuario.rol", 0] },
        estado:         { $arrayElemAt: ["$infoUsuario.estado", 0] },
        totalProyectos: 1,
        proyectos:      1
      }
    },
    // Paso 5 — Ordenar por quien tiene más proyectos
    { $sort: { totalProyectos: -1 } }
 
  ]).forEach(r => {
    print(`${r.personaAsignada} | Rol: ${r.rol || "desconocido"} | Estado: ${r.estado || "desconocido"}`);
    print(`   Total proyectos asignados: ${r.totalProyectos}`);
    r.proyectos.forEach(p => {
      print(`     • [${p.estado}] ${p.numero} — ${p.titulo}`);
    });
    print("");
  });
 
  // ── Consulta adicional: buscar proyectos de un usuario específico ──
  let usuarioEspecifico = "DANIEL URREA";
 
  print(`Proyectos asignados específicamente a: ${usuarioEspecifico}`);
  db.proyectos.find(
    { personaAsignada: usuarioEspecifico },
    { _id: 0, numero: 1, nombreProyecto: 1, estadoProyecto: 1, fechaDebate: 1 }
  ).forEach(p => {
    print(`  • [${p.estadoProyecto}] ${p.numero} — ${p.nombreProyecto}`);
    print(`    Debate: ${p.fechaDebate}`);
  });
 
} else {
  print("Acceso denegado. Solo el grupo legislativo puede ver esta consulta.");
}

// RQF002-06 — Inactivar usuario
// Cambia estado a inactivo sin eliminar historial

let quienInactiva = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienInactiva && quienInactiva.rol === "legislativo") {

  let correoAInactivar = "sofia.nueva@carvalho.gov.co";

  // Verificar que el usuario existe y está activo
  let usuarioAInactivar = db.usuarios.findOne({ correoUsuario: correoAInactivar });

  if (!usuarioAInactivar) {
    print("Usuario no encontrado.");
  } else if (usuarioAInactivar.estado === "inactivo") {
    print("El usuario ya está inactivo.");
  } else {
    // Solo cambiar estado, NO eliminar — se conserva todo el historial
    db.usuarios.updateOne(
      { correoUsuario: correoAInactivar },
      { $set: { estado: "inactivo" } }
    );
    print(`Usuario ${usuarioAInactivar.nombreUsuario} inactivado.`);
    print("   Historial de auditoría conservado intacto.");

    // Verificar que sigue en auditoría
    let enAuditoria = db.auditoria.countDocuments({ usuarioResponsable: usuarioAInactivar.nombreUsuario });
    print(`   Registros en auditoría: ${enAuditoria}`);
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede inactivar usuarios.");
}

// RQF003-07 — Registrar proyecto
// Solo el grupo legislativo puede registrar

// Paso 1 — Verificar que quien registra sea legislativo
let quienRegistra = db.usuarios.findOne({
  correoUsuario: "juanita@carvalho.gov.co",
  estado:        "activo"
});
 
if (quienRegistra && quienRegistra.rol === "legislativo" && quienRegistra.permisos.gestionProyectos === true) {
 
  let numeroNuevo = "700 DE 2025";
 
  // Paso 2 — Verificar que el número de proyecto no exista ya
  let proyectoExiste = db.proyectos.findOne({ numero: numeroNuevo });
 
  if (proyectoExiste) {
    print("El número de proyecto ya existe. No se puede duplicar.");
 
  } else {
 
    // Paso 3 — Insertar con la estructura real de la colección
    db.proyectos.insertOne({
      estadoProyecto:      "activo",
      personaAsignada:     "MATEO GRISALES",          // usuario del grupo general asignado
      fechaDebate:          new Date("2025-09-15"),
      numero:              numeroNuevo,
      nombreProyecto:      "Por medio de la cual se regula el uso de inteligencia artificial en entidades públicas",
      autores:             "H.R. Nombre Autor Uno, H.R. Nombre Autor Dos",
      ponentes:            "H.R. Nombre Ponente Uno, H.R. Nombre Ponente Dos",
      micrositio:          "https://www.camara.gov.co/tarjeta-ia-entidades-publicas",
      accionSugerida:      "DEBATIR",
      Objeto:              "Este proyecto busca establecer lineamientos para el uso ético y transparente de la IA en el sector público colombiano.",
      numArticulado:       5,
      conceptos:           "Pendiente de concepto",
      consideraciones:     "Se recomienda revisar experiencias internacionales antes del debate.",
      conflictoDeInteres:  "NO APLICA",
      estadoCi:            "NO APLICA",
      estadoProposicion:   "NO APLICA",
      linkProposicion:     "NO APLICA",
      idUsuarioFK:         quienRegistra._id,         // referencia al usuario que registra
      otraPersonaFK:       null
    });
 
    print("Proyecto registrado exitosamente.");
    print("Proyecto creado:");
    printjson(db.proyectos.findOne({ numero: numeroNuevo }));
 
    // Paso 4 — Limpiar dato de prueba
    db.proyectos.deleteOne({ numero: numeroNuevo });
    print("Dato de prueba eliminado. BD en estado original.");
  }
 
} else {
  print("Solo el grupo legislativo puede registrar proyectos.");
}
