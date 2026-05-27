use proyectoLegislativo3 

db.usuarios.insertMany([ 

  { 

    _id: 1, 

    nombreUsuario: "JUANITA", 

    correoUsuario: "juanita@carvalho.gov.co", 

    celularUsuario: "3001234567", 

    contrasena: "jua1234", 

    estado: "activo", 

    rol: "legislativo", 

    permisos: { 

      gestionUsuarios: true, 

      gestionProyectos: true, 

      verReportes: true, 

      verAuditoria: true, 

      crearOrdenDelDia: true 

    }, 

    fechaCreacion: new Date("2025-01-15") 

  }, 

  { 

    _id: 2, 

    nombreUsuario: "DANIEL URREA", 

    correoUsuario: "d.urrea@carvalho.gov.co", 

    celularUsuario: "3109876543", 

    contrasena: "dan1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-01-15") 

  }, 

  { 

    _id: 3, 

    nombreUsuario: "CAMILO QUINTERO", 

    correoUsuario: "c.quintero@carvalho.gov.co", 

    celularUsuario: "3154567890", 

    contrasena: "cam1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-01-20") 

  }, 

  { 

    _id: 4, 

    nombreUsuario: "VALENTINA SOSSA", 

    correoUsuario: "v.sossa@carvalho.gov.co", 

    celularUsuario: "3187654321", 

    contrasena: "val1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-02-01") 

  }, 

  { 

    _id: 5, 

    nombreUsuario: "JUAN PABLO CARDONA", 

    correoUsuario: "jp.cardona@carvalho.gov.co", 

    celularUsuario: "3221234567", 

    contrasena: "jpc1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-02-01") 

  }, 

  { 

    _id: 6, 

    nombreUsuario: "MATEO GRISALES", 

    correoUsuario: "m.grisales@carvalho.gov.co", 

    celularUsuario: "3169876543", 

    contrasena: "mat1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-03-10") 

  }, 

  { 

    _id: 7, 

    nombreUsuario: "Cristian Arevalo", 

    correoUsuario: "cris.are@gmail.com", 

    celularUsuario: "3216549876", 

    contrasena: "cris1234", 

    estado: "activo", 

    rol: "general", 

    permisos: { 

      gestionUsuarios: false, 

      gestionProyectos: true, 

      verReportes: false, 

      verAuditoria: false, 

      crearOrdenDelDia: false 

    }, 

    fechaCreacion: new Date("2025-04-01") 

  } 

]); 

 

