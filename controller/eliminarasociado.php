<?php
session_start();
//$id=$_SESSION["asociado"];

$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
//$id=$_SESSION["numeroAs"];
$id=$_GET['var'];
//$id = $_GET('nose');
include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
//$id = 123456; // 
echo json_encode(eliminarasociado($id));
?>