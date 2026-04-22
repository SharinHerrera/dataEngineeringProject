drop database if exists proyectolegislativo;
create database proyectoLegislativo;
use proyectoLegislativo;

create table usuario(
idUsuario int primary key auto_increment,
nombreUsuario varchar (50) not null,
correoUsuario varchar(50) unique not null,
celularUsuario varchar (10) not null,
contrasena varchar (50) unique not null,
estado varchar (20) not null,
rol varchar (30)
);
describe usuario;
select * from usuario;

create table proyecto(
estadoProyecto varchar (20) not null,
personaAsignada varchar (50) not null,
otraPersona varchar (50) null,
fechaDebate date null,
numero varchar (20) primary key,
nombreProyecto varchar (200) not null,
autores varchar (100) null,
ponentes varchar (100) null,
micrositio varchar (100) null,
accionSugerida varchar (20) null,
objeto varchar (200) null,
numArticulo varchar (200) null,
sintesisArticulo varchar (200) null,
conceptos varchar (200) null,
consideraciones varchar (200) null,
votacionArticulo varchar (200) null,
conflictoDeInteres varchar (200) null,
estadoCi varchar (20) null,
estadoProposicion varchar (20) null,
linkProposicion varchar (100) null,
idUsuarioFK int not null,
otraPersonaFK int null,
foreign key (idUsuarioFK) references usuario(idUsuario),
foreign key (otraPersonaFK) references usuario(idUsuario)
);
describe proyecto;
select * from proyecto;
select count(*) from proyecto;

create table orden_del_dia(
idOrden int primary key auto_increment,
estadoOrden varchar (20) not null,
tipoOrden varchar (50) not null,
fechaOrden date null
);

INSERT INTO orden_del_dia (estadoOrden, tipoOrden, fechaOrden) VALUES
('activo', 'plenaria', '2026-04-23'),
('activo', 'comision', '2026-04-24'),
('activo', 'plenaria', '2026-04-25');

create table detalle_orden(
idDetalleOrden int primary key auto_increment,
idOrdenFK int not null,
numeroProyectoFK varchar(20) not null,
posicion int null,
estadoEnSesion varchar(20) not null check (estadoEnSesion in ('aprobado','aplazado','pendiente')),
foreign key (idOrdenFK) references orden_del_dia(idOrden),
foreign key (numeroProyectoFK) references proyecto(numero)
);
select * from detalle_orden;
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

create table auditoria_proyecto(
idAuditoria int primary key auto_increment,
fechaModificacion date not null,
accionRealizada varchar (100) not null,
usuarioResponsable varchar (50) not null,
idProyectoFK varchar (20),
foreign key (idProyectoFK) references proyecto(numero)
);

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

describe usuario;
insert into usuario(nombreUsuario, correoUsuario, celularUsuario, contrasena, estado, rol)
values ('Cristian Arevalo','cris.are@gmail.com','3216549876','cris1234','activo','general');
select * from usuario;

describe proyecto;
describe orden_del_dia;
describe auditoria_proyecto;

/* CONSULTAS  */
## BASICAS 
-- Tabla usuario RQF002-03 (Consultar usuarios)

select * from usuario;

-- Tabla proyecto  RQF003-01 (Consultar proyectos)

select * from proyecto;

-- Tabla orden_del_dia  RQF004-04 (Consultar orden del día)

select * from orden_del_dia;

-- Tabla auditoria_proyecto RQF007-02 (Consultar historial de un proyecto)

select * from auditoria_proyecto;


## ESPECIFICAS
-- tabla usuario
-- 1. Busca un usuario por su correo electrónico. (RQF001-01, RQF001-02)
select* from usuario where correoUsuario = 'cris.are@gmail.com';

-- 2.Trae solo los usuarios que están ACTIVOS en el sistema. (RQF001-03 (bloquea inactivos), RQF002-06)
select idUsuario,nombreUsuario,correoUsuario, rol from usuario where estado = 'activo';

-- 3. Filtra usuarios según su rol (legislativo o general). RQF001-04, RQF001-05, RQF002
select idUsuario,nombreUsuario,correoUsuario,estado from usuario where rol = 'legislativo';

-- 4.  Autentica al usuario verificando correo Y contraseña al mismo tiempo. RQF001-02 (Validación de credenciales)
select idUsuario,nombreUsuario,rol,estado from usuario 
where correoUsuario ='cris.are@gmail.com' and contrasena = 'cris1234';

