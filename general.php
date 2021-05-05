<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vista General</title>
    </head>
    <body>
        <?php include_once("Navbar.php") ?>
        <div class="container mt-3 text-center">
            <h4>ASOCIADOS CON CITA ASIGNADA</h4>
            <div class="" id="asociadoscita"></div>
        </div>
    </body>
    <script>
        $("#asociadoscita").load("controller/asociadoscita.php");
        $("#asociadoscita").on("click","#show",function(){
    var numero=( $(this).attr("data-numero"));
    $.ajax({
      url:"controller/VarNum.php",
      type:"POST",
      data:"numero="+numero,
      success:function(respuesta){
        window.location.href ="estudios.php"
         
      } // fin del success
      
  }); // fin de ajax 
  })
    </script>
</html>