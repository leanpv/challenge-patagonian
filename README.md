# Challenge-Patagonian

El challenge realizado fué armado para trabajar con un backend en NodeJS y Express, usando MySQL como base de datos y Angular en el frontend.

Deben tener instalado XAMPP-PHPmyADMIN o el gestionador de BD preferido para correr el siguiente Script y crear la misma.

Script BD:

#### //-------------- inicio del script --------------//
#### CREATE DATABASE db CHARACTER SET utf8 COLLATE utf8_spanish_ci;
#### USE db;
#### SET FOREIGN_KEY_CHECKS=0;

#### -- Table imagenes
#### DROP TABLE IF EXISTS imagenes;
#### CREATE TABLE imagenes (
####   id int(11) NOT NULL AUTO_INCREMENT,
####   imagen varchar(150) NOT NULL,
####   PRIMARY KEY (id)
#### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

#### PORT=3000
#### //-------------- fin del script --------------//

# Pasos a seguir una vez descargado el repositorio:
1 - Dentro de XAMPP, iniciar Apache y MySQL, ingresar a phpMyAdmin y ejecutar el script anterior para crear la BD.

2 - Moverse a la carpeta 'backend' y ejecutar el comando 'npm install'

3 - Terminado el proceso de instalación ejecutar los comandos 'npm run build' y 'npm run dev' para levantar el servidor.

4 - Moverse a la carpeta 'frontend' y ejecutar el comando 'npm install'

5 - Terminado el proceso de instalación ejecutar el comando 'ng serve' para levantar la aplicación angular.
