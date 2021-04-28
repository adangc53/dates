$(document).ready(function()
{
    var variable={}
    $.ajax({
        url:"php/Selectrepo.php",
        type:"POST",
        data:0,
        success:function(respuesta){
        //alert(respuesta)
            variable=JSON.parse(respuesta)
            llena(variable)
            compruebasi()
            opciones(variable.jsonsucc)
            prenda(variable.jsonprenda)
            buscakit()
            BuscaGLData()
            
        } // fin del success
        
    }); // fin de ajax 
    function llena(jsonllena){
        // Obteniendo todas las claves del JSON
        var json=jsonllena.asociado
        //console.log(json)
        for (var clave in json){
        // Controlando que json realmente tenga esa propiedad
             if (json.hasOwnProperty(clave)) {
         // Mostrando en pantalla la clave junto a su valor
             $("#"+clave).val(json[clave])
                }
        }
    }
    var valor=false
    var bandera=true
    function opciones(jsonS){
        //console.log(jsonS)
       $("#selectmotivo").val(jsonS.campo);// $("input:radio[id="+jsonS.campo+"]").prop('checked',true)
        checa()
        var json=jsonS.field
        console.log(json)
        for (var clave in json){
        // Controlando que json realmente tenga esa propiedad
             if (json.hasOwnProperty(clave)) {
         // Mostrando en pantalla la clave junto a su valor
             $("#"+clave).val(json[clave])
             if(clave=="AreaNva"||clave=="PosicionNva"){    }
             else{ 
              var tipo=($("#"+json[clave]).prop('type'));
             console.log(tipo)
             if(tipo=="radio")
              $("input:radio[id="+json[clave]+"]").prop('checked',true)
              //if(tipo=="radio"){  }
              //else{ $("#".clave).val(json[clave])}
               
                
               }
                }
                $("#"+clave).prop('disabled',true)
        }
    }
    function prenda(jsonPren){
        var json=jsonPren
        console.log(json)
        for (var clave in json){
        // Controlando que json realmente tenga esa propiedad
             if (json.hasOwnProperty(clave)) {
         // Mostrando en pantalla la clave junto a su valor
             $("#"+clave).val(json[clave])
              $("input:radio[id="+json[clave]+"]").prop('checked',true)
                }
                lookimg()
        }
        function lookimg(){
          
                // alert($('select[name=prenda]').val());
                 var prenda =$('select[name=prenda]').val()
                 var des= document.getElementById("imagecard")
                 console.log("src/images/"+prenda+".png")
                 des.setAttribute("src","src/images/"+prenda+".png")
                
           
        }
    }
    track()
      function track(){
        $("#NombreAsociado").prop('disabled',true)
        $("#shop").prop('disabled',true)
        $("#Fecha").prop('disabled',true)
        $("#Fechain").prop('disabled',true)
        $("#NoAsociado").prop('disabled',true)
        $("#leader").prop('disabled',true)
        $("#turno").prop('disabled',true)
        $("#posicion").prop('disabled',true)
      }
    function checa(){
        bandera=false
        var objeto= $("#selectmotivo").val() //$('input:radio[name=camioline]:checked').val()
        //console.log(objeto)
       // console.log(objeto)
        if(valor==true || objeto!="camioline"){
          valor=  $('input:radio[id=camioline]').prop("checked",false);
          $(".cambio").css("display","none");
          $(".esconde").css("display","block");
        }
        else{
          $(".cambio").css("display","block");
          $(".esconde").css("display","none");
         
         
        }
        valor=  $('input:radio[id=camioline]').prop("checked");
       // console.log(valor)
        if(valor==true || objeto!="robo"){
          valor=  $('input:radio[id=robo]').prop("checked",false);
          $(".divrobo").css("display","none");
        }
        else{
          $(".divrobo").css("display","block");
        }
        valor=  $('input:radio[id=camioline]').prop("checked");
        if(valor==true || objeto!="calidad"){
          valor=  $('input:radio[id=calidad]').prop("checked",false);
          $(".divcalidad").css("display","none");
        }
        else{
          $(".divcalidad").css("display","block");
        }
        if(valor==true || objeto!="dañop"){
          valor=  $('input:radio[id=dañop]').prop("checked",false);
          $(".dañoproceso").css("display","none");
        }
        else{
          $(".dañoproceso").css("display","block");
        }
        if(valor==true || objeto!="incidencias"){
          valor=  $('input:radio[id=incidencias]').prop("checked",false);
          $(".incidenciasaso").css("display","none");
        }
        else{
          $(".incidenciasaso").css("display","block");
        }
        if(valor==true || objeto!="Talla"){
          valor=  $('input:radio[id=Talla]').prop("checked",false);
          $(".divTalla").css("display","none");
        }
        else{
          $(".divTalla").css("display","block");
        }
        if(valor==true || objeto!="Embarazo"){
          valor=  $('input:radio[id=Embarazo]').prop("checked",false);
          $(".divEmbarazo").css("display","none");
        }
        else{
          $(".divEmbarazo").css("display","block");
        }
      }
      
      function buscakit(){

       /**  var variable=$("#idkit").val()
        //alert(variable)
        $.ajax({
            url:"backend/buscakit.php",
            type:"POST",
            data:"kit="+variable,
            success:function(respuesta){
             const rellena=document.querySelector("#rellenaclase")
             rellena.innerHTML=respuesta
             
            } // fin del success
            
        }); // fin de ajax */
        if($("#selectmotivo").val()=="camioline"){
          var variable=$("#idkit").val()
       // alert(variable)
        $.ajax({
            url:"backend/buscakit.php",
            type:"POST",
            data:"kit="+variable,
            success:function(respuesta){
             const rellena=document.querySelector("#rellenaclase")
             rellena.innerHTML=respuesta
             
            } // fin del success
            
        }); // fin de ajax 
        }//end if
       }
       function llenakit(){
         
       }
       $("#relizar").click(function(){
         var analisis=$("#analisis").val()
         var medidas=$("#medidas").val()
         var json={"analisis":analisis,"medidas":medidas}
         var parametros="data="+JSON.stringify(json)
         $.ajax({
          url:"backend/altadataporgl.php",
          type:"POST",
          data:parametros,
          success:function(respuesta){
           alert("Registro validado")
           console.log(respuesta)
           //location.href="pendientes.php";
          } // fin del success
          
      }); // fin de ajax 
       })
       
       function compruebasi(){
        $.ajax({
          url:"backend/sessionglext.php",
          type:"POST",
          data:0,
          success:function(respuesta){
          var no=$("#NoAsociado").val()
         if(respuesta==no){
           $("#escondeDeuser").css("display","none")
         }
           
          } // fin del success
          
      }); // fin de ajax 
       }
       $("#Denegar").click(function(){
        location.href="denegar.php";
      /**  var denegado=$("#id-folio").val()
         var parametros="folio="+denegado
         $.ajax({
          url:"php/denegar.php",
          type:"POST",
          data:parametros,
          success:function(respuesta){
              alert("Solicitud denegada")
          } // fin del success
          
      }); // fin de ajax */  
       })
       function BuscaGLData(){
        $.ajax({
          url:"backend/consultaGLDATA.php",
          type:"POST",
          data:0,
          success:function(respuesta){
              var json =JSON.parse(respuesta)
              $("#analisis").val(json.analisis)
              $("#medidas").val(json.medidas)
          } // fin del success
         
      }); // fin de ajax 

       }
      // window.print()
}); 