CREATE DATABASE bethesda;

USE bethesda;

CREATE TABLE tabla_accesos (
    id_acceso INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_acceso varchar(255)
); 

CREATE TABLE tabla_usuario (
    id_usuario INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_acceso INT NOT NULL,
    numero_empleado varchar(255),
    nombre_completo varchar(255),
    correo_electronico varchar(255),
    telefono varchar(255),
    image varchar(255),
    usuario varchar(255), 
    pass varchar(255),
    usuario_alta varchar(255),
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp,
    reglamento INT,
    FOREIGN KEY(id_acceso) REFERENCES tabla_accesos (id_acceso)
); 

CREATE TABLE tabla_clientes (
    id_cliente INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_completo varchar(255),
    telefono varchar(255),
    usuario_alta varchar(255),
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);  

CREATE TABLE tabla_productos(
    id_producto INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto varchar(255),
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE tabla_almacen (
    id_almacen INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    numero_activos varchar(255),
    fecha_entrada TIMESTAMP NOT NULL DEFAULT current_timestamp,
    costo_unitario varchar(255),
    fecha_ultima_salida DATETIME,
    usuario_alta varchar(255),
    nombre_producto VARCHAR(255),
    FOREIGN KEY (id_producto) REFERENCES tabla_productos (id_producto)
); 

CREATE TABLE tabla_ventas (
    id_venta INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    fecha_entrega TIMESTAMP NOT NULL DEFAULT current_timestamp,
    cantidad varchar(255),
    entregado INT,
    precio DOUBLE,
    FOREIGN KEY (id_usuario) REFERENCES tabla_usuario (id_usuario),
    FOREIGN KEY (id_cliente) REFERENCES tabla_clientes (id_cliente),
    FOREIGN KEY (id_producto) REFERENCES tabla_productos (id_producto)
); 

CREATE TABLE tabla_control_gasolina(
    id_gasolina INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    cantidad_gasolina DOUBLE,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp,
    fecha_carga DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES tabla_usuario (id_usuario)
);
