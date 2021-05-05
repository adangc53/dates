$(document).ready(function () {
    // datacita()
    function datacita(){
        $.ajax({
            //url: "controller/eliminarasociado.php",
            url: "controller/eliminarasociado.php",
            type: "POST",
            data: 0,
            success: function (respuesta) {
                alert("Asociado eliminado correctamente");

                $("#table").load("controller/tableasociados.php");


            }

        });
    }
    /**  $("#tbcita").on("click", "#eliminar", function () {
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
    })*/
    $("#tbcita").on("click","#userdata",function(){
        var numero=( $(this).attr("data-aso"));
        $.ajax({
          url:"controller/VarNum.php",
          type:"POST",
          data:"numero="+numero,
          success:function(respuesta){
            window.location.href ="estudios.php"
             
          } // fin del success
          
      }); // fin de ajax 
      })
      $("#tbcita").on("click","#eliminar",function(){
        var numero=( $(this).attr("data-num"));
        var cita=( $(this).attr("data-cita"));
        $.ajax({
          url:"controller/Canceldate.php",
          type:"POST",
          data:"numero="+numero+"&cita="+cita,
          success:function(respuesta){
            alert(respuesta)
            $("#tbcita").load("selects/tbdetallecitas.php");
          } // fin del success
          
      }); // fin de ajax 
      })
})