<?php
 //session_start();
 //$numero=$_SESSION["numero"];
 $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
 include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 print'<select name="" id="SelectAso" class="form-control">
 <option value="">Default</option>';
 
 $res = AsociadosSinCitas();
 if($res == false)die("failed". $res->ErrorMsg().'<br>');
 while (!$res -> EOF ){
    $Numero=$res->fields["Numero"];
    $badge=$res->fields["badge"];
    $nombre=$res->fields["nombre"];
    $Posicion=$res->fields["Posicion"];
    $Area=$res->fields["Area"];
    print "<option value='$Numero'>$Numero-$badge-$nombre-$Posicion-$Area</option>";
     $res ->MoveNext();
}

print "</select>";
?>