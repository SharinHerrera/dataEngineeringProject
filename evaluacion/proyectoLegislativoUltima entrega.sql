-- ============================================================
--  SISTEMA DE INFORMACIÓN LEGISLATIVA
--  Despacho del Representante Daniel Carvalho
--  Escuela de Ciencias e Ingeniería – Ingeniería de Datos
--  Grupo 1: Juanita Castrillón y  Cristian Arévalo
-- ============================================================

drop database if exists proyectolegislativo;
create database proyectoLegislativo;
use proyectoLegislativo;

-- ============================================================
-- CREACIÓN DE TABLAS
-- ============================================================
CREATE TABLE usuario (
    idUsuario      INT PRIMARY KEY AUTO_INCREMENT,
    nombreUsuario  VARCHAR(50)  NOT NULL,
    correoUsuario  VARCHAR(50)  UNIQUE NOT NULL,
    celularUsuario VARCHAR(10)  NOT NULL,
    contrasena     VARCHAR(50)  UNIQUE NOT NULL,
    estado         VARCHAR(20)  NOT NULL,
    rol            VARCHAR(30)
);
describe usuario;
select * from usuario;

CREATE TABLE proyecto (
	idProyectoBD		int PRIMARY KEY AUTO_INCREMENT,
    estadoProyecto     VARCHAR(20)   NOT NULL,
    personaAsignada    VARCHAR(50)   NOT NULL,
    otraPersona        VARCHAR(50)   NULL,
    fechaDebate        varchar(15)   NULL,
    numero             VARCHAR(50)   NOT NULL,
    nombreProyecto     longtext			 NOT NULL,
    autores            LONGTEXT          NULL,
    ponentes           LONGTEXT	  	NULL,
    micrositio         VARCHAR(600)  NULL,
    accionSugerida     VARCHAR(50)   NULL,
    objeto             LONGTEXT          NULL,
    numArticulo        VARCHAR(200)  NULL,
    sintesisArticulo   LONGTEXT          NULL,
    conceptos          LONGTEXT          NULL,
    consideraciones    LONGTEXT          NULL,
    votacionArticulo   LONGTEXT			 NULL,
    conflictoDeInteres VARCHAR(100)   NULL,
    estadoCi           VARCHAR(100)   NULL,
    estadoProposicion  VARCHAR(100)   NULL,
    linkProposicion    TEXT  		 NULL,
    idUsuarioFK        INT           NOT NULL,
    otraPersonaFK      INT           NULL,
    FOREIGN KEY (idUsuarioFK)    REFERENCES usuario(idUsuario),
    FOREIGN KEY (otraPersonaFK)  REFERENCES usuario(idUsuario),
    index(numero)
);

SELECT COUNT(*) AS total_proyectos FROM proyecto;
describe proyecto;
select * from proyecto;

create table orden_del_dia(
idOrden int primary key auto_increment,
estadoOrden varchar (20) not null,
tipoOrden varchar (50) not null,
fechaOrden date null
);

