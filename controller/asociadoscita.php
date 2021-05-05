<?php 

session_start();
//$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //$numero="";
$res = selectasocita();
if($res == false)die("failed". $res->ErrorMsg().'<br>');
print "<table id ='tablax'class='table table-striped table-bordered'>   
    <thead class='thead-dark'> <tr><th>Asociado</th><th>Nombre</th><th>Id Cita</th><th>Observaciones</th><th>Fecha</th><th></th></tr></thead>";
$mensaje="";
$style="";
$sem="";
while (!$res -> EOF ){
    $asociado=$res->fields["Asociado"];  
    $idCita=$res->fields["IdCita"];  
    $obser=$res->fields["Observaciones"];  
    $fecha=$res->fields["Fecha"];  
    $nombre=$res->fields["nombre"];
    print "<tr ><td class='text-center'>$asociado</td><td class='text-center'>$nombre</td><td class='text-center'>$idCita</td><td class='text-center'>$obser</td><td class='text-center'>$fecha</td><td class='text-center'><a href='#'data-numero='$asociado' id='show'><i class='far fa-address-card h3'></i></a></td></tr>";
     $style="";
     $res ->MoveNext();
}
print "</table>";
//echo $_SESSION["numero"];
?> 