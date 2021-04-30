<?php 
session_start();
$cita=$_POST["cita"];
echo $_SESSION["cita"]=$cita;
//echo $cita;

?>