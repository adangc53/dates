$(document).ready(function()
{
    var analisis,medidas,GlTcamM,GlCcamM,GlTCamMz,GlCCamMz,GlTpoloA,GlCpoloA,GlTSn,GlCSn,GlTPant,GlCpant,GlTPantM,GlCPantM,GlTCint,GlCCint,GlTSwl,GlCSwl
    var comp="",jst,bandera=0,seleccion= new Array();
    var arreglos = new Array(); 
  $("#btnfirmaglh").hide();

  
 
   // function llenadogls(){
        data="folio="+$("#folinput").val()
        //console.log(parametros)
        $.ajax({
            url:"backend/getglpart.php",
            type:"POST",
            data:data,
            success:function(respuesta){
           //  console.log(respuesta)
             var jsonrest=JSON.parse(respuesta)
              ll(jsonrest)
            } // fin del success
            
        }); // fin de ajax 
     //}
     function llenadogls(jsonrest){
        var Arresgl=["analisis","medidas","GlTcamM","GlCcamM","GlTCamMz","GlCCamMz","GlTpoloA","GlCpoloA","GlTSn","GlCSn","GlTPant","GlCpant","GlTPantM","GlCPantM","GlTCint","GlCCint","GlTSwl","GlCSwl"];

         console.log(jsonrest)
         for(var is=0;is<Arresgl.length;is++){
             $('#'+Arresgl[is]+'').val(jsonrest+"."+Arresgl[is]+"")
        //  console.log(Arres[is]) 
         }
     }
     function ll(mjson){
       
     
        // Obteniendo todas las claves del JSON
        for (var clave in mjson){
          // Controlando que json realmente tenga esa propiedad
          if (mjson.hasOwnProperty(clave)) {
            // Mostrando en pantalla la clave junto a su valor
            console.log("La clave es " + clave+ " y el valor es " + mjson[clave]);
            $('#'+clave+'').val( mjson[clave])
            if(clave=="seleccion"){
                
                arreglos = mjson[clave]
                console.log(arreglos)
                for(var secc =0; secc < mjson.seleccion.length; secc++ ){
                    $("input:checkbox[id="+mjson.seleccion[secc]+"]").prop('checked',true)
                    console.log(mjson.seleccion[secc])
                }
            }
          }
        }
     }
});