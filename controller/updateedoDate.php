<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    $estudio=$_POST["estudio"];
    $fecha=$_POST["fecha"];
    $res = ActualizaFechaEstudio($estudio,$fecha);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
?>