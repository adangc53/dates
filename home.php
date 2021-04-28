<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <?php
    include("Navbar.php")
    ?>
    <div class="container">
        <input type="number" id="asociado" class="form-control mt-4" placeholder="Numero de asociado">
        <a href="#" class="btn btn-primary mt-2" id="busca">Buscar</a>
        <div class="mt-2" id="table"></div>
    </div>
    <script>
   // $("#table").load("controller/busca.php");
    </script>
    <script src="src/js/busca.js"></script>
</body>
</html>