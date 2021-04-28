$(document).ready(function()
{
    
    $("#CambioPass").click(function(){
        var old =$("#oldPass").val()
        if(old==""){
            alert("Introduce una contraseña")
            
        }
        else{
            $.ajax({
                url:"backend/validaNvaPass.php",
                type:"POST",
                data:"pass="+old,
                success:function(respuesta){
                  /// alert("repuesta "+respuesta)
                   if(respuesta==200){
                       insertanuevapass()
                   }
                   else{
                       alert("Error la contraseña actual no coincide con la contraseña proporcionada por el usuario")
                   }
                } // fin del success
                
            }); // fin de ajax 
        }
        
        
    })
    function insertanuevapass(){
        var pass=($("#NvaContra").val())
        var old =$("#oldPass").val()
        var confirma=$("#conPass").val()
       
        if(pass==""||old==""||confirma==""){
            alert("Introduce una contraseña")
        }
        else{
            if(pass!=confirma){
                alert("Error las claves que esta tratando de ingresar no coinciden")
            }
            else{
                $.ajax({
                    url:"backend/changepass.php",
                    type:"POST",
                    data:"NvaPass="+pass,
                    success:function(respuesta){
                       alert("Contraseña cambiada"+respuesta)
                       limpiar()
                    } // fin del success
                    
                }); // fin de ajax 
            }
        }
    }
    function limpiar(){
        $("#NvaContra").val("")
        $("#oldPass").val("")
        $("#conPass").val("")
    }
}); 