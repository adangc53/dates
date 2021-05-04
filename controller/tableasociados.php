<?php 

session_start();
//$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //$numero="";
$res = SelectAll();
if($res == false)die("failed". $res->ErrorMsg().'<br>');
print "<table id ='tablax'>   <thead class='thead-dark'> <tr><th>Asociado</th><th>Badge</th><th>Nombre</th><th>Genero</th><th>Telefono</th><th>Correo</th><th>GL</th>
<th>Posicion</th><th>Area</th><th></th><th></th></tr>  </thead>";
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
    
    print "<tr ><td class='text-center'>$Numero</td><td class='text-center'>$badge</td><td class='text-center'>$nombre</td><td class='text-center'>$genero</td>
    <td class='text-center'>$Telefono</td><td class='text-center width: 20px;
  overflow: auto;'>$Correo</td><td class='text-center'>$gl</td><td class='text-center'>$Posicion</td><td class='text-center'>$Area</td>
    <td class='text-center'> <a href='#'><i  id='editar' data-toggle='modal' data-target='modalNuevo' data-num='$Numero' class='far fa-address-card h3'></i></a></td><td><a href='#'><i id='eliminar' data-num='$Numero' class='fas fa-trash h3'></i></a> </td></tr>";
   
    $style="";
     $res ->MoveNext();
}
print "</table>";
//echo $_SESSION["numero"];
?> 