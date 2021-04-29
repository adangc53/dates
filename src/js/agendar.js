$(document).ready(function()
{ var estatus=0;
    var asociado=0;
    $(".card").click(function(){
        if(estatus==1){document.getElementById(asociado).style.background = "white"; estatus=0;}
        else{}
        asociado=$("#SelectAso").val()
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
                document.getElementById(respuesta).style.background = "red";
                estatus=1;
                asociado=respuesta;
            } // fin del success
            
        }); // fin de ajax
    }
    })
    $("#execute").click(function(){
        var numeroaso=$("#search").val()
        $("#SelectAso").val(numeroaso)
    })
    $("#cita").click(function(){
     var capaso= $("#SelectAso").val()
     $.ajax({
        url:"controller/insertdetalle.php",
        type:"POST",
        data:"asociado="+capaso,
        success:function(respuesta){
           // console.log(respuesta)
           //window.location.href ="agendar.php"
           alert(respuesta)
        } // fin del success
        
    }); // fin de ajax
    })
}); 