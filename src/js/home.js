$(document).ready(function()
{
			var fecha
			var fechain
			var NoAsociado
			var NombreAsociado
			var leader
			var turno
			var motivo 
			var explmotivo
			var dotacion
			var uso
			var problema
			var fechadaño
			var lugar
			var como
			var actExtra,posicion
			var TPoloA,CPoloA,TCamG,CCamG,TPantN,CPantN,TCamA,CCamA,TCinN,CCinN,TSudN,CSudN,TCha,CCha,reposon,TPantM,CPantM;
			var selected = new Array();
			//var checkbox
			function capturarep(){
				TPoloA=$("#TPoloA").val();
				CPoloA=$("#CPoloA").val();
				TCamG=$("#TCamG").val();
				CCamG=$("#CCamG").val();
				TPantN=$("#TPantN").val();
				CPantN=$("#CPantN").val();
				TPantM=$("#TPantM").val();
				CPantM=$("#CPantM").val();
				TCamA=$("#TCamA").val();
				CCamA=$("#CCamA").val();
				TCinN=$("#TCinN").val();
				CCinN=$("#CCinN").val();
				TSudN=$("#TSudN").val();
				CSudN=$("#CSudN").val();
				TCha=$("#TCha").val();
				CCha=$("#CCha").val();
				reposon = {"TPoloA":TPoloA,"CPoloA":CPoloA,"TCamG":TCamG,"CCamG":CCamG, "TPantN":TPantN,"CPantN":CPantN,"TCamA":TCamA,
							"CCamA":CCamA,"TCinN":TCinN,"CCinN":CCinN,"TSudN":TSudN,"CSudN":CSudN,"TCha":TCha,"CCha":CCha,"TPantM":TPantM,"CPantM":CPantM};
			};
			function captura(){
			fecha=$("#Fecha").val();
			fechain=$("#Fechain").val();
			NoAsociado=$("#NoAsociado").val();
			NombreAsociado=$("#NombreAsociado").val();
			leader=$("#leader").val();
			turno=$("#turno").val();
			motivo =$('input:radio[name=inlineRadioOptions]:checked').val();
			explmotivo=$("#validationTextarea").val();
			dotacion=$("#dotacion").val();
			uso=$("#uso").val();
			problema=$('input:radio[name=radioproblema]:checked').val();
			fechadaño=$("#fechadaño").val();
			lugar=$("#lugar").val();
			como=$("#como").val();
			actExtra=$("#extra").val();
			posicion=$("#posicion").val()
    		$(document).ready(function() {
      			$("input:checkbox:checked").each(function() {
         		selected.push($(this).val());
      			});
  			});
			//var checkbox
			
		}
		$("#listo").click(function () {	 
			//alert($('input:radio[name=inlineRadioOptions]:checked').val());
             
			//console.log($('input:checkbox[name=a]:checked').val()); 
			
			//console.log(fecha,fechain,NoAsociado);
			captura()
			var parametros = 'asociado=' + NoAsociado;
			$.ajax({
                url:"php/searchAsociados.php",
                type:"POST",
                data:parametros,
                success:function(respuesta){
                    if(respuesta=="400"){
                        alert('Faltan datos de entradam, ingrese usuario y contraseña error: '+respuesta);
        
                    }
                    else{
						var robo="robo"
						var obj = respuesta
						//console.log(respuesta)
						var jsonObj=JSON.parse(obj);
						$("#NombreAsociado").val(jsonObj["asociado"]);
						$("#Fechain").val(jsonObj["ingreso"]);
						$("#leader").val(jsonObj["gl"]);
						$("#turno").val(jsonObj["turno"]);
						$("#posicion").val(jsonObj["area"])
						$("input:radio[id="+robo+"]").prop('checked',true)
						shop()
						//console.log($('input:radio[name=inlineRadioOptions]:checked').val()); 
					//	$("input:radio[name=inlineRadioOptions]:checked").prop('checked',false)//Desmarca los radio botones
                    }
                } // fin del success
                
            }); // fin de ajax 
			});
			$("#vamos").click(function(){
				captura()
				capturarep()
				var datos= { "fecha":fecha,"fechain":fechain,"noAsociado":NoAsociado,"NoAsociado":NombreAsociado,"leader":leader,"turno":turno
							,"motivo":motivo,"explmotivo":explmotivo,"dotacion":dotacion,"uso":uso,"problema":problema,"fechadaño":fechadaño,
							"lugar":lugar,"como":como,"actExtra":actExtra,"posicion":posicion,reposon,"selected":selected};
				var parametros="asociado="+NoAsociado+"&gl="+leader+"&datos="+JSON.stringify(datos)+"&nombre="+NombreAsociado;
				$.ajax({
					url:"php/insertreposicion.php",
					type:"POST",
					data:parametros,
					success:function(respuesta){
						if(respuesta=="400"){
							alert('Faltan datos de entradam, ingrese usuario y contraseña error: '+respuesta);
			
						}
						else{
							alert(respuesta)
							var json= JSON.stringify(datos)
							var jsp=JSON.parse(json);
							console.log(jsp)
							llenado(jsp);
						}
					} // fin del success
					
				}); // fin de ajax 
				
			});
			$("#vamoss").click(function(){
				capturarep()
				var datos= { "hola":"hola", reposon };
							var datoss= JSON.stringify(datos);
				console.log(datos)
				
			});
			function llenado(jsp){
				$("#Fecha").val(jsp.fecha)
			}
			function shop(){
				parametros="numero="+$("#NoAsociado").val()
				$.ajax({
					url:"php/buscashop.php",
					type:"POST",
					data:parametros,
					success:function(respuesta){
						console.log(respuesta)
						$("#shop").val(respuesta)
						
					} // fin del success
					
				}); // fin de ajax 
			}
	});