<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Estudios Realizados</title>
    </head>
    <body>
        <?php include("Navbar.php") ?>
        <div class="container mt-3">
            <form>
                <div class="container-fluid">
                    <div class="row">
                        <div class="form-group">
                            <input type="number" id="asociado" class="form-control mt-4" placeholder="Numero de asociado">
                            <a href="#" class="btn btn-primary mt-2" id="busca">Buscar</a>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="form-group">
                            <label for="nocita">No. Cita</label>
                            <input type="text" class="form-control" id="nocita" placeholder="Numero de cita">
                        </div>
                        <div class="form-group">
                            <label for="nosociado">No. Asociado</label>
                            <input type="text" class="form-control" id="nosociado" placeholder="Numero del asociado">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="fecita">Fecha Cita</label>
                    <input type="text" class="form-control" id="fecita" placeholder="Numero de cita">
                </div>
                <div class="container">
                    <input type="date" id="nvafecha" class="form-control" style="display:none;">
                    <input type="number" id="noAsociadoDate" class="form-control" style="display:none;">
                    <a href="#" id="changedate" class="btn btn-primary mt-2"  style="display:none;">Cambiar Fecha</a>
                </div>
                <div class="container mt-3">
                    <div class="" id="tablaservice1"></div>
                </div>

            </form>
        </div>
    </body>
    <script>
        $("#tablaservice1").load("controller/tablaservice1.php");
    </script>

    <script src="src/js/buscaEstudios.js"></script>
</html>