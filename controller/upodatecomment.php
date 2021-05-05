<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    //$id_cita=$_SESSION["cita"];
    //$id=$_GET['var'];
   $comentario=$_POST["comment"];
   $id=$_POST["id"];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    echo ActualizaComentario($comentario,$id);
?>