db.ordenDelDia.insertMany([ 

  { 

    _id: 1, 

    estadoOrden: "activo", 

    tipoOrden: "plenaria", 

    fechaOrden: new Date("2026-04-23"), 

    proyectos: [ 

      { posicion: 1,  numeroProyecto: "08 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 2,  numeroProyecto: "232 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 3,  numeroProyecto: "066 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 4,  numeroProyecto: "303 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 5,  numeroProyecto: "05 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 6,  numeroProyecto: "389 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 7,  numeroProyecto: "094 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 8,  numeroProyecto: "308 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 9,  numeroProyecto: "400 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 10, numeroProyecto: "357 DE 2024", estadoEnSesion: "pendiente" } 

    ] 

  }, 

  { 

    _id: 2, 

    estadoOrden: "activo", 

    tipoOrden: "comision", 

    fechaOrden: new Date("2026-04-24"), 

    proyectos: [ 

      { posicion: 1,  numeroProyecto: "107 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 2,  numeroProyecto: "373 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 3,  numeroProyecto: "064 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 4,  numeroProyecto: "119 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 5,  numeroProyecto: "276 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 6,  numeroProyecto: "053 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 7,  numeroProyecto: "046 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 8,  numeroProyecto: "313 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 9,  numeroProyecto: "194 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 10, numeroProyecto: "626 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 11, numeroProyecto: "511 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 12, numeroProyecto: "498 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 13, numeroProyecto: "406 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 14, numeroProyecto: "029 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 15, numeroProyecto: "126 DE 2023", estadoEnSesion: "pendiente" }, 

      { posicion: 16, numeroProyecto: "057 DE 2025", estadoEnSesion: "pendiente" }, 

      { posicion: 17, numeroProyecto: "09 DE 2023",  estadoEnSesion: "pendiente" }, 

      { posicion: 18, numeroProyecto: "375 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 19, numeroProyecto: "574 DE 2024", estadoEnSesion: "pendiente" }, 

      { posicion: 20, numeroProyecto: "270 DE 2024", estadoEnSesion: "pendiente" } 

    ] 

  }, 

  { 

    _id: 3, 

    estadoOrden: "activo", 

    tipoOrden: "plenaria", 

    fechaOrden: new Date("2026-04-25"), 

    proyectos: [ 

      { posicion: 1,  numeroProyecto: "066 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 2,  numeroProyecto: "580 DE 2025",  estadoEnSesion: "pendiente" }, 

      { posicion: 3,  numeroProyecto: "260 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 4,  numeroProyecto: "268 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 5,  numeroProyecto: "472 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 6,  numeroProyecto: "423 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 7,  numeroProyecto: "219 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 8,  numeroProyecto: "456 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 9,  numeroProyecto: "297 DE 2023",  estadoEnSesion: "pendiente" }, 

      { posicion: 10, numeroProyecto: "070 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 11, numeroProyecto: "009 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 12, numeroProyecto: "221 DE 2023",  estadoEnSesion: "pendiente" }, 

      { posicion: 13, numeroProyecto: "344 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 14, numeroProyecto: "075 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 15, numeroProyecto: "100 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 16, numeroProyecto: "424 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 17, numeroProyecto: "457 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 18, numeroProyecto: "189 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 19, numeroProyecto: "088 DE 2023",  estadoEnSesion: "pendiente" }, 

      { posicion: 20, numeroProyecto: "549 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 21, numeroProyecto: "305 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 22, numeroProyecto: "121 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 23, numeroProyecto: "443 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 24, numeroProyecto: "185 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 25, numeroProyecto: "298 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 26, numeroProyecto: "247 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 27, numeroProyecto: "428 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 28, numeroProyecto: "198 DE 2025",  estadoEnSesion: "pendiente" }, 

      { posicion: 29, numeroProyecto: "427 DE 2024",  estadoEnSesion: "pendiente" }, 

      { posicion: 30, numeroProyecto: "207 DE 2023",  estadoEnSesion: "pendiente" } 

    ] 

  } 

]); 

 

db.auditoria.insertMany([ 

  { 

    fechaModificacion: new Date("2026-01-29"), 

    accionRealizada: "Cambio de estado a inactivo", 

    usuarioResponsable: "JUANITA", 

    numeroProyecto: "268 DE 2024", 

    metadatos: { rolUsuario: "legislativo", modulo: "proyectos", campoModificado: "estadoProyecto" } 

  }, 

  { 

    fechaModificacion: new Date("2026-04-09"), 

    accionRealizada: "Cambio de estado a aprobado", 

    usuarioResponsable: "VALENTINA SOSSA", 

    numeroProyecto: "549 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "estadoProyecto" } 

  }, 

  { 

    fechaModificacion: new Date("2026-03-28"), 

    accionRealizada: "Modificación de acción sugerida", 

    usuarioResponsable: "MATEO GRISALES", 

    numeroProyecto: "189 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "accionSugerida" } 

  }, 

  { 

    fechaModificacion: new Date("2025-12-13"), 

    accionRealizada: "Actualización de ponentes", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "357 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "ponentes" } 

  }, 

  { 

    fechaModificacion: new Date("2025-12-31"), 

    accionRealizada: "Actualización de conceptos", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "315 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.conceptos" } 

  }, 

  { 

    fechaModificacion: new Date("2026-03-29"), 

    accionRealizada: "Actualización de síntesis del artículo", 

    usuarioResponsable: "JUANITA", 

    numeroProyecto: "189 DE 2024", 

    metadatos: { rolUsuario: "legislativo", modulo: "proyectos", campoModificado: "analisis.sintesisArticulo" } 

  }, 

  { 

    fechaModificacion: new Date("2025-11-28"), 

    accionRealizada: "Cambio de estado a aprobado", 

    usuarioResponsable: "DANIEL URREA", 

    numeroProyecto: "270 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "estadoProyecto" } 

  }, 

  { 

    fechaModificacion: new Date("2025-11-12"), 

    accionRealizada: "Modificación de consideraciones", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "305 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.consideraciones" } 

  }, 

  { 

    fechaModificacion: new Date("2025-11-23"), 

    accionRealizada: "Actualización de conceptos", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "389 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.conceptos" } 

  }, 

  { 

    fechaModificacion: new Date("2026-04-10"), 

    accionRealizada: "Actualización de síntesis del artículo", 

    usuarioResponsable: "VALENTINA SOSSA", 

    numeroProyecto: "094 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.sintesisArticulo" } 

  }, 

  { 

    fechaModificacion: new Date("2026-02-06"), 

    accionRealizada: "Actualización de conceptos", 

    usuarioResponsable: "DANIEL URREA", 

    numeroProyecto: "400 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.conceptos" } 

  }, 

  { 

    fechaModificacion: new Date("2026-03-22"), 

    accionRealizada: "Modificación de consideraciones", 

    usuarioResponsable: "JUAN PABLO CARDONA", 

    numeroProyecto: "626 DE 2025", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.consideraciones" } 

  }, 

  { 

    fechaModificacion: new Date("2025-10-29"), 

    accionRealizada: "Cambio de estado a aprobado", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "424 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "estadoProyecto" } 

  }, 

  { 

    fechaModificacion: new Date("2025-11-26"), 

    accionRealizada: "Actualización de ponentes", 

    usuarioResponsable: "JUAN PABLO CARDONA", 

    numeroProyecto: "298 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "ponentes" } 

  }, 

  { 

    fechaModificacion: new Date("2025-12-02"), 

    accionRealizada: "Cambio de estado a aprobado", 

    usuarioResponsable: "MATEO GRISALES", 

    numeroProyecto: "189 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "estadoProyecto" } 

  }, 

  { 

    fechaModificacion: new Date("2025-11-14"), 

    accionRealizada: "Actualización de ponentes", 

    usuarioResponsable: "JUANITA", 

    numeroProyecto: "057 DE 2025", 

    metadatos: { rolUsuario: "legislativo", modulo: "proyectos", campoModificado: "ponentes" } 

  }, 

  { 

    fechaModificacion: new Date("2025-12-06"), 

    accionRealizada: "Actualización de conceptos", 

    usuarioResponsable: "VALENTINA SOSSA", 

    numeroProyecto: "192 DE 2025", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "analisis.conceptos" } 

  }, 

  { 

    fechaModificacion: new Date("2025-12-23"), 

    accionRealizada: "Modificación de consideraciones", 

    usuarioResponsable: "JUANITA", 

    numeroProyecto: "428 DE 2024", 

    metadatos: { rolUsuario: "legislativo", modulo: "proyectos", campoModificado: "analisis.consideraciones" } 

  }, 

  { 

    fechaModificacion: new Date("2026-02-04"), 

    accionRealizada: "Actualización de ponentes", 

    usuarioResponsable: "VALENTINA SOSSA", 

    numeroProyecto: "443 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "ponentes" } 

  }, 

  { 

    fechaModificacion: new Date("2025-10-25"), 

    accionRealizada: "Actualización de ponentes", 

    usuarioResponsable: "CAMILO QUINTERO", 

    numeroProyecto: "305 DE 2024", 

    metadatos: { rolUsuario: "general", modulo: "proyectos", campoModificado: "ponentes" } 

  } 

]);

function separador()       { print("=".repeat(65)); }
function separadorDelgado(){ print("-".repeat(65)); }

// ============================================================
// FUNCIONES AUXILIARES GLOBALES
// ============================================================

// Equivalente a calcularAvance (usado en RQF005 y RQF006)
const CAMPOS_DILIGENCIAMIENTO = [
  "accionSugerida", "conceptos", "consideraciones", "Objeto",
  "conflictoDeInteres", "estadoCi", "estadoProposicion", "linkProposicion"
];

function calcularAvance(proyecto) {
  let d = 0;
  CAMPOS_DILIGENCIAMIENTO.forEach(c => {
    let v = proyecto[c];
    if (v !== null && v !== undefined && v !== "" && v !== "Sin concepto ") d++;
  });
  return Math.round((d / CAMPOS_DILIGENCIAMIENTO.length) * 100);
}

