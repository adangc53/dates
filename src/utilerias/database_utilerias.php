<?php

define('DB_HOST', 'localhost');
define('DB_DATABASE', 'mother');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

$path_util = $_SERVER['DOCUMENT_ROOT'] . '/dates';



include("$path_util./src/adodb5/adodb.inc.php");
$Cn = NewADOConnection('mysqli');
$Cn->Connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

//$Cn->SetFetchMode(ADODB_FETCH_ASSOC);

function Ejecuta($sentencia) {
    global $Cn;
    if ($Cn->Execute($sentencia) == false)
        return 'error al insertar' . $Cn->ErrorMsg() . '<BR>';
    else {
        return "1";
    }
}

function Ejecuta2($sentencia) {
    global $Cn;
    try {
        $result = $Cn->query($sentencia);
        $result->closeCursor();
        return 1; // Exito  
    } catch (Exception $e) {
        //die("Error en la linea: " + $e->getLine() + " MSG: " + $e->GetMessage());
        return 0; // Fallo
    }
}

/* * ************************************************************************************************************* */

function user($user) {
    global $Cn;
    $sql = "SELECT password,nombre FROM users where user='$user'";
    return $Cn->execute($sql);
}

function buscarAsociado($numero) {
    global $Cn;
    $sql = "SELECT Numero,badge,nombre,genero,Telefono,Correo,gl,Posicion,Area FROM data where Numero like '$numero'";
    return $Cn->execute($sql);
}

function SelectAll() {
    global $Cn;
    $sql = "SELECT * FROM data";
    return $Cn->execute($sql);
}

function GeneralCitas() {
    global $Cn;
    $sql = "SELECT * FROM citas";
    return $Cn->execute($sql);
}

function insertcita($fecha, $lugares, $horario, $duracion) {
    global $Cn;
    $sql = "INSERT INTO citas(fecha,lugares,horario,duracion,ocupados) VALUES('$fecha',$lugares,'$horario',$duracion,0)";
    return $Cn->execute($sql);
}

function diario($fecha) {
    global $Cn;
    $sql = "SELECT a.id,b.Numero,b.nombre,b.Telefono,b.Area,b.Posicion,b.gl FROM detallecita as a INNER JOIN data as b on(a.Asociado=b.Numero) INNER JOIN citas as c ON(a.IdCita=c.id) WHERE c.fecha='$fecha'";
    return $Cn->execute($sql);
}

function AsociadosSinCitas() {
    global $Cn;
    $sql = "SELECT Numero,badge,nombre,Posicion,Area FROM data WHERE Numero not in(SELECT Asociado FROM detallecita)";
    return $Cn->execute($sql);
}

function CitasDisponibles() {
    global $Cn;
    $sql = "SELECT * FROM citas ";
    return $Cn->execute($sql);
}

function InsertDetalle($asociado, $cita) {
    global $Cn;
    $sql = "INSERT INTO detallecita(idCita,Asociado,Fecha) values($cita,$asociado,( SELECT fecha FROM citas where id=$cita))";
    return $Cn->execute($sql);
    //ocupa($cita);
}

function ocupa($cita) {
    global $Cn;
    $sql = "UPDATE citas SET ocupados=ocupados+1 WHERE id=$cita";
    return $Cn->execute($sql);
}

function detallecitas($cita) {
    global $Cn;
    $sql = "SELECT a.id,a.Fecha,b.nombre,b.Numero,a.IdCita FROM detallecita as a inner join data as b on(a.Asociado=b.Numero)  where a.IdCita=$cita";
    return $Cn->execute($sql);
}

function detestudios($numero) {
    global $Cn;
    $sql = "SELECT IdCita,z.Asociado,servicio AS Id_Servicio,s.nombre AS NombreServicio, id_est,e.nombre AS NombreEstudio,a.Fecha,z.estatus,z.id,z.fecha as fechareal ,z.observaciones
    from detallecita a INNER JOIN estudio_detalle as z on(a.Asociado=z.Asociado)inner join estudios as e ON(z.id_estudio=e.id_est) inner join servicios s on 
    (s.id_serv = e.servicio ) 
    where z.Asociado= $numero";
    return $Cn->execute($sql);
}

function selectasocita() {
    global $Cn;
    $sql = "SELECT b.Asociado,b.IdCita,b.Observaciones,b.Fecha,a.nombre FROM DETALLECITA as b inner join data as a on(a.Numero=b.Asociado) ;";
    return $Cn->execute($sql);
}

function insertAsociado($asociado, $badge, $nombre, $genero, $telefono, $correo, $gl, $posicion, $area) {
    global $Cn;
    $sql = " INSERT INTO data (numero,badge,nombre,genero,telefono,correo,gl,posicion,area) "
            . "values($asociado,'$badge','$nombre','$genero','$telefono','$correo','$gl','$posicion','$area');";
    return $Cn->execute($sql);
}

function obtenerdatosasociado($id) {
    global $Cn;
    $sql = "SELECT*FROM data where numero = $id";
    return $Cn->execute($sql);
}

function eliminarasociado($id) {
    global $Cn;
    $sql = "DELETE FROM data WHERE numero = $id";
    return $Cn->execute($sql);
}

function eliminardetcita($id) {
    global $Cn;
    $sql = "DELETE FROM detallecita WHERE id = $id";
    return $Cn->execute($sql);
}

function actualizarAsociado($asociado, $badge, $nombre, $genero, $telefono, $correo, $gl, $posicion, $area,$id) {
    global $Cn;
    $sql = " UPDATE data SET numero = $asociado, badge = '$badge', nombre = '$nombre', genero = '$genero', "
            . "telefono = '$telefono', correo = '$correo',gl ='$gl',posicion ='$posicion',area='$area' WHERE numero = $id";
    print_r($sql);
    die();
    return $Cn->execute($sql);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function consultaEstudios() {
    global $Cn;
    $sql = "Select id_est from estudios";
    return $Cn->execute($sql);
}

function consultaAsociados() {
    global $Cn;
    $sql = "select numero from data";
    return $Cn->execute($sql);
}

function inserdetalleestudio($estudio, $asociado) {
    global $Cn;
    $sql = "insert into estudio_detalle(id_estudio,estatus,asociado) values($estudio,0,$asociado)";
    return $Cn->execute($sql);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function upedo($id) {
    global $Cn;
    $sql = "update estudio_detalle set estatus=1 where id=$id";
    return $Cn->execute($sql);
}
function ActualizaFechaEstudio($estudio,$fecha){
    global $Cn;
    $sql="UPDATE estudio_detalle set fecha='$fecha' where id=$estudio";
    return $Cn->execute($sql);

}
function BuscaAsociadoData($numero){
    global $Cn;
    $sql="select a.IdCita,b.Numero,b.nombre from detallecita as a inner join data as b on(a.Asociado=b.Numero) where b.Numero=$numero";
    return $Cn->execute($sql);
}
function deletedate($numero){
    global $Cn;
    $sql="delete from detallecita where id=$numero";
    return $Cn->execute($sql);
}
function addvacante($cita){
    global $Cn;
    $sql="UPDATE citas set ocupados=ocupados-1 where id=$cita";
    return $Cn->execute($sql);
}
function ActualizaComentario($comentario,$id){
    global $Cn;
    $sql="Update estudio_detalle set observaciones='$comentario' where id=$id";
    return $Cn->execute($sql);
}
?>

