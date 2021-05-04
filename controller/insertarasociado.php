<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    //$id_cita=$_SESSION["cita"];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
     //$numero="";
    // print($path);
    $asociado=$_POST["asociado"];
    $badge=$_POST["badge"];
    $nombre=$_POST["nombre"];
    $genero=$_POST["genero"];
    $telefono=$_POST["telefono"];
    $correo=$_POST["correo"];
    $gl=$_POST["gl"];
    $posicion=$_POST["posicion"];
    $area=$_POST["area"];
    echo InsertAsociado($asociado,$badge,$nombre,$genero,$telefono,$correo,$gl,$posicion,$area);  
?>