function generarBarra(valor, total, longitud) {
  longitud = longitud || 20;
  let prop  = total ? Math.round((valor / total) * longitud) : Math.round((valor / 100) * longitud);
  return "[" + "█".repeat(Math.min(prop, longitud)) + "░".repeat(Math.max(longitud - prop, 0)) + "]";
}

// Equivalente al TRIGGER trg_auditoria_estado de MySQL
// Se llama manualmente antes de cada updateOne en MongoDB
function registrarAuditoria(numeroProyecto, campo, valorAnterior, valorNuevo, usuario, modulo) {
  let ahora = new Date();
  db.auditoria.insertOne({
    fechaModificacion:  ahora,
    horaModificacion:   ahora.toISOString().slice(11, 19),
    accionRealizada:    'Campo "' + campo + '" modificado de "' + valorAnterior + '" a "' + valorNuevo + '"',
    usuarioResponsable: usuario.nombreUsuario,
    numeroProyecto:     numeroProyecto,
    valorAnterior:      String(valorAnterior),
    valorNuevo:         String(valorNuevo),
    metadatos: {
      rolUsuario:      usuario.rol,
      modulo:          modulo || "proyectos",
      campoModificado: campo
    }
  });
}


// ============================================================
// PASO PREVIO — Enriquecer auditoría existente
// Equivalente al ALTER TABLE de MySQL que añadió
// campoModificado, valorAnterior y valorNuevo
// ============================================================

print("Enriqueciendo registros de auditoria existentes...");
db.auditoria.updateMany(
  { valorAnterior: { $exists: false } },
  { $set: { valorAnterior: "No registrado", valorNuevo: "No registrado", horaModificacion: "00:00:00" } }
);
print("Auditoria lista.");
separador();


// ============================================================
// SECCIÓN 1: RQF001 — GESTIÓN DE ACCESO AL SISTEMA
// Equivalente a: sp_login, sp_obtener_rol, sp_cambio_contrasena
// ============================================================

separador();
print("SECCION 1 — RQF001: GESTION DE ACCESO AL SISTEMA");
separador();

// RQF001-01/02/03 — Login con validación completa
// Equivalente a: CALL sp_login('correo', 'contrasena')
print("RQF001-01/02/03 — Login:");
let loginCorrecto = db.usuarios.findOne({
  correoUsuario: "juanita@carvalho.gov.co",
  contrasena:    "jua1234",
  estado:        "activo"
});
print(loginCorrecto
  ? "Login exitoso: " + loginCorrecto.nombreUsuario + " | Rol: " + loginCorrecto.rol
  : "Error: No fue posible iniciar sesion. Credenciales incorrectas o usuario inactivo."
);

// Caso error — correo inexistente
let casoCorreoInexistente = db.usuarios.findOne({ correoUsuario: "noexiste@carvalho.gov.co" });
print(casoCorreoInexistente === null ? "Error: Correo no registrado." : "Usuario encontrado.");

// Caso error — usuario inactivo
db.usuarios.updateOne({ correoUsuario: "cris.are@gmail.com" }, { $set: { estado: "inactivo" } });
let casoInactivo = db.usuarios.findOne({ correoUsuario: "cris.are@gmail.com" });
print(casoInactivo.estado !== "activo" ? "Error: El usuario esta inactivo." : "Usuario activo.");
db.usuarios.updateOne({ correoUsuario: "cris.are@gmail.com" }, { $set: { estado: "activo" } });

// RQF001-04 — Identificación automática de rol
// Equivalente a: CALL sp_obtener_rol('correo')
print("RQF001-04 — Rol identificado:");
let rolIdentificado = db.usuarios.findOne(
  { correoUsuario: "juanita@carvalho.gov.co", estado: "activo" },
  { _id: 0, nombreUsuario: 1, rol: 1 }
);
printjson(rolIdentificado);

// RQF001-05 — Control de acceso por rol
print("RQF001-05 — Usuarios por rol:");
print("Legislativo:");
db.usuarios.find({ rol: "legislativo" }, { _id: 0, nombreUsuario: 1, correoUsuario: 1, estado: 1 })
  .forEach(u => print("  " + u.nombreUsuario + " | " + u.correoUsuario));
print("General:");
db.usuarios.find({ rol: "general" }, { _id: 0, nombreUsuario: 1, correoUsuario: 1, estado: 1 })
  .forEach(u => print("  " + u.nombreUsuario + " | " + u.correoUsuario));

// RQF001-06 — Cambiar contraseña personal
// Equivalente a: CALL sp_cambio_contrasena('correo', 'nueva')
let usuarioCambiaPwd  = db.usuarios.findOne({ correoUsuario: "d.urrea@carvalho.gov.co" });
let passActualPrueba  = "dan1234";
let passNuevaPrueba   = "daniel2025";
if (usuarioCambiaPwd && usuarioCambiaPwd.contrasena === passActualPrueba) {
  db.usuarios.updateOne({ correoUsuario: "d.urrea@carvalho.gov.co" }, { $set: { contrasena: passNuevaPrueba } });
  print("RQF001-06 — Contrasena actualizada correctamente para DANIEL URREA.");
  db.usuarios.updateOne({ correoUsuario: "d.urrea@carvalho.gov.co" }, { $set: { contrasena: passActualPrueba } });
  print("(Contrasena revertida para pruebas)");
} else {
  print("RQF001-06 — Error: Contrasena actual incorrecta.");
}


// ============================================================
// SECCIÓN 2: RQF002 — GESTIÓN DE USUARIOS
// Equivalente a: sp_registrar_usuario, UPDATE rol,
// SELECT lista usuarios, sp_inactivar_usuario
// ============================================================

separador();
print("SECCION 2 — RQF002: GESTION DE USUARIOS");
separador();

// RQF002-01 — Registrar usuario
// Equivalente a: CALL sp_registrar_usuario(...)
let quienRegistraUsr = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });
if (quienRegistraUsr && quienRegistraUsr.rol === "legislativo" && quienRegistraUsr.permisos.gestionUsuarios) {
  let correoNuevoUsr = "sofia.ramirez@carvalho.gov.co";
  if (db.usuarios.findOne({ correoUsuario: correoNuevoUsr })) {
    print("RQF002-01 — Error: Correo ya registrado.");
  } else {
    let nuevoId = db.usuarios.find().sort({ _id: -1 }).limit(1).toArray()[0]._id + 1;
    db.usuarios.insertOne({
      _id: nuevoId, nombreUsuario: "SOFIA RAMIREZ", correoUsuario: correoNuevoUsr,
      celularUsuario: "3001112233", contrasena: "sof1234", estado: "activo", rol: "general",
      permisos: { gestionUsuarios: false, gestionProyectos: true, verReportes: false, verAuditoria: false, crearOrdenDelDia: false },
      fechaCreacion: new Date()
    });
    print("RQF002-01 — Usuario SOFIA RAMIREZ registrado.");
  }
} else { print("RQF002-01 — Acceso denegado."); }