-- 5. Lista los usuarios INACTIVOS. Sirve para verificar quién ya no tiene acceso al sistema. RQF002-06 (Inactivar usuario)
select idUsuario, nombreUsuario, correoUsuario, rol from usuario 
where estado = 'inactivo';

-- 6.  Cuenta cuántos usuarios hay por cada rol. RQF002-03 (Consultar usuarios)
select rol, count(*) as totalUsuarios from usuario group by rol;

-- 7. Lista todos los usuarios ordenados alfabéticamente por nombre.  RQF002-03 (Consultar usuarios)
select idUsuario, nombreUsuario, correoUsuario, rol, estado 
from usuario order by nombreUsuario asc;

-- tabla proyecto
-- 1. Trae todos los proyectos en un estado específico. RQF003-01, RQF003-07
select nombreProyecto, numero, fechaDebate, personaAsignada 
from proyecto where estadoProyecto = 'Pendiente C';

-- 2. Trae todos los proyectos asignados a una persona específica.  RQF002-05, RQF003-06
select nombreProyecto, estadoProyecto, fechaDebate from 
proyecto where personaAsignada = 'DANIEL URREA';

-- 3. Busca proyectos cuyo debate esté programado dentro de un rango de fechas. RQF003-01, RQF004
select nombreProyecto, estadoProyecto, personaAsignada, fechaDebate
from proyecto where fechaDebate between'2025-01-01' and '2025-12-31' order by fechaDebate asc;

-- 4. Cuenta cuántos proyectos hay en cada estado. RQF005-04 (Indicador de proyectos por estado)
select estadoProyecto, count(*) as cantidad
from proyecto group by estadoProyecto order by cantidad desc;

-- 5. Trae los proyectos que tienen conflicto de interés registrado. RQF003-02 (Consulta detallada)
select numero, nombreProyecto, estadoProyecto,conflictoDeInteres, estadoCi
from proyecto where conflictoDeInteres is not null;

-- 6. Busca un proyecto por su número oficial de radicación. RQF003-02 (Consulta detallada)
select * from proyecto where numero = '029 DE 2025';

-- 7. Lista los proyectos que tienen proposición pendiente. RQF003-01, RQF003-03
select numero, nombreProyecto, estadoProposicion, linkProposicion
from proyecto where estadoProposicion = 'pendiente';

-- tabla orden_del_dia

-- 1. Trae el orden del día de una fecha específica. RQF004-04 (Consultar orden del día)
select idOrden, estadoOrden, tipoOrden, estadoOrden
from orden_del_dia where fechaOrden = '2026-04-23';

-- 2. Filtra el orden del día según el tipo de sesión (comisión o plenaria). RQF004-01 (Creación orden del día)
select idOrden, fechaOrden, estadoOrden
from orden_del_dia where tipoOrden = 'plenaria' order by fechaOrden asc;

-- 3.Muestra los órdenes del día con estado'pendiente', es decir, sesiones que aún no se han realizado. RQF004-04
select * from detalle_orden
where estadoEnSesion = 'pendiente';

-- 4. Cuenta cuántos proyectos hay programados en cada fecha. RQF004-04
select fechaOrden, count(*) as proyectosEnSesion
from orden_del_dia group by fechaOrden order by fechaOrden asc;

-- 5. Trae las sesiones programadas en un rango de fechas futuras. RQF004-04, RQF006-04
select idOrden, tipoOrden, fechaOrden, estadoOrden
from orden_del_dia where fechaOrden >= curdate() order by fechaOrden asc;

-- 6. Trae el último orden del día registrado en el sistema. RQF004-04
select * FROM orden_del_dia ORDER BY fechaOrden DESC
LIMIT 1;

-- 7. Cuenta cuántas sesiones hay de cada tipo (comisión vs plenaria). RQF006-04
SELECT tipoOrden, COUNT(*) AS totalSesiones
FROM orden_del_dia GROUP BY tipoOrden;


-- tabla auditoria_proyecto

-- 1. Muestra todo el historial de cambios de un proyecto específico, ordenado del más reciente al más antiguo. Permite ver la trazabilidad completa.
-- RQF007-02 (Consultar historial de un proyecto)
select idAuditoria, fechaModificacion, accionRealizada, usuarioResponsable from auditoria_proyecto
where idProyectoFK = '315 DE 2024' order by fechaModificacion desc;

