<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    $id_cita=$_SESSION["cita"];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
     //$numero="";
    // print($path);
    $asociado=$_POST["asociado"];
    $res = InsertDetalle($asociado,$id_cita);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    $res=ocupa($id_cita);
?>