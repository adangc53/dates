<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=3.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        <title>Editar datos del asociado</title>
    </head>
    <body>
        <?php
        include("Navbar.php")
        ?>
        <div class="container">
            <div class="container mt-3" style="width: 700px; background-color: #cb0f06;">
                <form style="color: white;">
                    <br>
                    <h4>Editar datos del asociado</h4>

                    <div class="row-cols-4">
                        <label>Asociado</label>
                        <input type="number" name="" id="asociado2" class="form-control input-sm">
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Badge</label>
                            <input type="number" name="" id="badge2" class="form-control input-sm">
                        </div>
                        <div class="col">
                            <label>Nombre</label>
                            <input type="text" name="" id="nombre2" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Genero</label>
                            <input type="text" name="" id="genero2" class="form-control input-sm">
                        </div>
                        <div class="col">
                            <label>Telefono</label>
                            <input type="text" name="" id="telefono2" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Correo</label>
                            <input type="email" name="" id="correo2" class="form-control input-sm">
                        </div>
                        <div class="col">
                            <label>Gl</label>
                            <input type="text" name="" id="gl2" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Posicion</label>
                            <input type="text" name="" id="posicion2" class="form-control input-sm">
                        </div>
                        <div class="col">
                            <label>Area</label>
                            <input type="text" name="" id="area2" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="footer-copyright right-aligned">
                        <a id="guardarnuevo" class="btn btn-primary mt-2 " data-dismiss="modal">Guardar</a>
                    </div>
                    <br>
                    <br>
                </form>
            </div>
        </div>
        <br>
        <br>
        <br>
        <script>
            $("#table").load("controller/tableasociados.php");
        </script>
        <script src="src/js/asociados.js"></script>
    </body>
</html>