-- 2. Filtra la auditoría por el usuario que realizó los cambios. RQF007-03 (Filtrar historial por usuario)
select idAuditoria, fechaModificacion, accionRealizada, idProyectoFK
from auditoria_proyecto
where usuarioResponsable = 'CAMILO QUINTERO'
order by fechaModificacion desc;

-- 3. Filtra la auditoría por un rango de fechas. RQF007-04 (Filtrar historial por fecha)
select  idAuditoria, fechaModificacion, accionRealizada, usuarioResponsable, idProyectoFK
from auditoria_proyecto where fechaModificacion between '2026-01-29' and '2026-02-04'
order by fechaModificacion asc;

-- 4. Cuenta cuántas modificaciones ha tenido cada proyecto. RQF007-02
select idProyectoFK, count(*) as totalModificaciones 
from auditoria_proyecto group by idProyectoFK 
order by totalModificaciones DESC;

-- 5. Muestra los últimos 10 cambios registrados en todo el sistema. RQF007-02
select idAuditoria, fechaModificacion, accionRealizada,usuarioResponsable, idProyectoFK
from auditoria_proyecto order by fechaModificacion desc
limit 10;

-- 6. Cuenta cuántas acciones realizó cada usuario. RQF007-03
select usuarioResponsable, count(*) as totalAcciones
from auditoria_proyecto
group by usuarioResponsable
order by totalAcciones desc;

-- 7. Busca en la auditoría por tipo de acción. RQF007-01, RQF007-02
select idAuditoria, fechaModificacion, usuarioResponsable, idProyectoFK
from auditoria_proyecto
where accionRealizada LIKE '%estado%'
order by fechaModificacion desc;

## CONSULTAS MULTITABLA (JOIN)

-- 1. proyecto + usuario: Une los proyectos con los datos del usuario que los creó (via idUsuarioFK). Muestra el nombre del
-- responsable junto a cada proyecto. RQF003-02 (Consulta detallada), RQF002-05
select
p.nombreProyecto,
p.estadoProyecto,
p.fechaDebate,
p.numero,
u.nombreUsuario as creadoPor,
u.correoUsuario,
u.rol
from proyecto p
inner join usuario u on p.idUsuarioFK = u.idUsuario
order by p.fechaDebate asc;

-- 2.  proyecto + usuario: Trae únicamente los proyectos asignados a usuarios con rol 'general'. Ayuda a visualizar la carga de trabajo del equipo
-- RQF002-05 (Consulta de proyectos asignados por usuario)
select u.nombreUsuario,
u.correoUsuario,
p.numero,
p.nombreProyecto,
p.estadoProyecto,
p.fechaDebate
from proyecto p
inner join usuario u on p.idUsuarioFK = u.idUsuario
where u.rol = 'general'
order by u.nombreUsuario, p.estadoProyecto;

-- 3. orden_del_dia + detalle_orden + proyecto: Muestra el orden del día completo 
-- con el nombre y estado de cada proyecto incluido, en vez de solo los IDs.
-- RQF004-04, RQF006-04
SELECT o.idOrden,
o.fechaOrden,
o.tipoOrden,
o.estadoOrden,
d.posicion,
d.estadoEnSesion,
p.numero,
p.nombreProyecto,
p.estadoProyecto,
p.personaAsignada
FROM orden_del_dia o
INNER JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER JOIN proyecto p ON d.numeroProyectoFK = p.numero
ORDER BY o.fechaOrden ASC, d.posicion ASC;

-- 4. orden_del_dia + proyecto: Trae el orden del día de UNA fecha específica con los nombres completos de los proyectos programados.
-- RQF004-04
SELECT 
    o.tipoOrden,
    o.fechaOrden,
    p.numero,
    p.nombreProyecto,
    p.estadoProyecto,
    p.personaAsignada,
    p.accionSugerida
FROM orden_del_dia o
INNER JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER JOIN proyecto p ON d.numeroProyectoFK = p.numero
WHERE o.fechaOrden = '2026-04-25'
ORDER BY d.posicion ASC;

-- 5. auditoria_proyecto + proyecto: Muestra el historial de auditoría con el nombre del proyecto en lugar de solo el ID.
-- RQF007-02 (Consultar historial)
SELECT 
    a.idAuditoria,
    p.nombreProyecto,
    p.estadoProyecto,
    a.fechaModificacion,
    a.accionRealizada,
    a.usuarioResponsable
FROM auditoria_proyecto a
INNER JOIN proyecto p ON a.idProyectoFK = p.numero
ORDER BY a.fechaModificacion DESC;

