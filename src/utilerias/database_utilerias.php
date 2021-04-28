<?php
define('DB_HOST', 'localhost');
define('DB_DATABASE', 'mother');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
$path_util=$_SERVER['DOCUMENT_ROOT'].'/toyota';
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
?>