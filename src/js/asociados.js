$(document).ready(function () {
    
          $("#editarForm").hide();

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
    });

    $("#guardarEditado").click(function () {
        
        var idAsociado = document.getElementById('asociado2').value;

        var numero = $("#asociado2").val();
        var badge = $("#badge2").val();
        var nombre = $("#nombre2").val();
        var genero = $("#genero2").val();
        var telefono = $("#telefono2").val();
        var correo = $("#correo2").val();
        var gl = $("#gl2").val();
        var posicion = $("#posicion2").val();
        var area = $("#area2").val();
        if (numero == "" || badge == "" || nombre == "" || genero == "" || telefono == "" || correo == "" || gl == "" || posicion == "" || area == "") {
            alert("Llene todos los campos para continuar");
        } else {
            $.ajax({
                url: "controller/actualizarasociado.php?idAsociado=" + idAsociado +
                        "&badge=" + badge + "&nombre=" + nombre +"&genero=" + genero + "&telefono=" +telefono + "&correo=" + correo+ "&gl=" +gl + "&correo=" + correo + "&gl=" + gl + "&posicion=" + posicion + "&area=" + area,
                type: "POST",
                data: "asociado=" + numero + "&badge=" + badge + "&nombre=" + nombre + "&genero=" + genero + "&telefono=" + telefono + "&correo=" + correo + "&gl=" + gl + "&posicion=" + posicion + "&area=" + area,
                success: function (data) {
                    alert("Datos del asociado actualizados correctamente");
                    $("#editarForm").hide();
                    $("#table").show();
                    $("#btnmodnuevo").show();

                    $("#table").load("controller/tableasociados.php");

                }

            });
        }
    });
    
    $("#table").on("click", "#eliminar", function () {
        var idAsociado = ($(this).attr("data-num"));
        $.ajax({
            //url: "controller/eliminarasociado.php",
            url: "controller/eliminarasociado.php?var=" + idAsociado,
            type: "POST",
            data: "numeroAs=" + idAsociado,
            success: function (respuesta) {
                alert("Asociado eliminado correctamente");

                $("#table").load("controller/tableasociados.php");


            }

        });
    });


    /*$("#table").on("click", "#editar", function(event) {
     event.preventDefault();
     jQuery.noConflict();
     $('#modalNuevo').modal('show');
     });*/

    $("#table").on("click", "#editar", function () {
        $(window).load(function () {
            $('#modalNuevo').modal('show');
        });
          $("#table").hide();
          $("#btnmodnuevo").hide();
           $("#editarForm").show();
        var idAsociado = ($(this).attr("data-num"));
        $.ajax({
            type: "POST",
            data: "asociado=" + idAsociado,
            //dataType: 'json',
            url: "controller/obtenerdatos.php?var=" + idAsociado,
            success: function (r) {
                r = JSON.parse(r);
                $("#asociado2").val(r['fields']['Numero']);
                $("#badge2").val(r['fields']['badge']);
                $("#nombre2").val(r['fields']['nombre']);
                $("#genero2").val(r['fields']['genero']);
                $("#telefono2").val(r['fields']['Telefono']);
                $("#correo2").val(r['fields']['Correo']);
                $("#gl2").val(r['fields']['gl']);
                $("#posicion2").val(r['fields']['Posicion']);
                $("#area2").val(r['fields']['Area']);
            }
        });


    });

})