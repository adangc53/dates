<?php 
session_start();
$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //$numero="";
$res = buscarAsociado($numero);
if($res == false)die("failed". $res->ErrorMsg().'<br>');
print "<table id ='tablax'class='table table-striped table-bordered'>   <thead class='thead-dark'> <tr><th>Asociado</th><th>Badge</th><th>Nombre</th><th>Genero</th><th>Telefono</th><th>Correo</th><th>GL</th>
<th>Posicion</th><th>Area</th><th></th></tr>  </thead>";
$mensaje="";
$style="";
$sem="";
while (!$res -> EOF ){
    $Numero=$res->fields["Numero"];  
    $badge=$res->fields["badge"];  
    $nombre=$res->fields["nombre"];  
    $genero=$res->fields["genero"];  
    $Telefono=$res->fields["Telefono"];  
    $Correo=$res->fields["Correo"]; 
    $gl=$res->fields["gl"]; 
    $Posicion=$res->fields["Posicion"];
    $Area=$res->fields["Area"];   
    
    print "<tr ><td class='text-center'>$numero</td><td class='text-center'>$badge</td><td class='text-center'>$nombre</td><td class='text-center'>$genero</td>
    <td class='text-center'>$Telefono</td><td class='text-center'>$Correo</td><td class='text-center'>$gl</td><td class='text-center'>$Posicion</td><td class='text-center'>$Area</td>
    <td class='text-center'><a href='#' data-num='$Numero'>Edit</a></td></tr>";
     $style="";
     $res ->MoveNext();
}
print "</table>";
print "</table>";
//echo $_SESSION["numero"];
?> 