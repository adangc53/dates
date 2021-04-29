<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
     //$numero="";
    // print($path);
    $res = GeneralCitas();
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    print "<table id ='tablax'class='table table-striped table-bordered'>   <thead class='thead-dark'> <tr><th>id</th><th>fecha</th><th>lugares</th><th>horario</th><th>duracion</th><th>ocupados</th><th></th></tr>  </thead>";
    $mensaje="";
    $style="";
    $sem="";
    while (!$res -> EOF ){
        $id=$res->fields["id"];  
        $fecha=$res->fields["fecha"];  
        $lugares=$res->fields["lugares"];  
        $horario=$res->fields["horario"];  
        $duracion=$res->fields["duracion"];  
        $ocupados=$res->fields["ocupados"]; 
        
        
        print "<tr ><td class='text-center'>$id</td><td class='text-center'>$fecha</td><td class='text-center'>$lugares</td><td class='text-center'>$horario</td>
        <td class='text-center'>$duracion</td><td class='text-center'>$ocupados</td><td class='text-center'><a href='#' data-num='$id'>Edit</a></td></tr>";
         $style="";
         $res ->MoveNext();
    }
    print "</table>";
?>