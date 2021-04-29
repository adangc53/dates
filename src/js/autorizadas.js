$(document).ready(function()
{
 $("#tbready").on("click","#valida",function(){
     var folio=$(this).attr("data-folio")
     $.ajax({
        url:"updatetables/readyentrega.php",
        type:"POST",
        data:"folio="+folio,
        success:function(respuesta){
           if(respuesta!=200){
               alert("error registro no encontrado")
           }
           else{
                if(respuesta==200){
                    alert("folio: "+folio+" Estado actualizado: Listo para entregar")
                    $("#tbready").load("selects/tablaautorizadas.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
 })
 $("#tbready").on("click","#update",function(){
    var folio = ($(this).attr("data-folio"));
    var parametros= "folio="+folio
    $.ajax({
        url:"php/variables.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
            console.log(respuesta)
            
        } // fin del success
        
    }); // fin de ajax 

});
}); 