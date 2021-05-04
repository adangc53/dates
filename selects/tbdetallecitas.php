<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    $cita=$_SESSION["cita"];
    $res = detallecitas($cita);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    print "<table id ='tablax'class='table table-striped table-bordered'><thead class='thead-dark'><tr><th>id</th><th>Nombre</th><th>Fecha</th><th></th></tr></thead>";
    $mensaje="";
    $style="";
    $sem="";
    while (!$res -> EOF ){

        $id=$res->fields["id"];
        $fecha=$res->fields["Fecha"];     
        $asociado=$res->fields["nombre"];  
        print "<tr ><td class='text-center'>$id</td><td class='text-center'>$asociado</td><td class='text-center'>$fecha</td><td class='text-center'><a href='#'><i class='far fa-address-card h3'></i></a><a href='#'><i id='eliminar'data-num='$id' class='fas fa-trash h3'></i></a></td></tr>";
         $style="";
         $res ->MoveNext();
    }
    print "</table>";
?>