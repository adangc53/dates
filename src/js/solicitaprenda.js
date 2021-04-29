$(document).ready(function()
{
    $("#PosicionNva").change(function(){
        var pos=$("#PosicionNva").val()
        $.ajax({
            url:"backend/prendafromposicion.php",
            type:"POST",
            data:"posicion="+pos,
            success:function(respuesta){
             //alert(respuesta)
            // $("#rellenaclase").val(respuesta)
            // alert("llena")
             const rellena=document.querySelector("#rellenaclase")
             rellena.innerHTML=respuesta
             
            } // fin del success
            
        }); // fin de ajax 
       })
}); 