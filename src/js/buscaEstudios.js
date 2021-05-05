$(document).ready(function () {
   $("#busca").click(function(){
      search();
   })
   function search(){
    var numero=$("#asociado").val()
    //alert(numero)
    $.ajax({
     url:"controller/VarNum.php",
     type:"POST",
     data:"numero="+numero,
     success:function(respuesta){
      
         $("#tablaservice1").load("tablaservice1.php");
     } // fin del success
     
 }); // fin de ajax 
   }
   $("#asociado").on('keyup', function (e) {
    var keycode = e.keyCode || e.which;
      if (keycode == 13) {
        search()
      }
  });
  $("#tablaservice1").on("click","#ops",function(){
    var idestudio=($(this).attr("data-estudio"))
    //alert(idestudio)
    $.ajax({
      url:"controller/updateedoEst.php",
      type:"POST",
      data:"id="+idestudio,
      success:function(respuesta){
       alert(respuesta)
          $("#tablaservice1").load("controller/tablaservice1.php");
      } // fin del success
      
  }); // fin de ajax 
  })
  $("#tablaservice1").on("click","#ops-date",function(){
    var idestudio=($(this).attr("data-estudio"))
    document.getElementById("nvafecha").style.display = "block";
    document.getElementById("changedate").style.display = "block";
    $("#noAsociadoDate").val(idestudio)
  })
  $("#changedate").click(function(){
    var fecha=$("#nvafecha").val()
    var noAso=$("#noAsociadoDate").val()
    if(fecha==""){alert("Seleccione una fecha")}
    else{

      $.ajax({
        url:"controller/updateedoDate.php",
        type:"POST",
        data:"fecha="+fecha+"&estudio="+noAso,
        success:function(respuesta){
         //alert(respuesta)
            $("#tablaservice1").load("controller/tablaservice1.php");
            document.getElementById("nvafecha").style.display = "none";
            document.getElementById("changedate").style.display = "none";
            $("#noAsociadoDate").val("")
            $("#nvafecha").val("")
            
        } // fin del success
        
    }); // fin de ajax 
    }
  })
  dataAsociado()
  function dataAsociado(){
    var variable={}
    $.ajax({
      url:"controller/searchAsociadoData.php",
      type:"POST",
      data:0,
      success:function(respuesta){
       variable=JSON.parse(respuesta)
       $("#nocita").val(variable.idcita)
       $("#nosociado").val(variable.numero)
       $("#nameAso").val(variable.nombre)
       $( "#nocita" ).prop( "disabled", true );
       $( "#nosociado" ).prop( "disabled", true );
       $( "#nameAso" ).prop( "disabled", true );
        console.log(variable)
      } // fin del success
      
  }); // fin de ajax 
  }
  $("#tablaservice1").on("click","#ops-comment",function(){
    var idestudio=($(this).attr("data-estudio"))
    document.getElementById("divhide").style.display = "block";
    $("#noestudiosdata").val(idestudio)
  })
  $("#captcomment").click(function(){
    var comment=$("#comment").val()
    var id=$("#noestudiosdata").val()
    $.ajax({
      url:"controller/upodatecomment.php",
      type:"POST",
      data:"comment="+comment+"&id="+id,
      success:function(respuesta){
       //alert(respuesta)
          $("#tablaservice1").load("controller/tablaservice1.php");
          document.getElementById("divhide").style.display = "none";
          $("#comment").val("")
          $("#noestudiosdata").val("")
          
      } // fin del success
      
  }); // fin de ajax 
  })
    })