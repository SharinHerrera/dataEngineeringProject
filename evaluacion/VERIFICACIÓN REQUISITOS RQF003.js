// VERIFICACIÓN REQUISITOS RQF003-01 al 03-08

// RQF003-01 — Consultar proyectos
// Ambos roles pueden ver el listado básico

let quienConsulta = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienConsulta) {

  print("Listado de proyectos (título, estado, fecha):\n");

  db.proyectos.find(
    {},
    { _id: 0, numero: 1, nombreProyecto: 1, estadoProyecto: 1, fechaDebate: 1 }
  ).sort({ fechaDebate: -1 }).forEach(p => {
    print(`  [${p.estadoProyecto}] ${p.numero} — ${p.nombreProyecto}`);
    print(`   Fecha debate: ${p.fechaDebate}`);
    print("");
  });

  print(`Total proyectos: ${db.proyectos.countDocuments()}`);

} else {
  print("Usuario no autenticado.");
}

// RQF003-02 — Consulta detallada de proyecto
// Ficha completa: estado, historial y responsables
// Ambos roles pueden acceder

let numeroConsultar = "189 DE 2024";

print(`Ficha completa del proyecto ${numeroConsultar}:\n`);

// Datos completos del proyecto
let proyectoDetalle = db.proyectos.findOne({ numero: numeroConsultar });
printjson(proyectoDetalle);

// Historial de cambios desde auditoría
print(`Historial de auditoría para ${numeroConsultar}:`);
db.auditoria.find(
  { numeroProyecto: numeroConsultar },
  { _id: 0, fechaModificacion: 1, accionRealizada: 1, usuarioResponsable: 1, metadatos: 1 }
).sort({ fechaModificacion: 1 }).forEach(a => {
  print(`  [${a.fechaModificacion.toISOString().slice(0,10)}] ${a.accionRealizada}`);
  print(`   Por: ${a.usuarioResponsable} | Campo: ${a.metadatos.campoModificado}`);
});

// Responsable asignado
if (proyectoDetalle) {
  print(`Persona asignada: ${proyectoDetalle.personaAsignada || "Sin asignar"}`);
  print(`   Ponentes: ${proyectoDetalle.ponentes || "Sin ponentes"}`);
  print(`   Autores:  ${proyectoDetalle.autores || "Sin autores"}`);
}

// RQF003-03 — Editar proyecto
// Solo legislativo puede modificar cualquier campo

