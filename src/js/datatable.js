$(document).ready( function () {
    $('#tablax').DataTable();
    $('#tablax').DataTable({
        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
            }
        },
        scrollY: 400,
        lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
    });
    $("#tbUsr").on("click","#update",function(){
        var numero =$(this).attr("data-numero")
        
   $.ajax({
    url:"backend/resetuser.php",
    type:"POST",
    data:"numero="+numero,
    success:function(respuesta){
       $("#tbUsr").load("php/tablausers.php")
       alert(numero)
    } // fin del success
    
}); // fin de ajax 
    })
    $("#tbUser").on("click","#del",function(){
        var folio = ($(this).attr("data-folio"));
        if(folio==null){
            alert("Error no se pudo borrar el registro folio inexistente")
        }
        var parametros= "numero="+numero
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
} );