create table detalle_orden(
    idDetalleOrden int primary key auto_increment,
    idOrdenFK int not null,
    numeroProyectoFK varchar(50) not null,
    posicion int null,
    estadoEnSesion varchar(20) not null check (estadoEnSesion in ('aprobado','aplazado','pendiente')),
    foreign key (idOrdenFK) references orden_del_dia(idOrden),
    foreign key (numeroProyectoFK) references proyecto(numero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

select * from detalle_orden;

create table auditoria_proyecto(
idAuditoria int primary key auto_increment,
fechaModificacion date not null,
accionRealizada varchar (100) not null,
usuarioResponsable varchar (50) not null,
idProyectoFK varchar (20),
foreign key (idProyectoFK) references proyecto(numero)
);

-- Datos de ejemplo - Orden del día 
INSERT INTO orden_del_dia (estadoOrden, tipoOrden, fechaOrden) VALUES
('activo', 'plenaria', '2026-04-23'),
('activo', 'comision', '2026-04-24'),
('activo', 'plenaria', '2026-04-25');

-- Datos de ejemplo detalle orden del día 
-- Orden del día 1 (2026-04-23) - 10 proyectos
INSERT INTO detalle_orden (idOrdenFK, numeroProyectoFK, posicion, estadoEnSesion) VALUES
    (1, '08 DE 2024', 1, 'pendiente'),
    (1, '232 DE 2024', 2, 'pendiente'),
    (1, '066 DE 2024', 3, 'pendiente'),
    (1, '303 DE 2024', 4, 'pendiente'),
    (1, '05 DE 2024', 5, 'pendiente'),
    (1, '389 DE 2024', 6, 'pendiente'),
    (1, '094 DE 2024', 7, 'pendiente'),
    (1, '308 DE 2024', 8, 'pendiente'),
    (1, '400 DE 2024', 9, 'pendiente'),
    (1, '357 DE 2024', 10, 'pendiente');
 
-- Orden del día 2 (2026-04-24) - 20 proyectos
INSERT INTO detalle_orden (idOrdenFK, numeroProyectoFK, posicion, estadoEnSesion) VALUES
    (2, '107 DE 2024', 1, 'pendiente'),
    (2, '373 DE 2024', 2, 'pendiente'),
    (2, '064 DE 2024', 3, 'pendiente'),
    (2, '119 DE 2025', 4, 'pendiente'),
    (2, '276 DE 2025', 5, 'pendiente'),
    (2, '053 DE 2024', 6, 'pendiente'),
    (2, '046 DE 2024', 7, 'pendiente'),
    (2, '313 DE 2024', 8, 'pendiente'),
    (2, '194 DE 2024', 9, 'pendiente'),
    (2, '626 DE 2025', 10, 'pendiente'),
    (2, '511 DE 2025', 11, 'pendiente'),
    (2, '498 DE 2025', 12, 'pendiente'),
    (2, '406 DE 2024', 13, 'pendiente'),
    (2, '029 DE 2025', 14, 'pendiente'),
    (2, '126 DE 2023', 15, 'pendiente'),
    (2, '057 DE 2025', 16, 'pendiente'),
    (2, '09 DE 2023', 17, 'pendiente'),
    (2, '375 DE 2024', 18, 'pendiente'),
    (2, '574 DE 2024', 19, 'pendiente'),
    (2, '270 DE 2024', 20, 'pendiente');
 
-- Orden del día 3 (2026-04-25) - 30 proyectos
INSERT INTO detalle_orden (idOrdenFK, numeroProyectoFK, posicion, estadoEnSesion) VALUES
    (3, '066 DE 2024', 1, 'pendiente'),
    (3, '580 DE 2025', 2, 'pendiente'),
    (3, '260 DE 2024', 3, 'pendiente'),
    (3, '268 DE 2024', 4, 'pendiente'),
    (3, '472 DE 2024', 5, 'pendiente'),
    (3, '423 DE 2024', 6, 'pendiente'),
    (3, '219 DE 2024', 7, 'pendiente'),
    (3, '456 DE 2024', 8, 'pendiente'),
    (3, '297 DE 2023', 9, 'pendiente'),
    (3, '070 DE 2024', 10, 'pendiente'),
    (3, '009 DE 2024', 11, 'pendiente'),
    (3, '221 DE 2023', 12, 'pendiente'),
    (3, '344 DE 2024', 13, 'pendiente'),
    (3, '075 DE 2024', 14, 'pendiente'),
    (3, '100 DE 2024', 15, 'pendiente'),
    (3, '424  DE 2024', 16, 'pendiente'),
    (3, '457 DE 2024', 17, 'pendiente'),
    (3, '189 DE 2024', 18, 'pendiente'),
    (3, '088 DE 2023', 19, 'pendiente'),
    (3, '549 DE 2024', 20, 'pendiente'),
    (3, '305 DE 2024', 21, 'pendiente'),
    (3, '121 DE 2024', 22, 'pendiente'),
    (3, '443 DE 2024', 23, 'pendiente'),
    (3, '185 DE 2024', 24, 'pendiente'),
    (3, '298 DE 2024', 25, 'pendiente'),
    (3, '247 DE 2024', 26, 'pendiente'),
    (3, '428 DE 2024', 27, 'pendiente'),
    (3, '198 DE 2025', 28, 'pendiente'),
    (3, '427 DE 2024', 29, 'pendiente'),
    (3, '207 DE 2023', 30, 'pendiente');

-- Datos de ejemplo auditoria proyectos 
INSERT INTO auditoria_proyecto (fechaModificacion, accionRealizada, usuarioResponsable, idProyectoFK) VALUES
    ('2026-01-29', 'Cambio de estado a inactivo', 'JUANITA', '268 DE 2024'),
    ('2026-04-09', 'Cambio de estado a aprobado', 'VALENTINA SOSSA', '549 DE 2024'),
    ('2026-03-28', 'Modificación de acción sugerida', 'MATEO GRISALES', '189 DE 2024'),
    ('2025-12-13', 'Actualización de ponentes', 'CAMILO QUINTERO', '357 DE 2024'),
    ('2025-12-31', 'Actualización de conceptos', 'CAMILO QUINTERO', '315 DE 2024'),
    ('2026-03-29', 'Actualización de síntesis del artículo', 'JUANITA', '189 DE 2024'),
    ('2025-11-28', 'Cambio de estado a aprobado', 'DANIEL URREA', '270 DE 2024'),
    ('2025-11-12', 'Modificación de consideraciones', 'CAMILO QUINTERO', '305 DE 2024'),
    ('2025-11-23', 'Actualización de conceptos', 'CAMILO QUINTERO', '389 DE 2024'),
    ('2026-04-10', 'Actualización de síntesis del artículo', 'VALENTINA SOSSA', '094 DE 2024'),
    ('2026-02-06', 'Actualización de conceptos', 'DANIEL URREA', '400 DE 2024'),
    ('2026-03-22', 'Modificación de consideraciones', 'JUAN PABLO CARDONA', '626 DE 2025'),
    ('2025-10-29', 'Cambio de estado a aprobado', 'CAMILO QUINTERO', '424  DE 2024'),
    ('2025-11-26', 'Actualización de ponentes', 'JUAN PABLO CARDONA', '298 DE 2024'),
    ('2025-12-02', 'Cambio de estado a aprobado', 'MATEO GRISALES', '189 DE 2024'),
    ('2025-11-14', 'Actualización de ponentes', 'JUANITA', '057 DE 2025'),
    ('2025-12-06', 'Actualización de conceptos', 'VALENTINA SOSSA', '192 DE 2025'),
    ('2025-12-23', 'Modificación de consideraciones', 'JUANITA', '428 DE 2024'),
    ('2026-02-04', 'Actualización de ponentes', 'VALENTINA SOSSA', '443 DE 2024'),
    ('2025-10-25', 'Actualización de ponentes', 'CAMILO QUINTERO', '305 DE 2024');

--  SECCIÓN 1: RQF001 – GESTIÓN DE ACCESO AL SISTEMA
-- -------------------------------------------------------
-- RQF001-01/02/03 | Login con validación completa
-- Stored procedure que autentica al usuario verificando
-- correo, contraseña y estado activo en un solo punto.
-- Si no retorna filas → el sistema muestra error de acceso.

DELIMITER $$
CREATE PROCEDURE sp_login(
    IN  p_correo     VARCHAR(50),
    IN  p_contrasena VARCHAR(50)
)
BEGIN
    -- Valida credenciales y estado activo en una sola consulta
    -- Si el resultado está vacío: credenciales incorrectas o inactivo
    SELECT idUsuario, nombreUsuario, rol
    FROM   usuario
    WHERE  correoUsuario = p_correo
      AND  contrasena    = p_contrasena
      AND  estado        = 'activo';
END$$
DELIMITER ;

-- USO 
Call sp_login('juanita@mail.com', 'juanita2025');

-- ------------------------------------------------------------
-- RQF001-04 | Identificación automática de rol
-- Devuelve el rol del usuario una vez autenticado para
-- determinar qué funcionalidades se habilitan.

DELIMITER $$
CREATE PROCEDURE sp_obtener_rol(IN p_correo VARCHAR(50))
BEGIN
    SELECT rol
    FROM   usuario
    WHERE  correoUsuario = p_correo
      AND  estado        = 'activo';
END$$
DELIMITER ;

Call sp_obtener_rol('juanita@mail.com');

-- ------------------------------------------------------------
-- RQF001-05 | Control de acceso por rol
-- Consulta de apoyo: lista usuarios filtrados por rol para
-- que el sistema muestre solo las opciones correspondientes.

-- Ver usuarios del equipo legislativo
SELECT idUsuario, nombreUsuario, correoUsuario, estado
FROM   usuario
WHERE  rol = 'legislativo';
 
-- Ver usuarios del equipo general
SELECT idUsuario, nombreUsuario, correoUsuario, estado
FROM   usuario
WHERE  rol = 'general';

-- ------------------------------------------------------------
-- RQF001-06 | Cambiar contraseña personal
-- Stored procedure que actualiza la contraseña de cualquier
-- usuario autenticado de forma segura.
DELIMITER $$
CREATE PROCEDURE sp_cambio_contrasena(
    IN p_correo          VARCHAR(50),
    IN p_nueva_contrasena VARCHAR(50)
)
BEGIN
    UPDATE usuario
    SET    contrasena = p_nueva_contrasena
    WHERE  correoUsuario = p_correo
      AND  estado        = 'activo';
 
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Usuario no encontrado o inactivo.';
			ELSE
        SELECT 'Contraseña actualizada exitosamente.' AS mensaje;
    END IF;
END$$
DELIMITER ;
CALL sp_cambio_contrasena('daniel.urrea@mail.com', 'DaniU2025');
-- ============================================================
--  SECCIÓN 2: RQF002 – GESTIÓN DE USUARIOS
-- RQF002-01 | Registrar usuario
-- Stored procedure que crea un nuevo usuario validando que
-- el correo no esté duplicado en la base de datos.
DELIMITER $$
CREATE PROCEDURE sp_registrar_usuario(
    IN p_nombre    VARCHAR(50),
    IN p_correo    VARCHAR(50),
    IN p_celular   VARCHAR(10),
    IN p_contrasena VARCHAR(50),
    IN p_rol       VARCHAR(30)
)
BEGIN
    IF EXISTS (SELECT 1 FROM usuario WHERE correoUsuario = p_correo) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Ya existe un usuario con ese correo electrónico.';
    ELSE
        INSERT INTO usuario (nombreUsuario, correoUsuario, celularUsuario, contrasena, estado, rol)
        VALUES (p_nombre, p_correo, p_celular, p_contrasena, 'activo', p_rol);
    END IF;
END$$
DELIMITER ;
CALL sp_registrar_usuario('Cristian Arevalo','cris.are@gmail.com','3216549876','cris1234','general');
-- ------------------------------------------------------------
-- RQF002-02 | Asignar y modificar rol a usuario
-- Cambia el rol de un usuario; los permisos se actualizan
-- de inmediato al validar el rol en cada sesión.
UPDATE usuario
SET    rol = 'legislativo'
WHERE  idUsuario = 5;
-- ------------------------------------------------------------
-- RQF002-03 | Consultar usuarios
-- Listado completo con rol y estado. Variantes útiles.
-- Todos los usuarios
SELECT * FROM usuario;
-- Ordenados alfabéticamente
SELECT idUsuario, nombreUsuario, correoUsuario, rol, estado
FROM   usuario
ORDER  BY nombreUsuario ASC;
-- Conteo por rol
SELECT rol, COUNT(*) AS totalUsuarios
FROM   usuario
GROUP  BY rol;
-- Buscar usuario por correo
SELECT * FROM usuario
WHERE  correoUsuario = 'cris.are@gmail.com';
-- ------------------------------------------------------------
-- RQF002-04 | Actualizar datos de usuario
-- Modifica datos de un usuario verificando que el nuevo
-- correo no esté ya en uso por otro usuario.
DELIMITER $$
CREATE PROCEDURE sp_actualizar_usuario(
    IN p_id         INT,
    IN p_nombre     VARCHAR(50),
    IN p_correo     VARCHAR(50),
    IN p_celular    VARCHAR(10)
)
BEGIN
    IF EXISTS (
        SELECT 1 FROM usuario
        WHERE correoUsuario = p_correo AND idUsuario <> p_id
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El correo ya está en uso por otro usuario.';
    ELSE
        UPDATE usuario
        SET    nombreUsuario  = p_nombre,
               correoUsuario  = p_correo,
               celularUsuario = p_celular
        WHERE  idUsuario = p_id;
    END IF;
END$$
DELIMITER ;
CALL sp_actualizar_usuario(1, 'Cristian Arévalo', 'cristian.new@gmail.com', '3001234567');
-- ------------------------------------------------------------
-- RQF002-05 | Consulta de proyectos asignados por usuario
-- Muestra la carga de trabajo de cada asesor del grupo
-- general para facilitar redistribución de responsabilidades.
SELECT u.nombreUsuario,
       u.rol,
       COUNT(p.numero) AS proyectosAsignados
FROM   usuario u
LEFT   JOIN proyecto p ON u.idUsuario = p.idUsuarioFK
GROUP  BY u.idUsuario, u.nombreUsuario, u.rol
ORDER  BY proyectosAsignados DESC;
 
-- Detalle de proyectos de un usuario específico (JOIN)
SELECT u.nombreUsuario,
       p.numero,
       p.nombreProyecto,
       p.estadoProyecto,
       p.fechaDebate
FROM   proyecto p
INNER  JOIN usuario u ON p.idUsuarioFK = u.idUsuario
WHERE  u.nombreUsuario = 'JUANITA';
 
-- Usuarios que SÍ tienen proyectos asignados (EXISTS)
SELECT idUsuario, nombreUsuario, rol, estado
FROM   usuario u
WHERE  EXISTS (
    SELECT 1 FROM proyecto p WHERE p.idUsuarioFK = u.idUsuario
);
-- ------------------------------------------------------------
-- RQF002-06 | Inactivar usuario
-- Cambia estado a 'inactivo', bloqueando el acceso sin
-- eliminar su historial ni los proyectos asociados.
DELIMITER $$
CREATE PROCEDURE sp_inactivar_usuario(IN p_id INT)
BEGIN
    UPDATE usuario
    SET    estado = 'inactivo'
    WHERE  idUsuario = p_id;
 
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Usuario no encontrado.';
    END IF;
END$$
DELIMITER ;
CALL sp_inactivar_usuario(8);
-- Verificar usuarios inactivos
SELECT idUsuario, nombreUsuario, correoUsuario, rol
FROM   usuario
WHERE  estado = 'inactivo';
-- ============================================================
--  SECCIÓN 3: RQF003 – GESTIÓN DE PROYECTOS
-- ============================================================
-- RQF003-01 | Registrar proyecto
-- Stored procedure que registra un nuevo proyecto validando
-- que el número no esté duplicado.
DELIMITER $$
CREATE PROCEDURE sp_registrar_proyecto(
    IN p_numero          VARCHAR(20),
    IN p_nombre          VARCHAR(200),
    IN p_estado          VARCHAR(20),
    IN p_personaAsignada VARCHAR(50),
    IN p_fechaDebate     DATE,
    IN p_autores         VARCHAR(100),
    IN p_ponentes        VARCHAR(100),
    IN p_idUsuario       INT
)
BEGIN
    IF EXISTS (SELECT 1 FROM proyecto WHERE numero = p_numero) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Ya existe un proyecto con ese número de radicación.';
    ELSE
        INSERT INTO proyecto (numero, nombreProyecto, estadoProyecto, personaAsignada,
                              fechaDebate, autores, ponentes, idUsuarioFK)
        VALUES (p_numero, p_nombre, p_estado, p_personaAsignada,
                p_fechaDebate, p_autores, p_ponentes, p_idUsuario);
    END IF;
END$$
DELIMITER ;
CALL sp_registrar_proyecto('001 DE 2026','Proyecto Ejemplo','radicado',
'JUANITA','2026-05-01','Autor A','Ponente B',1);
-- ------------------------------------------------------------
-- RQF003-02 | Consultar proyectos
-- Listado general con información básica. Variantes por
-- estado, fecha y distribución.
-- Todos los proyectos
SELECT * FROM proyecto;
-- Por estado específico
SELECT numero, nombreProyecto,  fechaDebate, personaAsignada
FROM   proyecto
WHERE  estadoProyecto = 'Pendiente P';
-- Por rango de fechas de debate
SELECT nombreProyecto, estadoProyecto, personaAsignada, fechaDebate
FROM   proyecto
WHERE  fechaDebate BETWEEN '01/01/2025' AND '31/12/2025'
ORDER  BY fechaDebate ASC;
-- Proyecto con la fecha de debate más reciente (subconsulta)
SELECT numero, nombreProyecto, estadoProyecto, fechaDebate, personaAsignada
FROM   proyecto
WHERE  fechaDebate = (SELECT MAX(fechaDebate) FROM proyecto);
-- ------------------------------------------------------------
-- RQF003-03 | Consulta detallada (ficha completa) de proyecto
-- Devuelve todos los campos de un proyecto específico con
-- datos del usuario responsable.
-- Ficha completa por número de radicación
SELECT * FROM proyecto
WHERE  numero = '029 DE 2025';
-- Con datos del responsable (JOIN)
SELECT p.*, u.nombreUsuario AS responsable, u.correoUsuario, u.rol
FROM   proyecto p
INNER  JOIN usuario u ON p.idUsuarioFK = u.idUsuario
WHERE  p.numero = '029 DE 2025';
-- Proyectos con conflicto de interés
SELECT numero, nombreProyecto, estadoProyecto, conflictoDeInteres, estadoCi
FROM   proyecto
WHERE  conflictoDeInteres = 'APLICA';
-- Proyectos con proposición pendiente
SELECT numero, nombreProyecto, estadoProposicion, linkProposicion
FROM   proyecto
WHERE  estadoProposicion = 'pendiente';
-- ------------------------------------------------------------
-- RQF003-04 | Editar proyecto (equipoLegislativo)
-- Modifica cualquier campo de un proyecto validando que
-- no esté bloqueado antes de guardar cambios.
-- (La validación de bloqueo se centraliza en sp_cambiar_estado)
UPDATE proyecto
SET   nombreProyecto = 'Título actualizado',
      ponentes       = 'Nuevo ponente'
WHERE numero = '029 DE 2025'
  AND estadoProyecto <> 'bloqueado';
-- ------------------------------------------------------------
-- RQF003-05 | Asignación de proyecto
-- Reasigna un proyecto a otro usuario del grupo general.
UPDATE proyecto
SET   personaAsignada = 'CAMILO QUINTERO',
      idUsuarioFK     = 1
WHERE numero = '005 DE 2024'
  AND estadoProyecto <> 'bloqueado';
-- ------------------------------------------------------------
-- RQF003-06 | Validar asignación para permiso de edición
-- El grupo general solo puede editar proyectos asignados
-- a su propio usuario.
-- Proyectos asignados a un usuario específico (por nombre)
SELECT numero, nombreProyecto, estadoProyecto, fechaDebate
FROM   proyecto
WHERE  idUsuarioFK = (
    SELECT idUsuario FROM usuario WHERE nombreUsuario = 'JUANITA'
);
-- Proyectos de todos los usuarios con rol 'general'
SELECT numero, nombreProyecto, estadoProyecto, personaAsignada, fechaDebate
FROM   proyecto
WHERE  idUsuarioFK IN (
    SELECT idUsuario FROM usuario WHERE rol = 'general'
)
ORDER  BY personaAsignada;
-- ------------------------------------------------------------
-- RQF003-07 | Cambiar estado de proyecto
-- Stored procedure que actualiza el estado verificando
-- que el proyecto no esté bloqueado antes de aplicar el cambio.
DELIMITER $$
CREATE PROCEDURE sp_cambiar_estado_proyecto(
    IN p_numero    VARCHAR(20),
    IN p_nuevoEstado VARCHAR(20)
)
BEGIN
    DECLARE v_estadoActual VARCHAR(20);
 
    SELECT estadoProyecto INTO v_estadoActual
    FROM   proyecto
    WHERE  numero = p_numero;
 
    IF v_estadoActual IS NULL THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El proyecto no existe.';
    ELSEIF v_estadoActual = 'bloqueado' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El proyecto está bloqueado y no puede modificarse.';
    ELSE
        UPDATE proyecto
        SET    estadoProyecto = p_nuevoEstado
        WHERE  numero = p_numero;
    END IF;
END$$
DELIMITER ;
CALL sp_cambiar_estado_proyecto('070 DE 2024', 'aprobado');
-- ------------------------------------------------------------
-- RQF003-08 | Bloquear proyecto
-- Marca el proyecto como bloqueado. A partir de este momento
-- sp_cambiar_estado_proyecto rechazará cualquier modificación.
DELIMITER $$
CREATE PROCEDURE sp_bloquear_proyecto(IN p_numero VARCHAR(20))
BEGIN
    IF NOT EXISTS (SELECT 1 FROM proyecto WHERE numero = p_numero) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El proyecto no existe.';
    ELSE
        UPDATE proyecto
        SET    estadoProyecto = 'bloqueado'
        WHERE  numero = p_numero;
    END IF;
END$$
DELIMITER ;
CALL sp_bloquear_proyecto('005 DE 2024');
-- ============================================================
--  SECCIÓN 4: RQF004 – GESTIÓN DEL ORDEN DEL DÍA
-- ============================================================
-- RQF004-01 | Creación del orden del día
-- Stored procedure que crea un orden del día evitando
-- duplicar sesiones del mismo tipo en la misma fecha.
DELIMITER $$
CREATE PROCEDURE sp_crear_orden_del_dia(
    IN p_tipo  VARCHAR(50),
    IN p_fecha DATE
)
BEGIN
    IF EXISTS (
        SELECT 1 FROM orden_del_dia
        WHERE tipoOrden = p_tipo AND fechaOrden = p_fecha
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Ya existe una sesión de ese tipo para esa fecha.';
    ELSE
        INSERT INTO orden_del_dia (estadoOrden, tipoOrden, fechaOrden)
        VALUES ('activo', p_tipo, p_fecha);
    END IF;
END$$
DELIMITER ;
CALL sp_crear_orden_del_dia('plenaria', '2026-05-10');
-- Filtrar órdenes por tipo de sesión
SELECT idOrden, fechaOrden, estadoOrden
FROM   orden_del_dia
WHERE  tipoOrden = 'plenaria'
ORDER  BY fechaOrden ASC;
-- ------------------------------------------------------------
-- RQF004-02 | Añadir proyectos al orden del día
-- Stored procedure que agrega un proyecto a una sesión
-- validando que no esté ya incluido en la misma.
DELIMITER $$
CREATE PROCEDURE sp_agregar_a_orden(
    IN p_idOrden   INT,
    IN p_numero    VARCHAR(20),
    IN p_posicion  INT
)
BEGIN
    IF EXISTS (
        SELECT 1 FROM detalle_orden
        WHERE idOrdenFK = p_idOrden AND numeroProyectoFK = p_numero
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El proyecto ya está incluido en esta sesión.';
    ELSE
        INSERT INTO detalle_orden (idOrdenFK, numeroProyectoFK, posicion, estadoEnSesion)
        VALUES (p_idOrden, p_numero, p_posicion, 'pendiente');
    END IF;
END$$
DELIMITER ;
CALL sp_agregar_a_orden(1, '029 DE 2025', 11);
-- Proyectos que NUNCA han sido programados en ninguna sesión
SELECT numero, nombreProyecto, estadoProyecto, personaAsignada
FROM   proyecto
WHERE  numero NOT IN (
    SELECT numeroProyectoFK FROM detalle_orden
    WHERE  numeroProyectoFK IS NOT NULL
);
-- ------------------------------------------------------------
-- RQF004-03 | Establecer prioridad en el orden del día
-- Modifica el número de orden (posición) de un proyecto
-- dentro de una sesión específica.
UPDATE detalle_orden
SET    posicion = 3
WHERE  idOrdenFK = 1
  AND  numeroProyectoFK = '066 DE 2024';
-- ------------------------------------------------------------
-- RQF004-04 | Consultar orden del día
-- Variantes: básica / completa con JOIN / por fecha / próximas.
-- Consulta básica: sesiones registradas
SELECT idOrden, estadoOrden, tipoOrden, fechaOrden
FROM   orden_del_dia
WHERE  fechaOrden = '2026-04-25';
 
-- Orden del día completo con nombre y responsable de cada proyecto
SELECT o.fechaOrden,
       o.tipoOrden,
       d.posicion,
       d.estadoEnSesion,
       p.numero,
       p.nombreProyecto,
       p.estadoProyecto,
       u.nombreUsuario AS responsable,
       p.accionSugerida
FROM   orden_del_dia o
INNER  JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER  JOIN proyecto p      ON d.numeroProyectoFK = p.numero
INNER  JOIN usuario u       ON p.idUsuarioFK = u.idUsuario
ORDER  BY o.fechaOrden ASC, d.posicion ASC;
 
-- Orden del día de una fecha específica
SELECT o.tipoOrden, o.fechaOrden,
       p.numero, p.nombreProyecto, p.estadoProyecto,
       p.personaAsignada, p.accionSugerida
FROM   orden_del_dia o
INNER  JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER  JOIN proyecto p      ON d.numeroProyectoFK = p.numero
WHERE  o.fechaOrden = '2026-04-25'
ORDER  BY d.posicion ASC;
-- Sesiones desde hoy en adelante
SELECT idOrden, tipoOrden, fechaOrden, estadoOrden
FROM   orden_del_dia
WHERE  fechaOrden >= CURDATE()
ORDER  BY fechaOrden ASC;
-- Último orden del día registrado
SELECT * FROM orden_del_dia
ORDER  BY fechaOrden DESC
LIMIT  1;
-- Conteo de sesiones por tipo
SELECT tipoOrden, COUNT(*) AS totalSesiones
FROM   orden_del_dia
GROUP  BY tipoOrden;
-- Proyectos pendientes en sesión
SELECT * FROM detalle_orden
WHERE  estadoEnSesion = 'pendiente';
-- ------------------------------------------------------------
-- RQF004-05 | Eliminar proyecto del orden del día
-- Retira un proyecto de una sesión SIN eliminarlo del sistema.
-- Por ID del detalle
DELETE FROM detalle_orden
WHERE  idDetalleOrden = 1;
-- Proyecto específico de una orden específica
DELETE FROM detalle_orden
WHERE  idOrdenFK = 1
  AND  numeroProyectoFK = '08 DE 2024';
-- Cambiar estado de un proyecto en sesión a 'aplazado'
UPDATE detalle_orden
SET    estadoEnSesion = 'aplazado'
WHERE  idOrdenFK = 1
  AND  numeroProyectoFK = '08 DE 2024';
-- ============================================================
--  SECCIÓN 5: RQF005 – SEGUIMIENTO Y VISUALIZACIÓN DEL PROGRESO
-- ============================================================
-- RQF005-01 | Visualizar progreso individual
-- Vista que muestra el avance de cada asesor del grupo
-- general en el diligenciamiento de sus proyectos.
CREATE VIEW vista_progreso_individual AS
SELECT u.idUsuario,
       u.nombreUsuario,
       COUNT(p.numero)                                                        AS totalAsignados,
       SUM(CASE WHEN p.estadoProyecto = 'aprobado'   THEN 1 ELSE 0 END)      AS aprobados,
       SUM(CASE WHEN p.estadoProyecto LIKE '%Pendiente%' THEN 1 ELSE 0 END)  AS pendientes,
       ROUND(
           SUM(CASE WHEN p.estadoProyecto = 'aprobado' THEN 1 ELSE 0 END)
           * 100.0 / NULLIF(COUNT(p.numero), 0), 2
       )                                                                      AS porcentajeAvance
FROM   usuario u
LEFT   JOIN proyecto p ON u.idUsuario = p.idUsuarioFK
GROUP  BY u.idUsuario, u.nombreUsuario;
SELECT * FROM vista_progreso_individual;
-- Filtrar por usuario: 
SELECT * FROM vista_progreso_individual WHERE nombreUsuario = 'VALENTINA SOSSA';
-- ------------------------------------------------------------
-- RQF005-02 | Visualizar progreso consolidado
-- Vista que acumula el avance de todos los asesores para
-- que el equipo legislativo tenga una visión global.
CREATE VIEW vista_progreso_consolidado AS
SELECT u.nombreUsuario,
       u.rol,
       COUNT(p.numero)                                                   AS totalProyectos,
       SUM(CASE WHEN p.estadoProyecto = 'aprobado'  THEN 1 ELSE 0 END)  AS aprobados,
       SUM(CASE WHEN p.estadoProyecto = 'en debate' THEN 1 ELSE 0 END)  AS enDebate,
       SUM(CASE WHEN p.estadoProyecto LIKE '%Pendiente%' THEN 1 ELSE 0 END) AS pendientes,
       ROUND(
           SUM(CASE WHEN p.estadoProyecto = 'aprobado' THEN 1 ELSE 0 END)
           * 100.0 / NULLIF(COUNT(p.numero), 0), 2
       )                                                                 AS porcentajeAvance
FROM   usuario u
LEFT   JOIN proyecto p ON u.idUsuario = p.idUsuarioFK
GROUP  BY u.idUsuario, u.nombreUsuario, u.rol
ORDER  BY totalProyectos DESC;
SELECT * FROM vista_progreso_consolidado;
-- ------------------------------------------------------------
-- RQF005-03 | Indicador de proyectos pendientes
-- Total de proyectos pendientes globales y por usuario.
-- Total global pendientes
SELECT COUNT(*) AS totalPendientesGlobal
FROM   proyecto p
INNER  JOIN usuario u ON p.idUsuarioFK = u.idUsuario
WHERE  u.rol = 'general'
  AND  p.estadoProyecto LIKE '%Pendiente%';
-- Pendientes por usuario
SELECT u.nombreUsuario, COUNT(*) AS pendientes
FROM   usuario u
INNER  JOIN proyecto p ON p.idUsuarioFK = u.idUsuario
  AND  p.estadoProyecto LIKE '%Pendiente%'
GROUP  BY u.idUsuario, u.nombreUsuario
ORDER  BY pendientes DESC;
-- ------------------------------------------------------------
-- RQF005-04 | Indicador de proyectos por estado
-- Vista con distribución de proyectos por estado legislativo
-- con porcentaje, lista para alimentar gráficas.
CREATE VIEW vista_proyectos_por_estado AS
SELECT estadoProyecto,
       COUNT(*) AS cantidad,
       ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM proyecto), 2) AS porcentaje
FROM   proyecto
GROUP  BY estadoProyecto
ORDER  BY cantidad DESC;
SELECT * FROM vista_proyectos_por_estado;
-- ------------------------------------------------------------
-- RQF005-05 | Filtrar tablero por usuario específico
-- Permite al legislativo revisar el avance de un asesor
-- en particular. Incluye subconsulta con HAVING para
-- identificar asesores sobre el promedio de carga.
-- -----------------------------------------------------
-- Filtrar por nombre de usuario
SELECT u.nombreUsuario,
       p.numero, p.nombreProyecto, p.estadoProyecto, p.fechaDebate
FROM   proyecto p
INNER  JOIN usuario u ON p.idUsuarioFK = u.idUsuario
  AND  u.nombreUsuario = 'JUANITA';
-- Usuarios con más proyectos que el promedio del equipo
SELECT idUsuarioFK, COUNT(*) AS totalProyectos
FROM   proyecto
GROUP  BY idUsuarioFK
HAVING COUNT(*) > (
    SELECT AVG(conteo)
    FROM   (SELECT COUNT(*) AS conteo FROM proyecto GROUP BY idUsuarioFK) AS promedios
);
-- ============================================================
-- Vista de seguimiento del progreso por sesión legislativa
-- (complementa RQF005 con datos del orden del día)
CREATE VIEW vista_seguimiento_progreso AS
SELECT o.idOrden,
       o.fechaOrden,
       o.tipoOrden,
       o.estadoOrden                                                       AS estadoSesion,
       COUNT(d.numeroProyectoFK)                                           AS totalProyectos,
       SUM(CASE WHEN d.estadoEnSesion = 'aprobado'  THEN 1 ELSE 0 END)    AS aprobados,
       SUM(CASE WHEN d.estadoEnSesion = 'aplazado'  THEN 1 ELSE 0 END)    AS aplazados,
       SUM(CASE WHEN d.estadoEnSesion = 'pendiente' THEN 1 ELSE 0 END)    AS pendientes,
       ROUND(
           SUM(CASE WHEN d.estadoEnSesion = 'aprobado' THEN 1 ELSE 0 END)
           * 100.0 / NULLIF(COUNT(d.numeroProyectoFK), 0), 2
       )                                                                   AS porcentajeAprobacion
FROM   orden_del_dia o
INNER  JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
GROUP  BY o.idOrden, o.fechaOrden, o.tipoOrden, o.estadoOrden;
SELECT * FROM vista_seguimiento_progreso;
-- ============================================================
--  SECCIÓN 6: RQF006 – GENERACIÓN DE REPORTES
-- ============================================================
-- RQF006-01 | Reporte por estado legislativo
-- Lista proyectos agrupados por estado con cantidad y
-- porcentaje. Usa la vista creada en RQF005-04.
SELECT * FROM vista_proyectos_por_estado;
-- ------------------------------------------------------------
-- RQF006-02 | Reporte por responsable asignado
-- Proyectos de cada asesor con conteo por estado.
-- Usa la vista creada en RQF005-02.
SELECT * FROM vista_progreso_consolidado;
-- ------------------------------------------------------------
-- RQF006-03 | Reporte por fecha de radicación
-- Stored procedure parametrizado para generar el reporte
-- por cualquier rango de fechas.
DELIMITER $$
CREATE PROCEDURE sp_reporte_por_fecha(
    IN p_fechaInicio varchar(15),
    IN p_fechaFin    varchar(15)
)
BEGIN
    SELECT numero, nombreProyecto, estadoProyecto, personaAsignada, fechaDebate
    FROM   proyecto
    WHERE  fechaDebate BETWEEN p_fechaInicio AND p_fechaFin
    ORDER  BY fechaDebate ASC;
END$$
DELIMITER ;
CALL sp_reporte_por_fecha('10/05/2025','31/12/2025');
-- ------------------------------------------------------------
-- RQF006-04 | Reporte de orden del día por sesión (exportable)
-- Stored procedure parametrizado por fecha: genera el
-- reporte completo listo para exportar a PDF o Excel.
DELIMITER $$
CREATE PROCEDURE sp_reporte_orden_del_dia(IN p_fecha DATE)
BEGIN
    SELECT o.fechaOrden,
           o.tipoOrden,
           o.estadoOrden,
           p.numero         AS numProyecto,
           p.nombreProyecto,
           p.autores,
           p.ponentes,
           p.estadoProyecto,
           p.accionSugerida,
           u.nombreUsuario  AS responsable,
           d.posicion       AS ordenEnSesion,
           d.estadoEnSesion
    FROM   orden_del_dia o
    INNER  JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
    INNER  JOIN proyecto p      ON d.numeroProyectoFK = p.numero
    INNER  JOIN usuario u       ON p.idUsuarioFK = u.idUsuario
    WHERE  o.fechaOrden = p_fecha
    ORDER  BY d.posicion ASC;
END$$
DELIMITER ;
CALL sp_reporte_orden_del_dia('2026-04-23');
-- Veces que cada proyecto ha aparecido en el orden del día
SELECT p.numero,
       p.nombreProyecto,
       p.estadoProyecto,
       (SELECT COUNT(*) FROM detalle_orden d
        WHERE d.numeroProyectoFK = p.numero) AS vecesEnOrdenDelDia
FROM   proyecto p
ORDER  BY vecesEnOrdenDelDia DESC;
-- RQF006-05 | Exportar reporte
-- La exportación a PDF/Excel se gestiona desde la capa de
-- aplicación. Los stored procedures de esta sección proveen
-- los datasets listos para exportar.
-- ============================================================
--  SECCIÓN 7: RQF007 – GESTIÓN DE HISTORIA Y TRAZABILIDAD
-- ============================================================
-- RQF007-01 | Registrar cambios automáticamente
-- TRIGGER: registra automáticamente en auditoria_proyecto
-- cada vez que cambia el estado de un proyecto, capturando
-- campo, valor anterior, valor nuevo, fecha/hora y usuario.
-- Esto ocurre a nivel de BD, sin depender del backend.
DELIMITER $$
CREATE TRIGGER trg_auditoria_estado
AFTER UPDATE ON proyecto
FOR EACH ROW
BEGIN
    -- Audita cambio de estado
    IF OLD.estadoProyecto <> NEW.estadoProyecto THEN
        INSERT INTO auditoria_proyecto
            (fechaModificacion, campoModificado, valorAnterior, valorNuevo,
             accionRealizada, usuarioResponsable, idProyectoFK)
        VALUES
            (NOW(), 'estadoProyecto', OLD.estadoProyecto, NEW.estadoProyecto,
             CONCAT('Estado cambiado de "', OLD.estadoProyecto, '" a "', NEW.estadoProyecto, '"'),
             NEW.personaAsignada, NEW.numero);
    END IF;
 
    -- Audita cambio de persona asignada
    IF OLD.personaAsignada <> NEW.personaAsignada THEN
        INSERT INTO auditoria_proyecto
            (fechaModificacion, campoModificado, valorAnterior, valorNuevo,
             accionRealizada, usuarioResponsable, idProyectoFK)
        VALUES
            (NOW(), 'personaAsignada', OLD.personaAsignada, NEW.personaAsignada,
             CONCAT('Reasignado de "', OLD.personaAsignada, '" a "', NEW.personaAsignada, '"'),
             NEW.personaAsignada, NEW.numero);
    END IF;
 
    -- Audita cambio de ponentes
    IF OLD.ponentes <> NEW.ponentes THEN
        INSERT INTO auditoria_proyecto
            (fechaModificacion, campoModificado, valorAnterior, valorNuevo,
             accionRealizada, usuarioResponsable, idProyectoFK)
        VALUES
            (NOW(), 'ponentes', OLD.ponentes, NEW.ponentes,
             'Actualización de ponentes',
             NEW.personaAsignada, NEW.numero);
    END IF;
END$$
DELIMITER ;
-- Proyectos SIN ningún registro de auditoría
SELECT numero, nombreProyecto, personaAsignada
FROM   proyecto
WHERE  numero NOT IN (
    SELECT idProyectoFK FROM auditoria_proyecto
    WHERE  idProyectoFK IS NOT NULL
);
-- ------------------------------------------------------------
-- RQF007-02 | Consultar historial de un proyecto
-- Vista que muestra el historial completo de cambios con
-- el nombre del proyecto en lugar del ID.
CREATE VIEW vista_historial_proyectos AS
SELECT a.idAuditoria,
       p.numero,
       p.nombreProyecto,
       p.estadoProyecto,
       a.fechaModificacion,
       a.accionRealizada,
       a.usuarioResponsable
FROM   auditoria_proyecto a
INNER  JOIN proyecto p ON a.idProyectoFK = p.numero
ORDER  BY a.fechaModificacion DESC;
SELECT * FROM vista_historial_proyectos WHERE numero = '268 DE 2024';
-- Historial de un proyecto específico (ordenado más reciente primero)
SELECT idAuditoria, fechaModificacion, accionRealizada, usuarioResponsable
FROM   auditoria_proyecto
WHERE  idProyectoFK = '315 DE 2024'
ORDER  BY fechaModificacion DESC;
-- Conteo de modificaciones por proyecto
SELECT idProyectoFK, COUNT(*) AS totalModificaciones
FROM   auditoria_proyecto
GROUP  BY idProyectoFK
ORDER  BY totalModificaciones DESC;
-- Últimos 10 cambios en todo el sistema
SELECT idAuditoria, fechaModificacion, accionRealizada,
       usuarioResponsable, idProyectoFK
FROM   auditoria_proyecto
ORDER  BY fechaModificacion DESC
LIMIT  10;
-- ------------------------------------------------------------
-- RQF007-03 | Filtrar historial por usuario
-- Identifica qué modificaciones realizó cada integrante
-- del equipo, con conteo total de acciones.
-- Historial de un usuario específico
SELECT idAuditoria, fechaModificacion, accionRealizada, idProyectoFK
FROM   auditoria_proyecto
WHERE  usuarioResponsable = 'CAMILO QUINTERO'
ORDER  BY fechaModificacion DESC;
-- Conteo de acciones por usuario
SELECT usuarioResponsable, COUNT(*) AS totalAcciones
FROM   auditoria_proyecto
GROUP  BY usuarioResponsable
ORDER  BY totalAcciones DESC;
-- Historial completo con rol del responsable (JOIN triple)
SELECT a.fechaModificacion,
       p.nombreProyecto,
       p.numero,
       a.accionRealizada,
       a.usuarioResponsable,
       u.rol AS rolResponsable
FROM   auditoria_proyecto a
INNER  JOIN proyecto p ON a.idProyectoFK = p.numero
INNER  JOIN usuario u  ON u.nombreUsuario = a.usuarioResponsable
ORDER  BY a.fechaModificacion DESC;
-- ------------------------------------------------------------
-- RQF007-04 | Filtrar historial por fecha
-- Stored procedure parametrizado para revisar cambios
-- en cualquier rango de fechas.
DELIMITER $$
CREATE PROCEDURE sp_historial_por_fecha(
    IN p_fechaInicio DATE,
    IN p_fechaFin    DATE
)
BEGIN
    SELECT idAuditoria, fechaModificacion, accionRealizada,
           usuarioResponsable, idProyectoFK
    FROM   auditoria_proyecto
    WHERE  fechaModificacion BETWEEN p_fechaInicio AND p_fechaFin
    ORDER  BY fechaModificacion ASC;
END$$
DELIMITER ;
CALL sp_historial_por_fecha('2026-01-01', '2026-04-30');
-- Buscar en auditoría por tipo de acción
SELECT idAuditoria, fechaModificacion, usuarioResponsable, idProyectoFK
FROM   auditoria_proyecto
WHERE  accionRealizada LIKE '%estado%'
ORDER  BY fechaModificacion DESC;
-- ------------------------------------------------------------
-- RQF007-05 | Trazabilidad entre debates
-- Vista que muestra en qué debates (comisión/plenaria) ha
-- participado cada proyecto, con su estado en cada sesión.
CREATE VIEW vista_trazabilidad_debates AS
SELECT p.numero,
       p.nombreProyecto,
       p.estadoProyecto,
       o.tipoOrden,
       o.fechaOrden,
       d.posicion,
       d.estadoEnSesion
FROM   detalle_orden d
INNER  JOIN orden_del_dia o ON d.idOrdenFK    = o.idOrden
INNER  JOIN proyecto p      ON d.numeroProyectoFK = p.numero
ORDER  BY p.numero, o.fechaOrden ASC;
SELECT * FROM vista_trazabilidad_debates WHERE numero = '066 DE 2024';
-- Proyectos que nunca han sido incluidos en ningún debate
SELECT numero, nombreProyecto, estadoProyecto, personaAsignada
FROM   proyecto
WHERE  numero NOT IN (
    SELECT numeroProyectoFK FROM detalle_orden
    WHERE  numeroProyectoFK IS NOT NULL
);
ALTER TABLE auditoria_proyecto
  ADD COLUMN campoModificado VARCHAR(100) NULL AFTER accionRealizada,
  ADD COLUMN valorAnterior   LONGTEXT     NULL AFTER campoModificado,
  ADD COLUMN valorNuevo      LONGTEXT     NULL AFTER valorAnterior;
  
  DESCRIBE auditoria_proyecto;
  
DROP PROCEDURE IF EXISTS sp_crear_orden_del_dia;
DELIMITER $$
CREATE PROCEDURE sp_crear_orden_del_dia(
    IN p_tipo  VARCHAR(50),
    IN p_fecha DATE
)
BEGIN
    -- Si ya existe la sesión simplemente no la duplica (no lanza error)
    INSERT IGNORE INTO orden_del_dia (estadoOrden, tipoOrden, fechaOrden)
    VALUES ('activo', p_tipo, p_fecha);

    -- Devuelve el id (sea nuevo o ya existente) para que el backend lo use
    SELECT idOrden FROM orden_del_dia
    WHERE  tipoOrden = p_tipo AND fechaOrden = p_fecha
    LIMIT 1;
END$$
DELIMITER ;

select * from proyecto;
USE proyectoLegislativo;
CALL sp_login('juanita@mail.com', '122002');
SELECT DISTINCT estadoProyecto FROM proyecto ORDER BY estadoProyecto;
describe proyecto;