// RQF002-02 — Asignar y modificar rol
// Equivalente a: UPDATE usuario SET rol = 'legislativo' WHERE idUsuario = X
let permisosPorRol = {
  legislativo: { gestionUsuarios: true, gestionProyectos: true, verReportes: true, verAuditoria: true, crearOrdenDelDia: true },
  general:     { gestionUsuarios: false, gestionProyectos: true, verReportes: false, verAuditoria: false, crearOrdenDelDia: false }
};
db.usuarios.updateOne(
  { correoUsuario: "sofia.ramirez@carvalho.gov.co" },
  { $set: { rol: "legislativo", permisos: permisosPorRol["legislativo"] } }
);
print("RQF002-02 — Rol actualizado a legislativo para SOFIA RAMIREZ.");

// RQF002-03 — Consultar usuarios
// Equivalente a: SELECT * FROM usuario
print("RQF002-03 — Lista de usuarios:");
db.usuarios.find({}, { _id: 0, nombreUsuario: 1, correoUsuario: 1, rol: 1, estado: 1 })
  .forEach(u => print("  [" + u.estado.toUpperCase() + "] " + u.nombreUsuario + " | " + u.rol));
print("Total: " + db.usuarios.countDocuments() + " | Activos: " + db.usuarios.countDocuments({ estado: "activo" }));

// RQF002-04 — Actualizar datos de usuario
// Equivalente a: UPDATE usuario SET correoUsuario = ... WHERE idUsuario = X
db.usuarios.updateOne(
  { correoUsuario: "sofia.ramirez@carvalho.gov.co" },
  { $set: { nombreUsuario: "SOFIA RAMIREZ UPDATED", correoUsuario: "sofia.nueva@carvalho.gov.co" } }
);
print("RQF002-04 — Datos de usuario actualizados.");

// RQF002-05 — Proyectos asignados por usuario
// Equivalente al JOIN proyecto-usuario por personaAsignada
print("RQF002-05 — Proyectos por usuario asignado:");
db.proyectos.aggregate([
  { $match: { personaAsignada: { $exists: true, $ne: null, $ne: "" } } },
  { $group: { _id: "$personaAsignada", total: { $sum: 1 }, proyectos: { $push: { numero: "$numero", estado: "$estadoProyecto" } } } },
  { $lookup: { from: "usuarios", localField: "_id", foreignField: "nombreUsuario", as: "info" } },
  { $project: { _id: 0, usuario: "$_id", rol: { $arrayElemAt: ["$info.rol", 0] }, total: 1, proyectos: 1 } },
  { $sort: { total: -1 } }
]).forEach(r => {
  print("  " + r.usuario + " (" + (r.rol || "desconocido") + "): " + r.total + " proyecto(s)");
});

// RQF002-06 — Inactivar usuario
// Equivalente a: UPDATE usuario SET estado = 'inactivo' WHERE ...
db.usuarios.updateOne({ correoUsuario: "sofia.nueva@carvalho.gov.co" }, { $set: { estado: "inactivo" } });
print("RQF002-06 — Usuario SOFIA RAMIREZ inactivado. Historial conservado.");


// ============================================================
// SECCIÓN 3: RQF003 — GESTIÓN DE PROYECTOS
// Equivalente a: INSERT proyecto, UPDATE proyecto,
// sp_bloquear_proyecto, sp_cambiar_estado
// ============================================================

separador();
print("SECCION 3 — RQF003: GESTION DE PROYECTOS");
separador();

let legislativoSesion = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

// RQF003-01 — Consultar proyectos
// Equivalente a: SELECT numero, nombreProyecto, estadoProyecto, fechaDebate FROM proyecto
print("RQF003-01 — Listado de proyectos:");
db.proyectos.find({}, { _id: 0, numero: 1, nombreProyecto: 1, estadoProyecto: 1, fechaDebate: 1 })
  .sort({ fechaDebate: -1 }).limit(5).forEach(p => {
    print("  [" + p.estadoProyecto + "] " + p.numero + " — " + (p.nombreProyecto ? p.nombreProyecto.slice(0,50) + "..." : "Sin nombre"));
  });
print("  ... Total: " + db.proyectos.countDocuments() + " proyectos");

// RQF003-02 — Consulta detallada
// Equivalente al JOIN proyecto + auditoria_proyecto
let numDetalle = "189 DE 2024";
print("RQF003-02 — Ficha detallada: " + numDetalle);
let proyectoFicha = db.proyectos.findOne({ numero: numDetalle });
if (proyectoFicha) {
  print("  Estado: " + proyectoFicha.estadoProyecto + " | Asignado: " + proyectoFicha.personaAsignada);
  print("  Sintesis: " + (proyectoFicha.sintesisArticulo || "Sin sintesis"));  // campo de MySQL
  print("  Votacion: " + (proyectoFicha.votacionArticulo || "Sin votacion"));  // campo de MySQL
  print("  Historial auditoria:");
  db.auditoria.find({ numeroProyecto: numDetalle }, { _id: 0, fechaModificacion: 1, accionRealizada: 1, usuarioResponsable: 1 })
    .sort({ fechaModificacion: 1 }).forEach(a => {
      print("    [" + a.fechaModificacion.toISOString().slice(0,10) + "] " + a.accionRealizada + " — " + a.usuarioResponsable);
    });
}

