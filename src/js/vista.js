$(document).ready(function()
{
  
  function capAso(){

    var num= $("#NoAsociado").val()
   // console.log($("#NoAsociado").val())
    
    var parametros="numero="+num;
    $.ajax({
                url:"php/buscafirma.php",
                type:"POST",
                data:parametros,
                success:function(respuesta){
                  $("#imgfirm").attr("src","src/firmas/"+respuesta+"");
                } // fin del success
               
            }); // fin de ajax 
  };
    
 ///
			var parametros="folio:"+3;
				$.ajax({
					url:"backend/variablefolio.php",
					type:"POST",
					data:parametros,
					success:function(respuesta){
						$("#session").val(respuesta);
						request()
					} // fin del success
					
				}); // fin de ajax 
				function request(){
                    var data=$("#session").val();
                    $.ajax({
                        url:"backend/consultaRepoByFolio.php",
                        type:"POST",
                        data:data,
                        success:function(respuesta){
                         
                          var rqjson = JSON.parse(respuesta)
                        // console.log(rqjson)
                          llenado(rqjson)
                          capAso();
                        } // fin del success
                        
                    }); // fin de ajax 
                };
                
                function llenado(jsp){
                    $("#Fecha").val(jsp.fecha)
                    $("#Fechain").val(jsp.fechain)
                    $("#NoAsociado").val(jsp.noAsociado)
                    $("#NombreAsociado").val(jsp.NoAsociado)
                    $("#leader").val(jsp.leader)
                    $("#turno").val(jsp.turno)
                    $("#posicion").val(jsp.posicion)
                    //$("#posicion").val(jsp.posicion)
                    $("input:radio[id="+jsp.motivo+"]").prop('checked',true)
                    $("#validationTextarea").val(jsp.explmotivo)
                    $("#dotacion").val(jsp.dotacion)
                    $("#uso").val(jsp.uso)
                    $("input:radio[id="+jsp.problema+"]").prop('checked',true)
                    $("#fechadaño").val(jsp.fechadaño)
                    $("#lugar").val(jsp.lugar)
                    $("#como").val(jsp.como)
                    $("#lugar").val(jsp.lugar)
                    $("#extra").val(jsp.actExtra)
                    $("#CCamA").val(jsp.reposon.CCamA)
                    $("#CCamG").val(jsp.reposon.CCamG)
                    $("#CCha").val(jsp.reposon.CCha)
                    $("#CCinN").val(jsp.reposon.CCinN)
                    $("#CPantN").val(jsp.reposon.CPantN)
                    $("#CPoloA").val(jsp.reposon.CPoloA)
                    $("#CSudN").val(jsp.reposon.CSudN)
                    $("#CPoloA").val(jsp.reposon.CPoloA)
                    $("#TCamA").val(jsp.reposon.TCamA)
                    $("#TCamG").val(jsp.reposon.TCamG)
                    $("#TCha").val(jsp.reposon.TCha)
                    $("#TCinN").val(jsp.reposon.TCinN)
                    $("#TPantN").val(jsp.reposon.TPantN)
                    $("#TPoloA").val(jsp.reposon.TPoloA)
                    $("#TSudN").val(jsp.reposon.TSudN)
                    $("#TPantM").val(jsp.reposon.TPantM)
                    $("#CPantM").val(jsp.reposon.CPantM)
                    var i = jsp.selected
                    var areglo= new Array()
                    arreglo=i
                    //console.log(arreglo.length)
                    for (var j = 0; j < arreglo.length; j++) {
                      $("input:checkbox[id="+jsp.selected[j]+"]").prop('checked',true)
                   }
                  //  $("#").val(jsp.reposon.)
                  //  console.log(jsp.reposon)

                }
	});