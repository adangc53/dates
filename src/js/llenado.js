$(document).ready(function()
{
    //var fecha, fechain, NoAsociado, NombreAsociado, leader, turno, posicion,shop
        llenado()
    function llenado () {	 
        var parametros = 'asociado=' + 223205;
        $.ajax({
            url:"php/searchAsociados.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                if(respuesta=="400"){
                    alert('Faltan datos de entrada, ingrese usuario y contraseña error: '+respuesta);
                }
                else{
                    var obj = respuesta
                    //console.log(respuesta)
                    var jsonObj=JSON.parse(obj);
                    $("#NombreAsociado").val(jsonObj["asociado"]);
                    $("#Fechain").val(jsonObj["ingreso"]);
                    $("#leader").val(jsonObj["gl"]);
                    $("#turno").val(jsonObj["turno"]);
                  //  $("#posicion").val(jsonObj["area"])
                  
                    $("#NoAsociado").val(jsonObj["NoAsociado"])
                    var f = new Date();
                    var mes=f.getMonth() +1
                    var dia= f.getDate()
                    if(mes<10){mes="0"+mes}
                    else{ mes=f.getMonth() +1}
                    if(dia<10){dia="0"+dia}
                    else{dia=f.getDate()}
                     var fechadat=f.getFullYear() + "-" + (mes) + "-" +dia 
                     $("#Fecha").val(fechadat)
                    shop()
                    
                   
                   // capturadatos()
                }
            } // fin del success
            
        }); // fin de ajax 
        }
        var arreglos=["Fecha","Fechain","NoAsociado","NombreAsociado","shop","leader","turno","posicion"]
        var jsonmanger={}
        
        function capturadatos(){
            var jsonres=""
            for(var i=0; i<arreglos.length ;i++){
                jsonres=jsonres+'"'+arreglos[i]+'"'+':'+'"'+$("#"+arreglos[i]).val()+'"';
                if(i<(arreglos.length-1)){jsonres=jsonres+",";}
                //console.log('"'+arreglos[i]+'"'+':'+'"'+$("#"+arreglos[i]).val()+'"')
            }
            track()
            //console.log(jsonres);
            $("#SaveDataAsociado").val(jsonres)
            
        }
        function shop(){
            parametros="numero="+$("#NoAsociado").val()
            $.ajax({
                url:"php/buscashop.php",
                type:"POST",
                data:parametros,
                success:function(respuesta){
                  // console.log(respuesta)
                    $("#shop").val(respuesta)
                    posicion()
                } // fin del success
                
            }); // fin de ajax 
        }
        function posicion(){
           var parametros="numero="+$("#NoAsociado").val()
           $.ajax({
                url:"php/buscaPosicion.php",
                type:"POST",
                data:parametros,
                success:function(respuesta){
                    $("#posicion").val(respuesta)
                    capturadatos()
                  
                } // fin del success
                
            }); // fin de ajax 
        }
       // track()
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
       
       
}); 