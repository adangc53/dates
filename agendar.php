<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendar Citas</title>
</head>
<body>
    <?php include("Navbar.php") ?>
    <p class="h1 text-center">Agenda de citas</p>
    <div class="container">
    <label for="idaso">Asociado</label>
    <?php include_once("selects/SelectAsociado.php"); ?>
    <label for="">Fechas disponibles</label>
    <?php include_once("selects/SelectCita.php"); ?>
     <a href="#" id="cita" class="btn btn-primary mt-2">Capturar Cita</a>
    </div>
    <script src="src/js/agendar.js"></script>
</body>
</html>