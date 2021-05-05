<?php 
session_start();
$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //$numero="";
$res = BuscaAsociadoData($numero);
if($res == false)die("failed". $res->ErrorMsg().'<br>');
while (!$res -> EOF ){
    $numero=$res->fields["Numero"];
    $nombre=$res->fields["nombre"];
    $idcita=$res->fields["IdCita"];
    $data = Array("numero"=>$numero,"nombre"=>$nombre,"idcita"=>$idcita);

    echo json_encode($data);
   // print ('"numero":"$numero","nombre":"$nombre","idcita":"$idcita"");
    $res ->MoveNext();
}
?> 