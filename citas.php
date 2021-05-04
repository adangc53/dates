<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>citas</title>
</head>
<body>
<?php include("Navbar.php") ?>

    <section class="container">
    <p class="h4 text-center">Catalogo para asignar tiempos de consultas</p>
        <label for="fecha">Fecha de la cita</label>
        <input type="date" id="fecha" class="form-control">
        <label for="lugates">Lugares</label>
        <input type="number" id="lugares" class="form-control">
        <label for="horario">Horario</label>
        <input type="text" class="form-control" id="horario" placeholder="Inserse el horario deseado para la cita">
        <label for="duracion">Duracion</label>
        <input type="number" class="form-control" id="duracion" placeholder="Duracion en Hrs">
        <a href="#" id="savecita" class="btn btn-primary mt-2">Guardar</a>
    </section>
    <div class="container">
        <div class=" mt-4" id="generaltb"></div>
    </div>
    <script>
    $("#generaltb").load("controller/citastb.php");
    </script>
    <script src="src/js/jscitas.js"></script>
</body>
</html>