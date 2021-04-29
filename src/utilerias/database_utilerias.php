<?php
define('DB_HOST', 'localhost');
define('DB_DATABASE', 'mother');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
<<<<<<< HEAD
$path_util=$_SERVER['DOCUMENT_ROOT'].'/dates';
=======
$path_util=$_SERVER['DOCUMENT_ROOT'].'/toyota';
>>>>>>> 95872f8bd5fb9b709c5ae6a3a2215e83a97fcd30
include("$path_util./src/adodb5/adodb.inc.php");

$Cn = NewADOConnection('mysqli');
$Cn->Connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
//$Cn->SetFetchMode(ADODB_FETCH_ASSOC);

function Ejecuta($sentencia)
{
    global $Cn;
    if ($Cn->Execute($sentencia) == false)
    return 'error al insertar'.$Cn->ErrorMsg().'<BR>';
    else{ 
        return "1"; 
    }   
}
/*************************************************************************************************************** */
function user($user){
    global $Cn;
    $sql="SELECT password,nombre FROM users where user='$user'";
    return $Cn->execute($sql);
}
function buscarAsociado($numero){
    global $Cn;
    $sql="SELECT * FROM data where numero='$numero'";
    return $Cn->execute($sql);
}
<<<<<<< HEAD
function SelectAll(){
    global $Cn;
    $sql="SELECT * FROM data";
    return $Cn->execute($sql);
}
=======
>>>>>>> 95872f8bd5fb9b709c5ae6a3a2215e83a97fcd30
?>