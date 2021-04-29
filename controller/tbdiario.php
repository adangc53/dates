<?php 
    session_start();
    //$numero=$_SESSION["numero"];
    $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
    
    include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
     //$numero="";
    // print($path);
    $fecha =date("Y-m-d");
    $res = diario($fecha);
    if($res == false)die("failed". $res->ErrorMsg().'<br>');
    print "<table id ='tablax'class='table table-striped table-bordered'>   <thead class='thead-dark'> <tr><th>id</th><th>Numero</th><th>nombre</th><th>Telefono</th><th>Area</th><th>Posicion</th><th>GL</th><th></th></tr>  </thead>";
    $mensaje="";
    $style="";
    $sem="";
    while (!$res -> EOF ){
        $id=$res->fields["id"];  
        $numero=$res->fields["Numero"];  
        $nombre=$res->fields["nombre"];  
        $Telefono=$res->fields["Telefono"];  
        $Area=$res->fields["Area"];  
        $Posicion=$res->fields["Posicion"]; 
        $gl=$res->fields["gl"];
        
        
        print "<tr ><td class='text-center'>$id</td><td class='text-center'>$numero</td><td class='text-center'>$nombre</td><td class='text-center'>$Telefono</td>
        <td class='text-center'>$Area</td><td class='text-center'>$Posicion</td><td class='text-center'>$gl</td><td class='text-center'><a href='#'><i class='far fa-address-card h3'></i></a></td></tr>";
         $style="";
         $res ->MoveNext();
    }
    print "</table>";
?>