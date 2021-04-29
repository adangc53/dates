$(document).ready(function()
{
$("#savefirma").click( function(){
    var data ="numero="+$("#numero").val();
  $.ajax({
                      url:"backend/insertfirma.php",
                      type:"POST",
                      data:data,
                      success:function(respuesta){
                       console.log(respuesta)
                      } // fin del success
                      
                  }); // fin de ajax 
  });
});