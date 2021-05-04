$(document).ready(function () {
    $("#guardarnuevo").click(function () {

        var numero = $("#asociado").val();
        var badge = $("#badge").val();
        var nombre = $("#nombre").val();
        var genero = $("#genero").val();
        var telefono = $("#telefono").val();
        var correo = $("#correo").val();
        var gl = $("#gl").val();
        var posicion = $("#posicion").val();
        var area = $("#area").val();
        if (numero == "" || badge == "" || nombre == "" || genero == "" || telefono == "" || correo == "" || gl == "" || posicion == "" || area == "") {
            alert("Llene todos los campos para continuar");
        } else {
            $.ajax({
                url: "controller/insertarasociado.php",
                type: "POST",
                data: "asociado=" + numero + "&badge=" + badge + "&nombre=" + nombre + "&genero=" + genero + "&telefono=" + telefono + "&correo=" + correo + "&gl=" + gl + "&posicion=" + posicion + "&area=" + area,
                success: function (data) {
                    alert("Asociado agregado correctamente");

                    $("#table").load("controller/tableasociados.php");


                }

            });
        }
    })
     $("#table").on("click", "#eliminar", function () {
        var idAsociado = ($(this).attr("data-num"));
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
    })

    $("#table").on("click", "#editar", function () {
        var idAsociado = ($(this).attr("data-num"));
        $.ajax({
            type: "POST",
            data: "asociado=" + idAsociado,
            url: "controller/obtenerdatos.php",
            success: function (r) {
                r = JSON.parse(r);
                $("#asociado2").val(r['numero']);
                $("#badge2").val(r['badge']);
                $("#nombre2").val(r['nombre']);
                $("#genero2").val(r['genero']);
                $("#telefono2").val(r['telefono']);
                $("#correo2").val(r['correo']);
                $("#gl2").val(r['gl']);
                $("#posicion2").val(r['posicion']);
                $("#area2").val(r['area']);
            }
        });
        window.location.replace("editarasociado.php");

    });

})