$(document).ready(function () {
     datacita()
    function datacita(){
        $.ajax({
            //url: "controller/eliminarasociado.php",
            url: "controller/eliminarasociado.php?var="+idAsociado,
            type: "POST",
            data: "numeroAs=" + idAsociado,
            success: function (respuesta) {
                alert("Asociado eliminado correctamente");

                $("#table").load("controller/tableasociados.php");


            }

        });
    }
     $("#tbcita").on("click", "#eliminar", function () {
        var id = ($(this).attr("data-num"));
        $.ajax({
            //url: "controller/eliminarasociado.php",
            url: "controller/eliminardetcita.php?var="+id,
            type: "POST",
            data: "id=" + id,
            success: function (respuesta) {
                alert("Asociado eliminado correctamente");
                $("#tbcita").load("selects/tbdetallecitas.php");
            }

        });
    })


})