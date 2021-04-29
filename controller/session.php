<?php 
session_start();
$path=$_SERVER['DOCUMENT_ROOT'].'/dates';
$_SESSION["path"]="$path/src/utilerias/database_utilerias.php";

include_once("$path./src/utilerias/database_utilerias.php"); 
$contra=$_POST["pass"]; $user=$_POST["user"];
$res=user($user);
$pass=$res->fields["password"];
$name=$res->fields["nombre"];
//$roll=$res->fields["roll"];
if($contra==$pass){
    echo 200;
    $_SESSION["user"]=$name;
}
else{
    echo 404;
    $_SESSION["usuario"]=0;
}

?> 