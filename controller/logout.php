<?php 
if(!isset($_SESSION))
    session_start();
    ob_start();
    session_regenerate_id(true);
$idnew=session_id();
$_SESSION['user']=0;
$_SESSION=array();
$_SESSION['corr']="";
session_destroy();
header("location:../index.php")
?>