<?php 
    session_start();
    $numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    //$cita=$_SESSION["cita"];
    $res = detestudios($numero);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    print "<table id ='tablax'class='table table-striped table-bordered'><thead class='thead-dark'><tr><th>Id Cita</th><th>Asociado</th><th>Id Servicio</th><th>Nombre Servicio</th><th>Id Estudio</th><th>Nombre Estudio</th><th>Status</th><th>Fecha</th><th></th></tr></thead>";
    $mensaje="";
    $style="";
    $sem="";
    while (!$res -> EOF ){

        $idCita=$res->fields["IdCita"];
        $Asociado=$res->fields["Asociado"];
        $Id_Servicio=$res->fields["Id_Servicio"];
        $NombreServicio=$res->fields["NombreServicio"];
        $id_est=$res->fields["id_est"];
        $NombreEstudio=$res->fields["NombreEstudio"];
        $Status=$res->fields["Status"];
        $fecha=$res->fields["Fecha"];     
        print "<tr ><td class='text-center'>$idCita</td><td class='text-center'>$Asociado</td><td class='text-center'>$Id_Servicio</td><td class='text-center'>$NombreServicio</td><td class='text-center'>$id_est</td><td class='text-center'>$id_est</td><td class='text-center'>$NombreEstudio</td><td class='text-center'>$fecha</td><td class='text-center'><a href='#'><i class='far fa-address-card h3'></i></a></td></tr>";
         $style="";
         $res ->MoveNext();
    }
    print "</table>";
?>