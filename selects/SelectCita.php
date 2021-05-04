<?php
 //session_start();
 //$numero=$_SESSION["numero"];
 $path=$_SESSION["path"];//$_SERVER['DOCUMENT_ROOT'];
 include_once("$path");///dates/src/utilerias/database_utilerias.php"); 
 //print'<select name="" id="SelectCita" class="form-control">
// <option value="">Default</option>';
 print '<div class="row">';
 $res = CitasDisponibles();
 if($res == false)die("failed". $res->ErrorMsg().'<br>');
 $i=0;
 while (!$res -> EOF ){
    $id=$res->fields["id"];
    $fecha=$res->fields["fecha"];
    $horario=$res->fields["horario"];
    $lugares=$res->fields["lugares"];
    $ocupados=$res->fields["ocupados"];
    //////////////////
    $disponibles=$lugares-$ocupados;
    print "
    <div class='card col-2 mt-2' id='$id' data-date='$fecha'>
  <div class='card-header' style='background-color: #0c0c0c75; color:white;'>
  folio:$id  Disponibles:$disponibles
  </div>
  <ul class='list-group list-group-flush'>
    <li class='list-group-item'>$fecha</li>
    <li class='list-group-item'>$horario</li>
  </ul>
</div>";
print "
<script>
  var idlock=$id
  if($disponibles<=0){
    $('#$id').prop('disabled', true);
  }
</script>";
$i++;
if($i==3){print "<br>"; $i=0;}
    //print "<option value='$id'> Fecha: $fecha, Horario: $horario</option>";
     $res ->MoveNext();
}
print "</div>";
//print "</select>";
?>