// RQF003-03 — Editar proyecto
// Equivalente a: UPDATE proyecto SET campo = valor WHERE numero = X (+ trigger auditoria)
if (legislativoSesion && legislativoSesion.rol === "legislativo") {
  let pEditar = db.proyectos.findOne({ numero: numDetalle });
  if (pEditar && !pEditar.bloqueado) {
    let valAntes = pEditar.accionSugerida;
    db.proyectos.updateOne({ numero: numDetalle }, { $set: { accionSugerida: "DEBATIR" } });
    registrarAuditoria(numDetalle, "accionSugerida", valAntes, "DEBATIR", legislativoSesion, "proyectos");
    print("RQF003-03 — Proyecto editado. Auditoria registrada.");
    // Revertir
    db.proyectos.updateOne({ numero: numDetalle }, { $set: { accionSugerida: valAntes } });
    db.auditoria.deleteOne({ numeroProyecto: numDetalle, valorNuevo: "DEBATIR" });
  }
}

// RQF003-05 — Asignación de proyecto
// Equivalente a: UPDATE proyecto SET personaAsignada = X, idUsuarioFK = Y
if (legislativoSesion) {
  let usuAsignar = db.usuarios.findOne({ nombreUsuario: "DANIEL URREA", rol: "general", estado: "activo" });
  if (usuAsignar) {
    ["357 DE 2024", "400 DE 2024"].forEach(num => {
      let p = db.proyectos.findOne({ numero: num });
      if (p && !p.bloqueado) {
        let antes = p.personaAsignada;
        db.proyectos.updateOne({ numero: num }, { $set: { personaAsignada: usuAsignar.nombreUsuario, idUsuarioFK: usuAsignar._id } });
        registrarAuditoria(num, "personaAsignada", antes, usuAsignar.nombreUsuario, legislativoSesion, "proyectos");
        print("RQF003-05 — Proyecto " + num + " asignado a " + usuAsignar.nombreUsuario + ".");
        // Revertir
        db.proyectos.updateOne({ numero: num }, { $set: { personaAsignada: antes, idUsuarioFK: 6 } });
        db.auditoria.deleteOne({ numeroProyecto: num, valorNuevo: usuAsignar.nombreUsuario });
      }
    });
  }
}

// RQF003-06 — Validar asignación para edición (grupo general)
let generalSesion = db.usuarios.findOne({ correoUsuario: "m.grisales@carvalho.gov.co", estado: "activo" });
if (generalSesion) {
  let pValidar = db.proyectos.findOne({ numero: "189 DE 2024" });
  if (pValidar && !pValidar.bloqueado && pValidar.personaAsignada === generalSesion.nombreUsuario) {
    print("RQF003-06 — Edicion autorizada para " + generalSesion.nombreUsuario + ".");
  } else {
    print("RQF003-06 — Acceso denegado: proyecto no asignado a " + generalSesion.nombreUsuario + ".");
  }
}

// RQF003-07 — Cambiar estado
// Equivalente a: UPDATE proyecto SET estadoProyecto = X (dispara trigger en MySQL)
if (legislativoSesion) {
  let pEstado = db.proyectos.findOne({ numero: "268 DE 2024" });
  if (pEstado && !pEstado.bloqueado) {
    let estadoAntes = pEstado.estadoProyecto;
    db.proyectos.updateOne({ numero: "268 DE 2024" }, { $set: { estadoProyecto: "archivado" } });
    registrarAuditoria("268 DE 2024", "estadoProyecto", estadoAntes, "archivado", legislativoSesion, "proyectos");
    print("RQF003-07 — Estado cambiado a archivado. Auditoria registrada.");
    // Revertir
    db.proyectos.updateOne({ numero: "268 DE 2024" }, { $set: { estadoProyecto: estadoAntes } });
    db.auditoria.deleteOne({ numeroProyecto: "268 DE 2024", valorNuevo: "archivado" });
  }
}

// RQF003-07b — Registrar nuevo proyecto
// Equivalente a: INSERT INTO proyecto (...)
if (legislativoSesion && legislativoSesion.permisos.gestionProyectos) {
  if (!db.proyectos.findOne({ numero: "700 DE 2025" })) {
    db.proyectos.insertOne({
      estadoProyecto: "activo", personaAsignada: "MATEO GRISALES",
      fechaDebate: new Date("2025-09-15"), numero: "700 DE 2025",
      nombreProyecto: "Por medio de la cual se regula el uso de IA en entidades publicas",
      autores: "H.R. Nombre Autor", ponentes: "H.R. Nombre Ponente",
      micrositio: "https://www.camara.gov.co/tarjeta-ia", accionSugerida: "DEBATIR",
      Objeto: "Lineamientos para uso etico de IA en sector publico.",
      numArticulado: 5, sintesisArticulo: "", votacionArticulo: "",
      conceptos: "Pendiente", consideraciones: "Pendiente",
      conflictoDeInteres: "NO APLICA", estadoCi: "NO APLICA",
      estadoProposicion: "NO APLICA", linkProposicion: "NO APLICA",
      idUsuarioFK: legislativoSesion._id, otraPersonaFK: null
    });
    print("RQF003-07b — Proyecto 700 DE 2025 registrado.");
    db.proyectos.deleteOne({ numero: "700 DE 2025" });
    print("(Dato de prueba eliminado)");
  }
}

// RQF003-08 — Bloquear proyecto
// Equivalente a: UPDATE proyecto SET bloqueado = 1 (no existe en MySQL, mejora de Mongo)
if (legislativoSesion) {
  let pBloquear = db.proyectos.findOne({ numero: "549 DE 2024" });
  if (pBloquear && !pBloquear.bloqueado) {
    db.proyectos.updateOne({ numero: "549 DE 2024" }, {
      $set: { bloqueado: true, fechaBloqueo: new Date(), bloqueadoPor: legislativoSesion.nombreUsuario }
    });
    print("RQF003-08 — Proyecto 549 DE 2024 bloqueado.");
    db.proyectos.updateOne({ numero: "549 DE 2024" }, { $unset: { bloqueado: "", fechaBloqueo: "", bloqueadoPor: "" } });
    print("(Bloqueo revertido para pruebas)");
  }
}

// Proyectos sin ningún debate — equivalente a la subquery NOT IN de MySQL
print("RQF003 Extra — Proyectos sin ningun debate registrado:");
let numerosEnDebate = db.ordenDelDia.aggregate([
  { $unwind: "$proyectos" },
  { $group: { _id: "$proyectos.numeroProyecto" } }
]).toArray().map(r => r._id);
let sinDebate = db.proyectos.countDocuments({ numero: { $nin: numerosEnDebate } });
print("  Total proyectos sin debate: " + sinDebate);


