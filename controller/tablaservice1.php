<?php 
    session_start();
    $numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
    //$cita=$_SESSION["cita"];
    $res = detestudios($numero);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    print "<table id ='tablax'class='table table-striped table-bordered'><thead class='thead-dark'><tr><th>Id Cita</th><th>Asociado</th><th>Nombre Servicio</th><th>Nombre Estudio</th><th>estado</th><th>Fecha</th><th>Nva.Fecha</th><th></th></tr></thead>";
    
    $style="";
    $sem="";
    while (!$res -> EOF ){
        ////IdCita,z.Asociado,servicio AS Id_Servicio,s.nombre AS NombreServicio, id_est,e.nombre AS NombreEstudio,Observaciones ,a.Fecha,z.estatus,z.id,z.fecha as real
        $mensaje="";
        $icon="";
        $dateops="";
        $idest=$res->fields["id"];
        $fechaest=$res->fields["fechareal"]; 
        $idCita=$res->fields["IdCita"];
        $estado=$res->fields["estatus"];
        $Asociado=$res->fields["Asociado"];
        $Id_Servicio=$res->fields["Id_Servicio"];
        $NombreServicio=$res->fields["NombreServicio"];
        $id_est=$res->fields["id_est"];
        $NombreEstudio=$res->fields["NombreEstudio"];
        $Status=$res->fields["Observaciones"];
        $fecha=$res->fields["Fecha"];
        if($estado==0){$mensaje="Pendiente"; $icon="<a href='#' Id='ops' data-estudio='$idest'><i class='fas fa-syringe h6'></i></a>";
            $dateops="<a href='#' Id='ops-date' data-estudio='$idest'><i class='far fa-calendar-times h6'></i></a>";
        }  
        else{$mensaje="Realizado";}   
        print "<tr ><td class='text-center'>$idCita</td><td class='text-center'>$Asociado</td><td class='text-center'>$NombreServicio</td><td class='text-center'>$NombreEstudio</td><td class='text-center'>$mensaje</td><td class='text-center'>$fecha</td><td class='text-center'>$fechaest</td><td class='text-center'>$icon $dateops</td></tr>";
         $style="";
         $res ->MoveNext();
    }
    print "</table>";
?>