-- 6. auditoria + proyecto + usuario: Combina auditoría, proyecto y usuario para mostrar el historial completo con nombre del proyecto Y datos del
-- usuario que realizó cada cambio. RQF007-02, RQF007-03
SELECT 
    a.fechaModificacion,
    p.nombreProyecto,
    p.numero,
    a.accionRealizada,
    a.usuarioResponsable,
    u.rol AS rolResponsable
FROM auditoria_proyecto a
INNER JOIN proyecto p ON a.idProyectoFK = p.numero  -- Cambio: p.numero en lugar de p.idProyecto
INNER JOIN usuario u ON u.nombreUsuario = a.usuarioResponsable
ORDER BY a.fechaModificacion DESC;

-- 7. proyecto + usuario: Muestra TODOS los usuarios y cuántos proyectos tiene asignado cada uno, incluso los que no tienen proyectos
-- asignados (aparecen con 0). RQF002-05
select u.nombreUsuario,
u.rol,
count(p.numero) as proyectosAsignados
from usuario u
left join proyecto p on u.idUsuario = p.idUsuarioFK
group by u.idUsuario, u.nombreUsuario, u.rol
order by proyectosAsignados desc;

-- 8. orden_del_dia + proyecto + usuario: Muestra el orden del día completo con nombre del proyecto Y nombre del usuario responsable de cada uno.
-- RQF004-04, RQF006-04
SELECT 
    o.fechaOrden,
    o.tipoOrden,
    p.numero,
    p.nombreProyecto,
    p.estadoProyecto,
    u.nombreUsuario AS responsable,
    p.accionSugerida
FROM orden_del_dia o
INNER JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER JOIN proyecto p ON d.numeroProyectoFK = p.numero
INNER JOIN usuario u ON p.idUsuarioFK = u.idUsuario
ORDER BY o.fechaOrden ASC, d.posicion ASC;

## SUBCONSULTAS

-- 1. SUBCONSULTA en WHERE: Primero busca el ID del usuario, y con ese ID trae todos sus proyectos Evita tener que conocer el ID de
-- memoria; solo se necesita el nombre. RQF003-06 (Validar asignación para edición)
select numero, nombreProyecto, estadoProyecto, fechaDebate
from proyecto
where idUsuarioFK = (
select idUsuario from usuario
where nombreUsuario = 'JUANITA'
);

-- 02. SUBCONSULTA con IN: Trae los proyectos de TODOS los usuarios con rol 'general'. La subconsulta devuelve una lista de IDs
-- de usuarios generales, y la consulta principal filtra proyectos que pertenezcan a esa lista. RQF002-05, RQF005-05 (Filtrar tablero por usuario)
select numero, nombreProyecto, estadoProyecto,
       personaAsignada, fechaDebate
from proyecto
where idUsuarioFK in (
select idUsuario from usuario where rol = 'general'
)
order by personaAsignada;

-- 3. SUBCONSULTA con NOT IN: Encuentra proyectos que NUNCA han sido incluidos en ningún orden del día. Son proyectos que el equipo aún
-- no ha programado para discusión. RQF004-02 (Añadir proyectos al orden del día)
SELECT 
    numero, 
    nombreProyecto, 
    estadoProyecto, 
    personaAsignada
FROM proyecto
WHERE numero NOT IN (
    SELECT numeroProyectoFK 
    FROM detalle_orden
    WHERE numeroProyectoFK IS NOT NULL
);

-- 4. SUBCONSULTA con NOT IN (trazabilidad): Encuentra proyectos que no tienen NINGÚN registro en la auditoría. 
-- RQF007-01 (Registrar cambios automáticamente)
SELECT 
    numero, 
    nombreProyecto, 
    Proyecto, 
    personaAsignada
FROM proyecto
WHERE numero NOT IN (
    SELECT idProyectoFK 
    FROM auditoria_proyecto
    WHERE idProyectoFK IS NOT NULL
);

-- 5. SUBCONSULTA con EXISTS: Retorna los usuarios que SÍ tienen al menos un proyecto asignado. EXISTS verifica si la subconsulta
-- devuelve algún resultado para cada usuario.  RQF002-05
select idUsuario, nombreUsuario, rol, estado
from usuario u
where exists (
select 1 from proyecto p
where p.idUsuarioFK = u.idUsuario
);

