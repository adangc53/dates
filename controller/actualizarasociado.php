<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    //$id_cita=$_SESSION["cita"];
    //$id=$_GET['var'];
   
     //$numero="";
    // print($path);
    $id=$_GET['idAsociado'];
    $asociado=$_GET["idAsociado"];
    $badge=$_GET["badge"];
    $nombre=$_GET["nombre"];
    $genero=$_GET["genero"];
    $telefono=$_GET["telefono"];
    $correo=$_GET["correo"];
    $gl=$_GET["gl"];
    $posicion=$_GET["posicion"];
    $area=$_GET["area"];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    echo actualizarAsociado($asociado, $badge, $nombre, $genero, $telefono, $correo, $gl, $posicion, $area,$id);
?>