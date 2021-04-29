<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle de citas</title>
</head>
<body>
    <?php include("Navbar.php")?>
    <p class="h3 text-center mt-2">Detalle de Citas</p>
    <div class="container mt-3">
    <div class="" id="tbcita"></div>
    </div>
    
    <script>
   $("#tbcita").load("selects/tbdetallecitas.php");
    </script>
</body>
</html>