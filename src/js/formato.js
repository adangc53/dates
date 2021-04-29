$(document).ready(function()
{
  // alert("Recuerda que se requiere una solicitud por prenda")
    var valor=false
    var bandera=true
    $('.inrads').click(function(event){
        var hola=$(this).val()
        if(hola=="otro"){
            $("#inputotro").css("display","block");
          }
          else{
            $("#inputotro").css("display","none"); 
          }
    });
    $("#selectmotivo").change(function(){
      bandera=false
      var objeto=$("#selectmotivo").val() //$(this).val()
     // console.log(objeto)
      if(valor==true || objeto!="camioline"){
        valor=  $('input:radio[id=camioline]').prop("checked",false);
        $(".cambio").css("display","none");
        $(".ocultar").css("display","block")
        const rellena=document.querySelector("#rellenaclase")
             rellena.innerHTML=""
      }
      else{
        $(".cambio").css("display","block");
        $(".ocultar").css("display","none")
      }
      //valor=  $('input:radio[id=camioline]').prop("checked");
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
      if(valor==true|| objeto!="prendaext"){

      }
    });
    var jsonres={}
    $("#relizar").click(function(){
      console.log($("#prenda").val())
      var radios =$("#selectmotivo").val()// $('input:radio[name=camioline]:checked').val();
      //console.log(radios)
      if(radios=="calidad"){
       // jsonres={}
        var res=capturaCalidad()
       // console.log(res)
      }
      if(radios=="camioline"){
       // jsonres={}
        var res=capturaCambioarea()
        //console.log(res)
      }
      if(radios=="robo"){
      //  jsonres={}
        var res=capturaRobo()
        //console.log(res)
      }
      if(radios=="dañop"){
          var res =capturaDañoproceso()
          //console.log(res)
      }
      if(radios=="incidencias"){
        var res = capturaIncidencias()
        //console.log(res)
      }
      if(radios=="Talla"){
        capturetalla();
       ///alert("Recuerda llevar la prenda nueva que deseas cambiar")
      // selecprenda()
      }
      if(radios=="prendaext"){
        captureprenex()
        //selecprenda()
      }
      if(radios=="Embarazo"){
        capturaEmbarazo()
      }
      
      if(bandera){
        alert("seleccione una de las opciones")
      }
     
    });
    function capturaCalidad(){
      var valor= $('input:radio[name=inlineRadioOptions]:checked').val();
      var valor1= $("#inputotro").val()
      var meses=$("#tiempoUso").val()
      if(valor==null){alert("seleccione una de las opciones para continuar")}
      else{
        jsonres={"field":{"id":valor,"inputotro":valor1,"tiempoUso":meses},"campo":"calidad"}
        selecprenda();
        return jsonres;
      }
    }
    function capturaCambioarea(){
      var valor=$("#AreaNva").val()
      var valor1=$("#PosicionNva").val()
      var kit = $("#idkit").val()
      if(valor==0||valor1==0){alert("Faltan datos de entrada")}
      else{
        jsonres={"field":{"AreaNva":valor,"PosicionNva":valor1,"idkit":kit},"campo":"camioline"}
       // selecprenda();
       detallecptura();
      return jsonres
      }
    }
    function capturaRobo(){
      var valor =$('input:radio[name=tiporobo]:checked').val();
      var valor1 =$("#explica").val()
      if(valor==null){alert("seleccione una de las opciones para continuar")}
      else{
        jsonres={"field":{"id":valor,"explica":valor1},"campo":"robo"}
        selecprenda();
        return jsonres
      }
      
    }
    function capturaDañoproceso(){
      var valor =$("#explicadaño").val(), valor1=$("#AnalisisAso").val(),valor2=$("#MedidasAso").val()
      if(valor==""||valor1==""||valor2==""){alert("Llene la explicacion para continuar")}
      else{
        jsonres={"field":{"explicadaño":valor,"AnalisisAso":valor1,"MedidasAso":valor2},"campo":"dañop"}
        selecprenda();
        return jsonres
      }
      
    }
    function capturaIncidencias(){
      var valor = $('input:radio[name=radincidencia]:checked').val();
        if(valor==null){ alert("Selecciona una de las opciones para continuar"); console.log(valor) }
        else{
          jsonres={"field":{"id":valor},"campo":"incidencias"}
          selecprenda();
          return jsonres
        }
    }
   function capturetalla(){
     jsonres={"field":{},"campo":"Talla"}
     selecprenda();
     return jsonres;
   }
   function captureprenex(){
    jsonres={"field":{},"campo":"prendaext"}
    selecprenda();
    return jsonres;
   }
   function capturaEmbarazo(){
     var dates=$("#dateEmbarazoStart").val()
     var datend=$("#dateEmbarazoEnd").val()
     if(dates==""||datend==""){alert("Ingrese las fechas requeridas")}
     else{
      jsonres={"field":{"dateEmbarazoStart":dates,"dateEmbarazoEnd":datend},"campo":"Embarazo"}
      selecprenda()
     }
     
   }
    $("select[name=prenda]").change(function(){
     // alert($('select[name=prenda]').val());
      var prenda =$('select[name=prenda]').val()
      var des= document.getElementById("imagecard")
      console.log("src/images/"+prenda+".png")
      des.setAttribute("src","src/images/"+prenda+".png")
     
  });
  function selecprenda(){
    if($("#prenda").val()=="0"){ 
      alert("Seleccione una prendapara continuar")
    }
     else{
       if($("#tallapren").val()==""||$("#cantPren").val()==""){
         alert("Ingrese talla y cantidad de la prenda")
       }
      else{
      //  console.log(jsonres)
    var talla=$("#tallapren").val()
    var cantidad =$("#cantPren").val()
    //alert(talla+"***"+cantidad)
    detallecptura()
      }
     }
    
  }
  function detallecptura(){
    var datosaso="{"+$("#SaveDataAsociado").val()+"}"
    var jsondatosaso=JSON.parse(datosaso) 
    var suceso= jsonres
    var idprenda=$("#prenda").val()
    var cantidadpre=$("#cantPren").val()
    var tallprenda=$("#tallapren").val()
    var numero=$("#NoAsociado").val()
    var nombre=$("#NombreAsociado").val()
    var gl= $("#leader").val()
    var dataprenda= {"prenda":$("#prenda").val(),"tallapren":$("#tallapren").val(),"cantPren":$("#cantPren").val()}
    var jsondata={"asociado":jsondatosaso,"jsonsucc":suceso,"jsonprenda": dataprenda}
    var parametros ="datos="+JSON.stringify(jsondata)
    +"&detalle=("+idprenda+" Talla: "+tallprenda+" cantidad: "+cantidadpre+")&asociado="+numero+"&nombre="+nombre+"&gl="+gl;
    console.log(parametros)
    $.ajax({
      url:"php/insertreposicion.php",
      type:"POST",
      data:parametros,
      success:function(respuesta){
          alert("Registro exitoso");
         // alert(respuesta)
          location.href="catalogoReposicion.php";
      } // fin del success
      
  }); // fin de ajax 
  }
  var test =document.querySelectorAll('.imgclass')
  for(var i=0;i<test.length;i++){
      test[i].addEventListener("click", function(){
         var prensaselec=this.id
         $("#prenda").val(prensaselec)
         var prenda =$('select[name=prenda]').val()
         var des= document.getElementById("imagecard")
         console.log("src/images/"+prenda+".png")
         des.setAttribute("src","src/images/"+prenda+".png")
      }); 
  }
 $("#AreaNva").change(function(){
   var a=$(this).val()
   if(a=="TMMGT PE NM SUPP & PROJ GRP Department Group"){a=11}
   $.ajax({
    url:"backend/variableshop.php",
    type:"POST",
    data:"shop="+a,
    success:function(respuesta){
       $("#showselect").load("php/ConsultaPosicion.php")
       
    } // fin del success
    
}); // fin de ajax 
 })
 
}); 