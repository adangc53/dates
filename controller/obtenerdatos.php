
<?php
session_start();
//$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
$id = 88888; // 
echo json_encode(obtenerdatosasociado($id));
?>