let editorLeg = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (editorLeg && editorLeg.rol === "legislativo") {

  let numeroEditar = "189 DE 2024";

  // Verificar que el proyecto no esté bloqueado (ver RQF003-08)
  let proyectoAEditar = db.proyectos.findOne({ numero: numeroEditar });

  if (!proyectoAEditar) {
    print("Proyecto no encontrado.");

  } else if (proyectoAEditar.bloqueado === true) {
    print("El proyecto está bloqueado y no puede editarse.");

  } else {

    // Editar cualquier campo del proyecto
    db.proyectos.updateOne(
      { numero: numeroEditar },
      {
        $set: {
          accionSugerida:  "DEBATIR",
          consideraciones: "Actualización de consideraciones legislativas 2025.",
          ponentes:        "H.R. Nuevo Ponente Asignado"
        }
      }
    );

    // Registrar en auditoría
    db.auditoria.insertOne({
      fechaModificacion:  new Date(),
      accionRealizada:    "Edición de campos del proyecto",
      usuarioResponsable: editorLeg.nombreUsuario,
      numeroProyecto:     numeroEditar,
      metadatos: {
        rolUsuario:       editorLeg.rol,
        modulo:           "proyectos",
        campoModificado:  "accionSugerida, consideraciones, ponentes"
      }
    });

    print("Proyecto editado correctamente.");
    printjson(db.proyectos.findOne({ numero: numeroEditar },
      { _id: 0, numero: 1, accionSugerida: 1, consideraciones: 1, ponentes: 1 }
    ));

    // Revertir para no dañar datos de prueba
    db.proyectos.updateOne(
      { numero: numeroEditar },
      { $set: {
          accionSugerida:  "NO ACTUAR",
          consideraciones: "Es un proyecto sencillo que busca actualizar la norma que rige los con…",
          ponentes:        "H.R. Ape Cuello Baute H.R. Dorina Hernandez Palomino"
      }}
    );
    db.auditoria.deleteOne({ numeroProyecto: numeroEditar, accionRealizada: "Edición de campos del proyecto" });
    print("   (Datos revertidos para pruebas)");
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede editar proyectos.");
}

// RQF003-05 — Asignación de proyecto
// Legislativo asigna uno o varios proyectos a usuarios del grupo general

let quienAsigna = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienAsigna && quienAsigna.rol === "legislativo") {

  // Verificar que el usuario a asignar sea del grupo general y esté activo
  let usuarioAAsignar = db.usuarios.findOne({
    nombreUsuario: "DANIEL URREA",
    rol:           "general",
    estado:        "activo"
  });

  if (!usuarioAAsignar) {
    print("El usuario no existe, no es del grupo general, o está inactivo.");

  } else {

    let numerosAAsignar = ["357 DE 2024", "400 DE 2024"]; // ← proyectos a asignar

    numerosAAsignar.forEach(num => {
      let proy = db.proyectos.findOne({ numero: num });

      if (!proy) {
        print(`Proyecto ${num} no encontrado.`);
      } else if (proy.bloqueado === true) {
        print(`Proyecto ${num} está bloqueado, no se puede asignar.`);
      } else {
        db.proyectos.updateOne(
          { numero: num },
          {
            $set: {
              personaAsignada: usuarioAAsignar.nombreUsuario,
              idUsuarioFK:     usuarioAAsignar._id
            }
          }
        );

        // Registrar asignación en auditoría
        db.auditoria.insertOne({
          fechaModificacion:  new Date(),
          accionRealizada:    `Asignación de proyecto a ${usuarioAAsignar.nombreUsuario}`,
          usuarioResponsable: quienAsigna.nombreUsuario,
          numeroProyecto:     num,
          metadatos: {
            rolUsuario:      quienAsigna.rol,
            modulo:          "proyectos",
            campoModificado: "personaAsignada"
          }
        });

        print(`Proyecto ${num} asignado a ${usuarioAAsignar.nombreUsuario}.`);
      }
    });

    // Revertir para no dañar datos de prueba
    numerosAAsignar.forEach(num => {
      db.proyectos.updateOne({ numero: num }, { $set: { personaAsignada: "MATEO GRISALES", idUsuarioFK: 6 }});
      db.auditoria.deleteOne({ numeroProyecto: num, accionRealizada: { $regex: "Asignación" } });
    });
    print("\n   (Datos revertidos para pruebas)");
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede asignar proyectos.");
}

// RQF003-06 — Validar asignación para edición
// El grupo general solo puede editar los proyectos que le fueron asignados

let editorGeneral = db.usuarios.findOne({ correoUsuario: "m.grisales@carvalho.gov.co", estado: "activo" });

if (editorGeneral && editorGeneral.rol === "general") {

  let numeroIntentaEditar = "189 DE 2024";
  let proyectoAValidar    = db.proyectos.findOne({ numero: numeroIntentaEditar });

  if (!proyectoAValidar) {
    print("Proyecto no encontrado.");

  } else if (proyectoAValidar.bloqueado === true) {
    print("El proyecto está bloqueado. No se permiten ediciones.");

  } else if (proyectoAValidar.personaAsignada !== editorGeneral.nombreUsuario) {
    // Validación clave: solo puede editar si está asignado a él
    print(`Acceso denegado. El proyecto ${numeroIntentaEditar} no está asignado a ${editorGeneral.nombreUsuario}.`);

  } else {
    // Sí está asignado → puede editar solo campos permitidos
    db.proyectos.updateOne(
      { numero: numeroIntentaEditar, personaAsignada: editorGeneral.nombreUsuario },
      { $set: { accionSugerida: "DEBATIR", conceptos: "Concepto actualizado por analista." } }
    );

    // Registrar en auditoría
    db.auditoria.insertOne({
      fechaModificacion:  new Date(),
      accionRealizada:    "Edición de proyecto por usuario asignado",
      usuarioResponsable: editorGeneral.nombreUsuario,
      numeroProyecto:     numeroIntentaEditar,
      metadatos: {
        rolUsuario:      editorGeneral.rol,
        modulo:          "proyectos",
        campoModificado: "accionSugerida, conceptos"
      }
    });

    print(`Edición autorizada y realizada por ${editorGeneral.nombreUsuario}.`);

    // Revertir
    db.proyectos.updateOne(
      { numero: numeroIntentaEditar },
      { $set: { accionSugerida: "NO ACTUAR", conceptos: "Sin concepto" } }
    );
    db.auditoria.deleteOne({ numeroProyecto: numeroIntentaEditar, accionRealizada: "Edición de proyecto por usuario asignado" });
    print("   (Datos revertidos para pruebas)");
  }

} else {
  print("Solo los usuarios del grupo general usan esta validación.");
}

// RQF003-07 — Cambiar estado de proyecto
/* Solo legislativo puede cambiar el estado
 Estados válidos: radicado, en comisión,
 en revisión, en debate, aprobado, archivado*/

let quienCambiaEstado = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienCambiaEstado && quienCambiaEstado.rol === "legislativo") {

  let numeroCambiarEstado = "268 DE 2024";
  let nuevoEstado         = "archivado";

  // Estados válidos del sistema
  let estadosValidos = ["radicado", "en comisión", "en revisión", "en debate", "Aprobado C", "archivado", "activo", "inactivo"];

  if (!estadosValidos.includes(nuevoEstado)) {
    print(`Estado "${nuevoEstado}" no es válido.`);
    print(`   Estados permitidos: ${estadosValidos.join(", ")}`);

  } else {

    let proyectoCambio = db.proyectos.findOne({ numero: numeroCambiarEstado });

    if (!proyectoCambio) {
      print("Proyecto no encontrado.");
    } else if (proyectoCambio.bloqueado === true) {
      print("El proyecto está bloqueado y no se puede cambiar su estado.");
    } else {

      let estadoAnterior = proyectoCambio.estadoProyecto;

      db.proyectos.updateOne(
        { numero: numeroCambiarEstado },
        { $set: { estadoProyecto: nuevoEstado } }
      );

      // Registrar cambio en auditoría
      db.auditoria.insertOne({
        fechaModificacion:  new Date(),
        accionRealizada:    `Cambio de estado de "${estadoAnterior}" a "${nuevoEstado}"`,
        usuarioResponsable: quienCambiaEstado.nombreUsuario,
        numeroProyecto:     numeroCambiarEstado,
        metadatos: {
          rolUsuario:      quienCambiaEstado.rol,
          modulo:          "proyectos",
          campoModificado: "estadoProyecto"
        }
      });

      print(`Estado del proyecto ${numeroCambiarEstado} cambiado de "${estadoAnterior}" a "${nuevoEstado}".`);

      // Revertir
      db.proyectos.updateOne({ numero: numeroCambiarEstado }, { $set: { estadoProyecto: estadoAnterior } });
      db.auditoria.deleteOne({ numeroProyecto: numeroCambiarEstado, accionRealizada: { $regex: "Cambio de estado" } });
      print("   (Datos revertidos para pruebas)");
    }
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede cambiar estados.");
}

// RQF003-08 — Bloquear proyecto
/* Solo legislativo puede bloquear
 Un proyecto bloqueado NO puede ser editado
 por ningún usuario*/

let quienBloquea = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

if (quienBloquea && quienBloquea.rol === "legislativo") {

  let numeroBloquear = "549 DE 2024";
  let proyectoBloquear = db.proyectos.findOne({ numero: numeroBloquear });

  if (!proyectoBloquear) {
    print("Proyecto no encontrado.");

  } else if (proyectoBloquear.bloqueado === true) {
    print(`El proyecto ${numeroBloquear} ya está bloqueado.`);

  } else {

    db.proyectos.updateOne(
      { numero: numeroBloquear },
      {
        $set: {
          bloqueado:        true,
          fechaBloqueo:     new Date(),
          bloqueadoPor:     quienBloquea.nombreUsuario,
          motivoBloqueo:    "Trámite finalizado. No requiere más modificaciones."
        }
      }
    );

    // Registrar en auditoría
    db.auditoria.insertOne({
      fechaModificacion:  new Date(),
      accionRealizada:    "Proyecto bloqueado",
      usuarioResponsable: quienBloquea.nombreUsuario,
      numeroProyecto:     numeroBloquear,
      metadatos: {
        rolUsuario:      quienBloquea.rol,
        modulo:          "proyectos",
        campoModificado: "bloqueado"
      }
    });

    print(`Proyecto ${numeroBloquear} bloqueado exitosamente.`);
    print("   Ningún usuario podrá editar este proyecto.");

    // Verificar que el bloqueo funciona (intento de edición debe fallar)
    let intentoEdicion = db.proyectos.findOne({ numero: numeroBloquear, bloqueado: { $ne: true } });
    print(`   Verificación de bloqueo: ${intentoEdicion ? "Fallo - proyecto editable" : "Correcto - proyecto protegido"}`);

    // Revertir para pruebas
    db.proyectos.updateOne(
      { numero: numeroBloquear },
      { $unset: { bloqueado: "", fechaBloqueo: "", bloqueadoPor: "", motivoBloqueo: "" } }
    );
    db.auditoria.deleteOne({ numeroProyecto: numeroBloquear, accionRealizada: "Proyecto bloqueado" });
    print("   (Datos revertidos para pruebas)");
  }

} else {
  print("Acceso denegado. Solo el grupo legislativo puede bloquear proyectos.");
}