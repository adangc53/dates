$(document).ready(function () {
   $("#busca").click(function(){
      search();
   })
   function search(){
    var numero=$("#asociado").val()
    //alert(numero)
    $.ajax({
     url:"controller/VarNum.php",
     type:"POST",
     data:"numero="+numero,
     success:function(respuesta){
      
         $("#tablaservice1").load("tablaservice1.php");
     } // fin del success
     
 }); // fin de ajax 
   }
   $("#asociado").on('keyup', function (e) {
    var keycode = e.keyCode || e.which;
      if (keycode == 13) {
        search()
      }
  });
    })