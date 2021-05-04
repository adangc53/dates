<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
  
    $res = consultaAsociados();
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
   
    while (!$res -> EOF ){
        
        $asociado=$res->fields["numero"];
       // print($asociado);
      insert($asociado);
      $res ->MoveNext();
      
    }
    function insert($asociado){
        $rest = consultaEstudios();
        while (!$rest -> EOF ){
            $estudio=$rest->fields["id_est"];
            inserdetalleestudio($estudio,$asociado);
            $rest ->MoveNext();
        }
    }

?>