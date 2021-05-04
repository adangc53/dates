<?php 

session_start();
//$numero=$_SESSION["numero"];
$path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];

include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //$numero="";
 $id=$_POST["id"];
$res = upedo($id);
if($res == false)die("failed". $res->ErrorMsg().'<br>');
echo($id);
?> 