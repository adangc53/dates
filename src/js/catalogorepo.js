$(document).ready(function () {

    $("#tabla").on("click","#update",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio+"&tipo="+'gl'
        $.ajax({
            url:"php/variables.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                
            } // fin del success
            
        }); // fin de ajax 

    });
	$("#tabla").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "folio="+folio
       $.ajax({
        url:"php/deleterepo.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
           if(respuesta==400){
               alert("error registro no encontradp")
           }
           else{
                if(respuesta==200){
                    alert("sucsses")
                    $("#tabla").load("php/tableReposiciones.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
    });
    $("#table").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "folio="+folio
       $.ajax({
        url:"php/deleterepo.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
           if(respuesta==400){
               alert("error registro no encontradp")
           }
           else{
                if(respuesta==200){
                    alert("sucsses")
                    $("#table").load("php/tablarepogl.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
    });
    $("#table").on("click","#update",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio+"&tipo="+'gl'
        $.ajax({
            url:"php/variables.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
              //  $("#table").load("php/tableReposiciones.php");
            } // fin del success
            
        }); // fin de ajax 

    });
    $("#table").on("click","#denegar",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio
        //alert(parametros)
        $.ajax({
            url:"php/denegar.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#table").load("php/tablarepogl.php");
            } // fin del success
            
        }); // fin de ajax 

    });
    $("#table").on("click","#valida",function(){
        var folio =($(this).attr("data-folio"))
        var parametros="folio="+folio;
        alert(folio)
        $.ajax({
            url:"updatetables/updateRegByGL.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#table").load("php/tablarepogl.php");
            } // fin del success
            
        }); // fin de ajax 
    });
    $("#tbam").on("click","#denegar",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio
        //alert(parametros)
        $.ajax({
            url:"php/denegar.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbam").load("php/tablaam.php");
            } // fin del success
            
        }); // fin de ajax 
    })
    $("#tbam").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "folio="+folio
       $.ajax({
        url:"php/deleterepo.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
           if(respuesta==400){
               alert("error registro no encontradp")
           }
           else{
                if(respuesta==200){
                    alert("sucsses")
                    $("#tbam").load("php/tablaam.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
    });
    $("#tbam").on("click","#valida",function(){
        var folio =($(this).attr("data-folio"))
        var parametros="folio="+folio;
        alert(folio)
        $.ajax({
            url:"updatetables/updateRegByAM.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbam").load("php/tablaam.php");
            } // fin del success
            
        }); // fin de ajax 
    });
    $("#tbam").on("click","#update",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio+"&tipo="+'am'
        $.ajax({
            url:"php/variables.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                
            } // fin del success
            
        }); // fin de ajax 

    });
    ///////////////////tbrh////////////////////////////
    $("#tbrh").on("click","#update",function(){
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
    $("#tbrh").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "folio="+folio
       $.ajax({
        url:"php/deleterepo.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
           if(respuesta==400){
               alert("error registro no encontradp")
           }
           else{
                if(respuesta==200){
                    alert("sucsses")
                    $("#tbrh").load("php/tablarh.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
    });
    $("#tbrh").on("click","#denegar",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio
        //alert(parametros)
        $.ajax({
            url:"php/denegar.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbrh").load("php/tablarh.php");
            } // fin del success
            
        }); // fin de ajax 
    })
    $("#tbrh").on("click","#valida",function(){
        var folio =($(this).attr("data-folio"))
        var parametros="folio="+folio;
        alert(folio)
        $.ajax({
            url:"updatetables/updateRegByRH.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbrh").load("php/tablarh.php");
            } // fin del success
            
        }); // fin de ajax 
    });
    ////////////////////////////////////////////////////////////////////
    $("#tbgeneral").on("click","#update",function(){
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
    $("#tbgeneral").on("click","#valida",function(){
        var folio = $(this).attr("data-folio")
        //alert (folio)
        var parametros="folio="+folio;
        //alert(folio)
        $.ajax({
            url:"updatetables/updateRegByRH.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbgeneral").load("selects/tablageneral.php");
            } // fin del success
            
        }); // fin de ajax 
    })
    $("#tbgeneral").on("click","#denegar",function(){
        var folio = ($(this).attr("data-folio"));
        var parametros= "folio="+folio
        //alert(parametros)
        $.ajax({
            url:"php/denegar.php",
            type:"POST",
            data:parametros,
            success:function(respuesta){
                console.log(respuesta)
                $("#tbgeneral").load("selects/tablageneral.php");
            } // fin del success
            
        }); // fin de ajax 
    })
    $("#tbgeneral").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "folio="+folio
       $.ajax({
        url:"php/deleterepo.php",
        type:"POST",
        data:parametros,
        success:function(respuesta){
           if(respuesta==400){
               alert("error registro no encontradp")
           }
           else{
                if(respuesta==200){
                    alert("Borrado exitoso")
                    $("#tbgeneral").load("selects/tablageneral.php");
                }
           }
           
        } // fin del success
        
    }); // fin de ajax 
    });
});