-- 6. SUBCONSULTA con MAX:: Encuentra el proyecto que tiene la fecha de debate más próxima (la más reciente/futura). RQF003-01
select numero, nombreProyecto, estadoProyecto,fechaDebate, personaAsignada
from proyecto
where fechaDebate = (
select max(fechaDebate) from proyecto
);

-- 7 SUBCONSULTA escalar en SELECT: Para cada proyecto lista cuántas veces ha aparecido en un orden del día (la subconsulta se ejecuta
-- una vez por cada fila del resultado). RQF004-04, RQF006-04
SELECT 
    p.numero,
    p.nombreProyecto,
    p.estadoProyecto,
    (SELECT COUNT(*) FROM detalle_orden d
     WHERE d.numeroProyectoFK = p.numero) AS vecesEnOrdenDelDia
FROM proyecto p
ORDER BY vecesEnOrdenDelDia DESC;

-- 8.  SUBCONSULTA con HAVING: Identifica los usuarios que tienen MÁS proyectos asignados que el promedio del equipo. 
-- RQF002-05, RQF005-05
select idUsuarioFK, count(*) as totalProyectos
from proyecto
group by idUsuarioFK
having count(*) > (
select avg(conteo) from (
select count(*) as conteo
from proyecto
group by idUsuarioFK
) as promedios
);


## MODIFICACIONES (UPDATE)

-- 1. usuario / Cambiar contraseña: Actualiza la contraseña de un usuario específico identificado por su correo.
-- RQF001-06 (Cambiar contraseña personal)
update usuario
set contrasena = 'arec123'
where correoUsuario = 'cris.are@gmail.com';

-- 2.usuario / Inactivar usuario: Cambia el estado de un usuario a 'inactivo'. El usuario deja de poder iniciar sesión, pero su historial
-- y proyectos se conservan intactos en el sistema. RQF002-06 (Inactivar usuario)
update usuario
set estado = 'inactivo'
where idUsuario = 8;

-- 3. usuario / Cambiar rol: Modifica el rol de un usuario existente. Los permisos del usuario cambiaran de inmediato según
-- el nuevo rol asignado. RQF002-02 (Asignar y modificar rol a usuario)
update usuario
set rol = 'legislativo'
where idUsuario = 5;

-- 4. proyecto / Cambiar estado: Actualiza el estado de un proyecto a una nueva etapa del proceso legislativo (radicado → en comisión →
-- en debate → aprobado → archivado). RQF003-07 (Cambiar estado de proyecto)
update proyecto
set estadoProyecto = 'Aprobado C'
where numero = '070 DE 2024';

-- 5. proyecto / Bloquear proyecto: Marca un proyecto como 'bloqueado' cuando ha finalizado su trámite. Ningún usuario podrá editarlo
-- (esto se valida desde el backend antes de permitir cambios). RQF003-08 (Bloquear proyecto)
update  proyecto
set estadoProyecto = 'bloqueado'
where numero = '005 DE 2024';

-- 6. proyecto / Reasignar proyecto: Cambia la persona asignada a un proyecto. RQF003-05 (Asignación de proyecto)
update proyecto
set personaAsignada = 'CAMILO QUINTERO',
    idUsuarioFK = 1
where numero = '005 DE 2024';

-- 7. detalle_orden / Cambiar estado de proyecto en sesión: Actualiza el estado de un proyecto específico dentro del orden del día 
-- de pendiente a aplazado. Se ejecuta cuando un proyecto no se alcanza a discutir en la sesión programada. 
-- RQF004 (Gestión del orden del día)
UPDATE detalle_orden
SET estadoEnSesion = 'aplazado'
WHERE idDetalleOrden = 1;
## ELIMINACIONES (DELETE)

-- 1. detalle_orden / Retirar proyecto de sesión: Elimina un proyecto del orden del día de una sesión específica.
-- esto NO elimina el proyecto del sistema, solo lo retira de esa programación. RQF004-05 (Eliminar proyecto del orden del día)

-- Opción 1: Eliminar por ID del detalle (si conoces el ID específico)
DELETE FROM detalle_orden
WHERE idDetalleOrden = 1;

-- Opción 2: Eliminar un proyecto específico de una orden específica
DELETE FROM detalle_orden
WHERE idOrdenFK = 1 
  AND numeroProyectoFK = '08 DE 2024';

-- Opción 3: Eliminar todos los proyectos de una orden específica (limpiar la orden)
DELETE FROM detalle_orden
WHERE idOrdenFK = 1;

