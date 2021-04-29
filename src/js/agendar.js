$(document).ready(function()
{
    $(".card").click(function(){
        var asociado=$("#SelectAso").val()
        if(asociado==""){
            alert("Seleccione una asociada para continuar")
        }
        else{
        var cita=($(this).attr("id"))
        var fecha=($(this).attr("data-date"))
        $.ajax({
            url:"controller/VarCita.php",
            type:"POST",
            data:"cita="+cita,
            success:function(respuesta){
               // console.log(respuesta)
                alert("Cita seleccionada folio: "+respuesta+" dia de la cita: "+fecha)
            } // fin del success
            
        }); // fin de ajax
    }
    })
}); 