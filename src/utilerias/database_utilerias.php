<?php
define('DB_HOST', 'localhost');
define('DB_DATABASE', 'mother');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

$path_util=$_SERVER['DOCUMENT_ROOT'].'/dates';



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
    $sql="SELECT Numero,badge,nombre,genero,Telefono,Correo,gl,Posicion,Area FROM data where Numero like '$numero'";
    return $Cn->execute($sql);
}

function SelectAll(){
    global $Cn;
    $sql="SELECT * FROM data";
    return $Cn->execute($sql);
}
function GeneralCitas(){
    global $Cn;
    $sql="SELECT * FROM citas";
    return $Cn->execute($sql);
}
function insertcita($fecha,$lugares,$horario,$duracion){
    global $Cn;
    $sql="INSERT INTO citas(fecha,lugares,horario,duracion,ocupados) VALUES('$fecha',$lugares,'$horario',$duracion,0)";
    return $Cn->execute($sql);
}
function diario(){
    global $Cn;
    $sql="SELECT a.id,b.Numero,b.nombre,b.Telefono,b.Area,b.Posicion,b.gl FROM detallecita as a INNER JOIN data as b on(a.Asociado=b.Numero) INNER JOIN citas as c ON(a.IdCita=c.id) WHERE c.fecha='2021-04-29'";
    return $Cn->execute($sql);
}
function AsociadosSinCitas(){
    global $Cn;
    $sql ="SELECT Numero,badge,nombre,Posicion,Area FROM data WHERE Numero not in(SELECT Asociado FROM detallecita)";
    return $Cn->execute($sql);
}
function CitasDisponibles(){
    global $Cn;
    $sql ="SELECT * FROM citas WHERE ocupados<lugares";
    return $Cn->execute($sql);
}
?>