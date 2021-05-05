
<?php
session_start();
//$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
$id=$_GET['var'];
include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
echo json_encode(obtenerdatosasociado($id));
?>