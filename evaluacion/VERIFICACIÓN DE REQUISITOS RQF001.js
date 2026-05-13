// VERIFICACIÓN DE REQUISITOS RQF001-01 al 06

// RQF001-01 y RQF001-02
// Iniciar sesión y validar credenciales
// Simula el login buscando correo + contraseña

db.usuarios.findOne({
  correoUsuario: "juanita@carvalho.gov.co",
  contrasena:    "jua1234",
  estado:        "activo"
});
// Si devuelve un documento → credenciales válidas ✔️
// Si devuelve null         → credenciales inválidas ✘

// RQF001-03
// Mensajes de autenticación de error
// Simula los 3 casos de error posibles

// CASO 1 — Correo inexistente
let caso1 = db.usuarios.findOne({ correoUsuario: "noexiste@carvalho.gov.co" });
print(caso1 === null
  ? "❌ ERROR: No fue posible iniciar sesión. Correo no registrado."
  : "✔️ Usuario encontrado");

// CASO 2 — Contraseña incorrecta
let usuarioEncontrado = db.usuarios.findOne({ correoUsuario: "juanita@carvalho.gov.co" });
let contrasenaIngresada = "wrongpass";
print(usuarioEncontrado && usuarioEncontrado.contrasena !== contrasenaIngresada
  ? "❌ ERROR: No fue posible iniciar sesión. Contraseña incorrecta."
  : "✔️ Contraseña correcta");

// CASO 3 — Usuario inactivo
// Primero ponemos uno inactivo de prueba
db.usuarios.updateOne(
  { correoUsuario: "cris.are@gmail.com" },
  { $set: { estado: "inactivo" } }
);

let caso3 = db.usuarios.findOne({ correoUsuario: "cris.are@gmail.com" });
print(caso3.estado !== "activo"
  ? "❌ ERROR: No fue posible iniciar sesión. El usuario está inactivo."
  : "✔️ Usuario activo");

// Revertir el cambio de prueba
db.usuarios.updateOne(
  { correoUsuario: "cris.are@gmail.com" },
  { $set: { estado: "activo" } }
);

// RQF001-04
// Identificación automática de rol
// Muestra el rol del usuario autenticado

db.usuarios.findOne(
  { correoUsuario: "juanita@carvalho.gov.co", estado: "activo" },
  { _id: 0, nombreUsuario: 1, rol: 1 }  // solo devuelve nombre y rol
);

// RQF001-05
// Control de acceso por rol
// Muestra permisos de cada tipo de usuario

// Ver permisos del rol legislativo
db.usuarios.findOne(
  { rol: "legislativo" },
  { _id: 0, nombreUsuario: 1, rol: 1, permisos: 1 }
);

// Ver permisos del rol general
db.usuarios.findOne(
  { rol: "general" },
  { _id: 0, nombreUsuario: 1, rol: 1, permisos: 1 }
);

// Comparar todos los usuarios con sus roles y permisos
db.usuarios.find(
  {},
  { _id: 0, nombreUsuario: 1, rol: 1, permisos: 1 }
)

// Consulta específica: ¿quiénes pueden gestionar proyectos?
db.usuarios.find(
  { "permisos.gestionProyectos": true },
  { _id: 0, nombreUsuario: 1, rol: 1 }
);

// Consulta específica: ¿quiénes pueden ver auditoría?
db.usuarios.find(
  { "permisos.verAuditoria": true },
  { _id: 0, nombreUsuario: 1, rol: 1 }
);

// RQF001-06
// Cambiar contraseña personal
// Simula la actualización de contraseña

// Paso 1 — Verificar que la contraseña actual es correcta
let usuarioACambiar = db.usuarios.findOne({ correoUsuario: "d.urrea@carvalho.gov.co" });
let passActual      = "dan1234";       // contraseña que ingresa el usuario
let passNueva       = "daniel2025";    // nueva contraseña que desea poner

if (usuarioACambiar && usuarioACambiar.contrasena === passActual) {

  // Paso 2 — Actualizar la contraseña
  db.usuarios.updateOne(
    { correoUsuario: "d.urrea@carvalho.gov.co" },
    { $set: { contrasena: passNueva } }
  );
  print("✔️ Contraseña actualizada correctamente para DANIEL URREA.");

  // Paso 3 — Verificar que quedó guardada
  let verificacion = db.usuarios.findOne(
    { correoUsuario: "d.urrea@carvalho.gov.co" },
    { _id: 0, nombreUsuario: 1, contrasena: 1 }
  );
  print(`   Nueva contraseña en BD: ${verificacion.contrasena}`);

  // Paso 4 — Revertir para no dañar los datos de prueba
  db.usuarios.updateOne(
    { correoUsuario: "d.urrea@carvalho.gov.co" },
    { $set: { contrasena: passActual } }
  );
  print("   (Contraseña revertida a la original para pruebas)");

} else {
  print("❌ ERROR: La contraseña actual es incorrecta. No se realizó ningún cambio.");
}