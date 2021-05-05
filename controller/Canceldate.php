<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    $numero=$_POST["numero"];
    $cita=$_POST["cita"];
    echo $cita;
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
     deletedate($numero);
     addvacante($cita);
?>