// ============================================================
// SECCIÓN 4: RQF004 — GESTIÓN DEL ORDEN DEL DÍA
// Equivalente a: INSERT orden_del_dia, INSERT detalle_orden,
// UPDATE posicion, SELECT detalle_orden JOIN orden_del_dia,
// DELETE detalle_orden
// ============================================================

separador();
print("SECCION 4 — RQF004: GESTION DEL ORDEN DEL DIA");
separador();

let quienCreaOrden = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co", estado: "activo" });

// RQF004-01 — Crear orden del día con proyectos
// Equivalente a: CALL sp_crear_orden_del_dia(...) + INSERT detalle_orden
if (quienCreaOrden && quienCreaOrden.permisos.crearOrdenDelDia) {
  let nuevaOrden = { tipoOrden: "plenaria", fechaOrden: new Date("2026-05-20") };
  if (!db.ordenDelDia.findOne(nuevaOrden)) {
    let proyectosOrden = [
      { posicion: 1, numeroProyecto: "08 DE 2024",  estadoEnSesion: "pendiente" },
      { posicion: 2, numeroProyecto: "232 DE 2024", estadoEnSesion: "pendiente" },
      { posicion: 3, numeroProyecto: "066 DE 2024", estadoEnSesion: "pendiente" }
    ].filter(p => db.proyectos.findOne({ numero: p.numeroProyecto }));

    db.ordenDelDia.insertOne({
      tipoOrden: nuevaOrden.tipoOrden, fechaOrden: nuevaOrden.fechaOrden,
      estadoOrden: "activo", creadoPor: quienCreaOrden.nombreUsuario,
      fechaCreacion: new Date(), proyectos: proyectosOrden
    });
    print("RQF004-01 — Orden del dia creada con " + proyectosOrden.length + " proyectos.");
  } else { print("RQF004-01 — Ya existe esa orden del dia."); }
}

// RQF004-02 — Añadir proyectos
// Equivalente a: INSERT INTO detalle_orden (idOrdenFK, numeroProyectoFK, posicion, estadoEnSesion)
let ordenTarget = { tipoOrden: "plenaria", fechaOrden: new Date("2026-05-20") };
let ordenActual = db.ordenDelDia.findOne(ordenTarget);
if (ordenActual && ordenActual.estadoOrden === "activo") {
  let numAnadir = "303 DE 2024";
  let pExiste   = db.proyectos.findOne({ numero: numAnadir });
  let yaEsta    = db.ordenDelDia.findOne(Object.assign({}, ordenTarget, { "proyectos.numeroProyecto": numAnadir }));
  if (pExiste && !yaEsta) {
    db.ordenDelDia.updateOne(ordenTarget, {
      $push: { proyectos: { posicion: ordenActual.proyectos.length + 1, numeroProyecto: numAnadir, estadoEnSesion: "pendiente" } }
    });
    print("RQF004-02 — Proyecto " + numAnadir + " anadido al orden del dia.");
  }
}

// RQF004-03 — Reordenar posiciones
// Equivalente a: UPDATE detalle_orden SET posicion = X WHERE idOrdenFK = Y AND numeroProyectoFK = Z
let ordenReord = db.ordenDelDia.findOne(ordenTarget);
if (ordenReord && ordenReord.proyectos.length > 0) {
  let nuevoOrden = ["066 DE 2024", "08 DE 2024", "232 DE 2024", "303 DE 2024"];
  let reordenado = nuevoOrden.map((n, i) => {
    let p = ordenReord.proyectos.find(x => x.numeroProyecto === n);
    return p ? Object.assign({}, p, { posicion: i + 1 }) : null;
  }).filter(Boolean);
  ordenReord.proyectos.forEach(p => {
    if (!nuevoOrden.includes(p.numeroProyecto)) reordenado.push(Object.assign({}, p, { posicion: reordenado.length + 1 }));
  });
  db.ordenDelDia.updateOne(ordenTarget, { $set: { proyectos: reordenado } });
  print("RQF004-03 — Proyectos reordenados.");
}

// RQF004-04 — Consultar orden del día
// Equivalente a: SELECT d.*, o.tipoOrden, o.fechaOrden FROM detalle_orden d JOIN orden_del_dia o
print("RQF004-04 — Orden del dia 2026-04-24:");
db.ordenDelDia.find({ fechaOrden: new Date("2026-04-24") }).forEach(o => {
  print("  Sesion: " + o.tipoOrden + " | Proyectos: " + o.proyectos.length);
  o.proyectos.sort((a,b) => a.posicion - b.posicion).forEach(p => {
    print("    " + p.posicion + ". [" + p.estadoEnSesion + "] " + p.numeroProyecto);
  });
});

// Conteo de pendientes por sesión
db.ordenDelDia.aggregate([
  { $project: { tipoOrden: 1, fechaOrden: 1, totalProyectos: { $size: "$proyectos" },
      pendientes: { $size: { $filter: { input: "$proyectos", as: "p", cond: { $eq: ["$$p.estadoEnSesion","pendiente"] } } } }
  }},
  { $sort: { fechaOrden: 1 } }
]).forEach(o => {
  print("  " + o.fechaOrden.toISOString().slice(0,10) + " | " + o.tipoOrden + " | Total: " + o.totalProyectos + " | Pendientes: " + o.pendientes);
});

// RQF004-05 — Eliminar proyecto del orden del día (sin eliminar de proyectos)
// Equivalente a: DELETE FROM detalle_orden WHERE idOrdenFK = X AND numeroProyectoFK = Y
let ordenParaEliminar = db.ordenDelDia.findOne(ordenTarget);
if (ordenParaEliminar) {
  let numRetirar = "303 DE 2024";
  let filtrados  = ordenParaEliminar.proyectos
    .filter(p => p.numeroProyecto !== numRetirar)
    .map((p, i) => Object.assign({}, p, { posicion: i + 1 }));
  db.ordenDelDia.updateOne(ordenTarget, { $set: { proyectos: filtrados } });
  print("RQF004-05 — Proyecto " + numRetirar + " retirado del orden del dia. Sigue en coleccion proyectos: " + (db.proyectos.findOne({ numero: numRetirar }) ? "SI" : "NO"));
}

// Cambiar estado de la orden de prueba a inactivo (en lugar de eliminar)
db.ordenDelDia.updateOne(ordenTarget, { $set: { estadoOrden: "inactivo" } });
print("Orden de prueba marcada como inactiva.");


