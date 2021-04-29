<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista De Asociados</title>
</head>
<body>
<?php
    include("Navbar.php")
    ?>

    <p class="h2 text-center">Catalogo de Asociados</p>
    <div class="container">
    <div class="mt-2" id="table"></div>
    </div>
   
    <script>
    $("#table").load("controller/tableasociados.php");
    </script>

</body>
</html>