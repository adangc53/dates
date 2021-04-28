$(document).ready(function () {
$("select[name=prenda]").change(function(){
    // alert("prenda");
     var prenda =$('select[name=prenda]').val()
    // alert(prenda)
     var des= document.getElementById("imagecard")
     console.log("src/images/"+prenda+".png")
     des.setAttribute("src","src/images/"+prenda+".png")
    
 });
})