// ============================================================
// SECCIÓN 5: RQF005 — SEGUIMIENTO Y VISUALIZACIÓN DEL PROGRESO
// No tiene equivalente directo en MySQL — funcionalidad adicional
// ============================================================

separador();
print("SECCION 5 — RQF005: SEGUIMIENTO DEL PROGRESO");
separador();

// RQF005-01 — Progreso individual (grupo general)
let usuarioProgreso = db.usuarios.findOne({ correoUsuario: "m.grisales@carvalho.gov.co", estado: "activo" });
if (usuarioProgreso && usuarioProgreso.rol === "general") {
  let misProyectos = db.proyectos.find({ personaAsignada: usuarioProgreso.nombreUsuario }).toArray();
  let totalAvance  = misProyectos.reduce((s, p) => s + calcularAvance(p), 0);
  let promedio     = misProyectos.length > 0 ? Math.round(totalAvance / misProyectos.length) : 0;
  print("RQF005-01 — " + usuarioProgreso.nombreUsuario + ": " + misProyectos.length + " proyectos | Avance promedio: " + promedio + "%");
  misProyectos.slice(0,3).forEach(p => {
    let av = calcularAvance(p);
    print("  " + p.numero + " " + generarBarra(av) + " " + av + "%");
  });
}

// RQF005-02 — Progreso consolidado (legislativo)
print("RQF005-02 — Progreso consolidado:");
db.usuarios.find({ rol: "general", estado: "activo" }).forEach(u => {
  let ps  = db.proyectos.find({ personaAsignada: u.nombreUsuario }).toArray();
  let avg = ps.length > 0 ? Math.round(ps.reduce((s,p) => s + calcularAvance(p), 0) / ps.length) : 0;
  print("  " + u.nombreUsuario + " " + generarBarra(avg) + " " + avg + "% (" + ps.length + " proyectos)");
});

// RQF005-03 — Pendientes de diligenciamiento
print("RQF005-03 — Pendientes por usuario:");
db.usuarios.find({ rol: "general", estado: "activo" }).forEach(u => {
  let ps         = db.proyectos.find({ personaAsignada: u.nombreUsuario }).toArray();
  let pendientes = ps.filter(p => calcularAvance(p) < 100).length;
  print("  " + u.nombreUsuario + ": " + pendientes + " pendiente(s) de " + ps.length);
});