-- Opción 4: Eliminar proyectos con un estado específico de una orden
DELETE FROM detalle_orden
WHERE idOrdenFK = 1 
  AND estadoEnSesion = 'aplazado';

## CONSULTAS DE REPORTES
-- Agrupan y resumen datos para los reportes del sistema


-- 1. proyectos por estado legislativo: Lista cuántos proyectos hay en cada estado, con el porcentaje que representa del total.
--  RQF006-01 (Reporte por estado legislativo)
select estadoProyecto,
count(*) AS cantidad,
round(count(*) * 100.0 / (select count(*) from proyecto), 2) as porcentaje
from proyecto
group by estadoProyecto
order by cantidad desc;

-- 2. proyectos por responsable: Lista cuántos proyectos tiene cada usuario del grupo general, con su estado de avance.
-- RQF006-02 (Reporte por responsable asignado)
SELECT 
    u.nombreUsuario,
    u.rol,
    COUNT(p.numero) AS totalProyectos,  -- Cambio: p.numero en lugar de p.idProyecto
    SUM(CASE WHEN p.estadoProyecto = 'aprobado' THEN 1 ELSE 0 END) AS aprobados,
    SUM(CASE WHEN p.estadoProyecto = 'en debate' THEN 1 ELSE 0 END) AS enDebate,
    SUM(CASE WHEN p.estadoProyecto = 'pendiente' THEN 1 ELSE 0 END) AS pendientes
FROM usuario u
LEFT JOIN proyecto p ON u.idUsuario = p.idUsuarioFK
WHERE u.rol = 'general'
GROUP BY u.idUsuario, u.nombreUsuario, u.rol
ORDER BY totalProyectos DESC;

-- 3. proyectos por rango de fechas: Lista todos los proyectos cuya fecha de debate está dentro de un rango específico. 
-- RQF006-03 (Reporte por fecha de radicación)
select numero, nombreProyecto,
       estadoProyecto, personaAsignada, fechaDebate
from proyecto
where fechaDebate between '2025-01-01' and '2025-12-31'
order by fechaDebate asc;

-- 4. orden del día de una sesión exportable: Genera el reporte completo del orden del día de una sesión específica,
-- con todos los datos necesarios para exportarlo a PDF o Excel. RQF006-04 (Reporte de orden del día), RQF006-05 (Exportar)
SELECT 
    o.fechaOrden,
    o.tipoOrden,
    o.estadoOrden,
    p.numero AS numProyecto,
    p.nombreProyecto,
    p.autores,
    p.ponentes,
    p.estadoProyecto,
    p.accionSugerida,
    u.nombreUsuario AS responsable,
    d.posicion AS ordenEnSesion,  -- Opcional: muestra la posición del proyecto en la sesión
    d.estadoEnSesion  -- Opcional: muestra si fue aprobado, aplazado o está pendiente
FROM orden_del_dia o
INNER JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
INNER JOIN proyecto p ON d.numeroProyectoFK = p.numero
INNER JOIN usuario u ON p.idUsuarioFK = u.idUsuario
WHERE o.fechaOrden = '2026-04-23'
ORDER BY d.posicion ASC;

## Vista seguimiento del progreso

CREATE VIEW vista_seguimiento_progreso AS
SELECT
    o.idOrden,
    o.fechaOrden,
    o.tipoOrden,
    o.estadoOrden AS estadoSesion,
    
    -- Total de proyectos en esa sesión
    COUNT(d.numeroProyectoFK) AS totalProyecto,
    
    -- Conteos por estado en la sesión (según tu CHECK constraint real)
    SUM(CASE WHEN d.estadoEnSesion = 'aprobado'  THEN 1 ELSE 0 END) AS aprobada,
    SUM(CASE WHEN d.estadoEnSesion = 'aplazado'  THEN 1 ELSE 0 END) AS aplazada,
    SUM(CASE WHEN d.estadoEnSesion = 'pendiente' THEN 1 ELSE 0 END) AS pendiente,
    
    -- Calcular porcentaje de avance
    ROUND(
        SUM(CASE WHEN d.estadoEnSesion = 'aprobado' THEN 1 ELSE 0 END) * 100.0 / 
        COUNT(d.numeroProyectoFK), 
        2
    ) AS porcentajeAprobacion
    
FROM orden_del_dia o
INNER JOIN detalle_orden d ON o.idOrden = d.idOrdenFK
GROUP BY o.idOrden, o.fechaOrden, o.tipoOrden, o.estadoOrden;
select * from vista_seguimiento_progreso;
