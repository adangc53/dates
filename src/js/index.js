$(document).ready(function() {
   $("#login").click(function(){
      var user=$("#user").val()
      var pass=$("#passdata").val()
     // alert(user+" "+pass)
     if(pass==""){
       alert("Ingrese un usuario y contraseña validos")
     }
     else{
      $.ajax({
        url:"controller/session.php",
        type:"POST",
        data:"user="+user+"&pass="+pass,
        success:function(respuesta){
         //alert(respuesta)
          if(respuesta==200){ window.location.href ="home.php" }
          if(respuesta==404){ alert("usuario o contraseña inconrecta")}
        } // fin del success
        
      }); // fin de ajax 
    }
   });
  });