$(document).ready(function()
{
    $("#busca").click(function(){
       consultabyfolios()
    })
    $("#tablefol").on("click","#valida",function(){
        var folio =($(this).attr("data-folio"))
        var parametros="folio="+folio;
        alert(folio)
        $.ajax({
            url:"updatetables/updateRegByRH.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                location.href="consultabyfolio.php";
            } // fin del success
            
        }); // fin de ajax 
    });
    $("#buscafol").on('keyup', function (e) {
        var keycode = e.keyCode || e.which;
          if (keycode == 13) {
             consultabyfolios()
          }
      });
      function consultabyfolios(){
        var fol=$("#buscafol").val()
       if(fol==""){
           alert("Introdusca un folio")
       }
       else{
        $.ajax({
            url:"backend/variableconsulta.php",
            type:"POST",
            data:"folio="+$("#buscafol").val(),
            success:function(respuesta){
               
                 $("#tablefol").load("php/buscafol.php");
            } // fin del success
            
        }); // fin de ajax 
       }
      }
}); 