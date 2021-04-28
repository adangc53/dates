$(document).ready(function()
{
    $("#denegartd").click(function(){
       var razon=$("#pordenegar").val()
       $.ajax({
        url:"backend/denegarfolio.php",
        type:"POST",
        data:"razon="+razon,
        success:function(respuesta){
            alert("Registro actualizado");
            //alert(respuesta)
        // location.href="catalogoReposicion.php";
        window.history.go(-2)
        } // fin del success
        
    });
    })
}); 