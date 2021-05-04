<?php
    include_once("src/utilerias/database_utilerias.php");
    $post = $_POST; // 
    if (actualizarAsociado($post)){
        $response['status']= true;
        $response['data']=$post;
     }
     else{
        $response['status']= false;
        $response['data']=$post;
     }
     echo json_encode($response);
?>