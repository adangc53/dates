$(document).ready(function() {
    $("#savecita").click(function() {
        var fecha = $("#fecha").val()
        var lugares = $("#lugares").val()
        var horario = $("#horario").val()
        var duracion = $("#duracion").val()
        if (fecha == "" || lugares == "" || horario == "" || duracion == "") { alert("Llene todos los campos para continuar") } else {
            $.ajax({
                url: "controller/savecita.php",
                type: "POST",
                data: "fecha=" + fecha + "&lugares=" + lugares + "&horario=" + horario + "&duracion=" + duracion,
                success: function(respuesta) {

                        $("#generaltb").load("controller/generaltb.php");


                    } // fin del success

            }); // fin de ajax 
        }
    })
    $("#generaltb").on("click", "#idcita", function() {
        var idcita = ($(this).attr("data-num"))
            //alert(idcita)
        $.ajax({
            url: "controller/VarCita.php",
            type: "POST",
            data: "cita=" + idcita,
            success: function(respuesta) {
                    //console.log(respuesta)
                    window.location.href = "detallecitas.php"
                        ///$("#generaltb").load("controller/generaltb.php");


                } // fin del success

        }); // fin de ajax 
    })
});