// RQF005-04 — Distribución por estado
print("RQF005-04 — Proyectos por estado:");
db.proyectos.aggregate([
  { $group: { _id: "$estadoProyecto", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]).forEach(e => print("  " + (e._id || "Sin estado") + ": " + generarBarra(e.total, db.proyectos.countDocuments(), 15) + " " + e.total));

// RQF005-05 — Filtrar tablero por usuario
let usuFiltro = "CAMILO QUINTERO";
let psFiltro  = db.proyectos.find({ personaAsignada: usuFiltro }).toArray();
let avgFiltro = psFiltro.length > 0 ? Math.round(psFiltro.reduce((s,p) => s + calcularAvance(p), 0) / psFiltro.length) : 0;
print("RQF005-05 — Tablero de " + usuFiltro + ": " + psFiltro.length + " proyectos | Avance: " + avgFiltro + "%");


// ============================================================
// SECCIÓN 6: RQF006 — GENERACIÓN DE REPORTES
// Equivalente a: stored procedures de reporte en MySQL
// ============================================================

separador();
print("SECCION 6 — RQF006: GENERACION DE REPORTES");
separador();

// RQF006-01 — Reporte por estado
// Equivalente a: SELECT estadoProyecto, COUNT(*) FROM proyecto GROUP BY estadoProyecto
separador();
print("REPORTE RQF006-01 — PROYECTOS POR ESTADO");
separadorDelgado();
db.proyectos.aggregate([
  { $group: { _id: "$estadoProyecto", cantidad: { $sum: 1 } } },
  { $sort: { cantidad: -1 } }
]).forEach(e => print("  " + (e._id || "Sin estado") + ": " + e.cantidad + " proyecto(s)"));
print("  TOTAL: " + db.proyectos.countDocuments());

// RQF006-02 — Reporte por responsable
// Equivalente a: SELECT personaAsignada, COUNT(*) FROM proyecto GROUP BY personaAsignada
separador();
print("REPORTE RQF006-02 — PROYECTOS POR RESPONSABLE");
separadorDelgado();
db.usuarios.find({ rol: "general", estado: "activo" }).forEach(u => {
  let ps  = db.proyectos.find({ personaAsignada: u.nombreUsuario }).toArray();
  let avg = ps.length > 0 ? Math.round(ps.reduce((s,p) => s + calcularAvance(p), 0) / ps.length) : 0;
  print("  " + u.nombreUsuario + ": " + ps.length + " proyecto(s) | Avance: " + avg + "%");
});

// RQF006-03 — Reporte por fecha de radicación
// Equivalente a: SELECT * FROM proyecto WHERE fechaDebate BETWEEN X AND Y
separador();
print("REPORTE RQF006-03 — PROYECTOS POR PERIODO 2024");
separadorDelgado();
let f1 = new Date("2024-01-01"), f2 = new Date("2024-12-31");
let psRango = db.proyectos.find({ fechaDebate: { $gte: f1, $lte: f2 } }).count();
print("  Proyectos en 2024: " + psRango);
db.proyectos.aggregate([
  { $match: { fechaDebate: { $gte: f1, $lte: f2 } } },
  { $group: { _id: { anio: { $year: "$fechaDebate" }, mes: { $month: "$fechaDebate" } }, n: { $sum: 1 } } },
  { $sort: { "_id.mes": 1 } }
]).forEach(r => print("  " + r._id.anio + "-" + String(r._id.mes).padStart(2,"0") + ": " + r.n + " proyecto(s)"));

// RQF006-04 — Reporte orden del día por sesión
// Equivalente a: SELECT * FROM detalle_orden d JOIN orden_del_dia o WHERE fechaOrden = X
separador();
print("REPORTE RQF006-04 — ORDEN DEL DIA SESION 2026-04-24 COMISION");
separadorDelgado();
let sesionReport = db.ordenDelDia.findOne({ fechaOrden: new Date("2026-04-24"), tipoOrden: "comision" });
if (sesionReport) {
  print("  Estado: " + sesionReport.estadoOrden + " | Proyectos: " + sesionReport.proyectos.length);
  sesionReport.proyectos.sort((a,b) => a.posicion - b.posicion).forEach(p => {
    let det = db.proyectos.findOne({ numero: p.numeroProyecto });
    print("  " + p.posicion + ". " + p.numeroProyecto + " [" + p.estadoEnSesion + "] — " + (det ? det.accionSugerida : "Sin detalle"));
  });
}

// RQF006-05 — Exportar (estructura lista para redirigir a .txt)
// Para exportar: mongosh bd MONGO_COMPLETO_RQF001_007.js > reporte.txt
separador();
print("REPORTE RQF006-05 — EXPORTACION: NUMERO | ESTADO | ASIGNADO | AVANCE");
separadorDelgado();
db.proyectos.find({}).sort({ fechaDebate: 1 }).forEach(p => {
  print(p.numero + " | " + p.estadoProyecto + " | " + (p.personaAsignada || "Sin asignar") + " | " + calcularAvance(p) + "%");
});


// ============================================================
// SECCIÓN 7: RQF007 — GESTIÓN DE HISTORIA Y TRAZABILIDAD
// Equivalente a: TRIGGER trg_auditoria_estado,
// vista_historial_proyectos, vista_trazabilidad_debates,
// sp_historial_por_fecha
// ============================================================

separador();
print("SECCION 7 — RQF007: HISTORIA Y TRAZABILIDAD");
separador();

// RQF007-01 — Registro automático de cambios (equivalente al TRIGGER MySQL)
// En Mongo se usa la funcion registrarAuditoria() definida al inicio
// que replica el comportamiento del trigger trg_auditoria_estado
let pTrigger = db.proyectos.findOne({ numero: "189 DE 2024" });
if (pTrigger && legislativoSesion) {
  let vAntes = pTrigger.accionSugerida;
  db.proyectos.updateOne({ numero: "189 DE 2024" }, { $set: { accionSugerida: "ARCHIVAR" } });
  registrarAuditoria("189 DE 2024", "accionSugerida", vAntes, "ARCHIVAR", legislativoSesion, "proyectos");
  print("RQF007-01 — Cambio registrado automaticamente (equivalente al trigger MySQL).");
  db.proyectos.updateOne({ numero: "189 DE 2024" }, { $set: { accionSugerida: vAntes } });
  db.auditoria.deleteOne({ numeroProyecto: "189 DE 2024", valorNuevo: "ARCHIVAR" });
}

// RQF007-02 — Historial de un proyecto
// Equivalente a: SELECT * FROM vista_historial_proyectos WHERE numero = X
separador();
print("RQF007-02 — Historial: 189 DE 2024");
separadorDelgado();
db.auditoria.find({ numeroProyecto: "189 DE 2024" }).sort({ fechaModificacion: 1 }).forEach((a, i) => {
  print((i+1) + ". " + a.fechaModificacion.toISOString().slice(0,10) + " | " + a.accionRealizada + " | " + a.usuarioResponsable);
});

// RQF007-03 — Filtrar por usuario
// Equivalente a: SELECT * FROM auditoria_proyecto WHERE usuarioResponsable = X JOIN usuario
separador();
print("RQF007-03 — Historial de CAMILO QUINTERO:");
separadorDelgado();
db.auditoria.find({ usuarioResponsable: "CAMILO QUINTERO" }).sort({ fechaModificacion: -1 }).forEach((a, i) => {
  print((i+1) + ". " + a.fechaModificacion.toISOString().slice(0,10) + " | " + a.numeroProyecto + " | " + a.accionRealizada);
});

// RQF007-04 — Filtrar por fecha
// Equivalente a: CALL sp_historial_por_fecha('2025-11-01', '2025-12-31')
separador();
print("RQF007-04 — Historial Nov-Dic 2025:");
separadorDelgado();
let fi = new Date("2025-11-01"), ff = new Date("2025-12-31");
db.auditoria.find({ fechaModificacion: { $gte: fi, $lte: ff } }).sort({ fechaModificacion: 1 }).forEach((a, i) => {
  print((i+1) + ". " + a.fechaModificacion.toISOString().slice(0,10) + " | " + a.usuarioResponsable + " | " + a.numeroProyecto);
});
db.auditoria.aggregate([
  { $match: { fechaModificacion: { $gte: fi, $lte: ff } } },
  { $group: { _id: "$usuarioResponsable", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]).forEach(r => print("  " + r._id + ": " + r.total + " cambio(s)"));

// RQF007-05 — Trazabilidad entre debates
// Equivalente a: SELECT * FROM vista_trazabilidad_debates WHERE numero = X
separador();
print("RQF007-05 — Trazabilidad debates: 066 DE 2024");
separadorDelgado();
db.ordenDelDia.aggregate([
  { $match: { "proyectos.numeroProyecto": "066 DE 2024" } },
  { $unwind: "$proyectos" },
  { $match: { "proyectos.numeroProyecto": "066 DE 2024" } },
  { $project: { _id: 0, tipoSesion: "$tipoOrden", fechaSesion: "$fechaOrden", posicion: "$proyectos.posicion", estadoEnSesion: "$proyectos.estadoEnSesion" } },
  { $sort: { fechaSesion: 1 } }
]).forEach((s, i) => {
  print((i+1) + ". " + s.tipoSesion.toUpperCase() + " | " + s.fechaSesion.toISOString().slice(0,10) + " | Pos: " + s.posicion + " | " + s.estadoEnSesion);
});

// Proyectos sin ningún debate (equivalente al NOT IN de MySQL en RQF007-05)
print("Proyectos sin debate registrado:");
let enDebates = db.ordenDelDia.aggregate([
  { $unwind: "$proyectos" }, { $group: { _id: "$proyectos.numeroProyecto" } }
]).toArray().map(r => r._id);
db.proyectos.find({ numero: { $nin: enDebates } }, { _id: 0, numero: 1, estadoProyecto: 1, personaAsignada: 1 })
  .forEach(p => print("  " + p.numero + " | " + p.estadoProyecto + " | " + p.personaAsignada));

separador();
print("FIN — SISTEMA DE INFORMACION LEGISLATIVA — MONGODB");
print("Para guardar: mongosh nombre_bd MONGO_COMPLETO_RQF001_007.js > reporte.txt");
separador();
