<?php 
session_start();
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
include_once("$path");
$fecha=$_POST["fecha"];
$lugares=$_POST["lugares"];
$horario=$_POST["horario"];
$duracion=$_POST["duracion"];

echo insertcita($fecha,$lugares,$horario,$duracion);
?>