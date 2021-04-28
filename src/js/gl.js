$(document).ready(function () {
    var analisis,medidas,GlTcamM,GlCcamM,GlTCamMz,GlCCamMz,GlTpoloA,GlCpoloA,GlTSn,GlCSn,GlTPant,GlCpant,GlTPantM,GlCPantM,GlTCint,GlCCint,GlTSwl,GlCSwl
    var comp="",jst,bandera=0,seleccion= new Array();
    $("#btnfirmaglh").click(function(){
capturagl()
});
function capturagl(){
// var Arre= new Array();
$(document).ready(function() {
    $("input:checkbox[name=checkGL]:checked").each(function() {
   seleccion.push($(this).val());
    });
});
var Arres=["analisis","medidas","GlTcamM","GlCcamM","GlTCamMz","GlCCamMz","GlTpoloA","GlCpoloA","GlTSn","GlCSn","GlTPant","GlCpant","GlTPantM","GlCPantM","GlTCint","GlCCint","GlTSwl","GlCSwl"];
 for(var i=0;i<Arres.length;i++){
     comp=comp+'"'+Arres[i]+'"'+':'+'"'+$("#"+Arres[i]).val()+'"';
     if(i<(Arres.length-1)){comp=comp+",";}
 }
//var jsq = JSON.stringify(ssss);
console.log(seleccion)
comp=comp+',"seleccion":'+'""'
console.log(comp)
if(bandera==0){
    jst=JSON.parse("{"+comp+"}"); 
    bandera=1;
}
else{
    jst=JSON.parse("{"+comp+"}"); 
    }
    jst.seleccion= seleccion
//console.log(jst.analisis);
console.log(jst)
//console.log(seleccion)
registralg(jst)
Arres=[];
comp="";
jst="";
seleccion=[]
//var json= JSON.parse(js)
//console.log(json);
};
function registralg(jsr){
    var parametros='data='+JSON.stringify(jsr);
    $.ajax({
        url:"backend/updaterepolg.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
            alert("Firma exitosa");
            location.href="catalogoReposicion.php";
        } // fin del success
        
    }); // fin de ajax 
};
});