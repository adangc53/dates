<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

        <title>Lista De Asociados</title>
    </head>
    <body>
        <?php
        include("Navbar.php")
        ?>

        <div class="container">
            <div class="container mt-3">
                <div class="row">
                    <h4>CATALOGO DE ASOCIADOS</h4>
                </div>
            </div>
            <div class="container mt-3" style="width: 700px; background-color: #cb0f06;">
                <form method="post" style="color: white;" id="editarForm">
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
                        <a id="guardarEditado" class="btn btn-primary mt-2 ">Guardar</a>
                    </div>
                    <br>
                    <br>
                </form>
            </div>
        </div>
        <div class="container">
            <div class="container mt-3">
                <div class="row">
                    <button id="btnmodnuevo" class="btn btn-primary" data-toggle="modal" data-target="#modalNuevo">
                        Agregar nuevo
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
                <div class="row">
                    <br>
                    <div style="overflow: scroll">
                        <table class='table table-striped table-bordered' id="table"></table>
                    </div>
                </div>
                <form method="post" id="asociadosform">
                    <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog modal-sm" role="document" style="margin-right: 700px;">
                            <div class="modal-content" style="width:700px;">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel" style="width:700px;">Agregar un nuevo asociado</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row-cols-4">
                                        <label>Asociado</label>
                                        <input type="number" name="" id="asociado" class="form-control input-sm">
                                    </div>
                                    <label>Badge</label>
                                    <input type="number" name="" id="badge" class="form-control input-sm">
                                    <label>Nombre</label>
                                    <input type="text" name="" id="nombre" class="form-control input-sm">
                                    <label>Genero</label>
                                    <input type="text" name="" id="genero" class="form-control input-sm">
                                    <label>Telefono</label>
                                    <input type="text" name="" id="telefono" class="form-control input-sm">
                                    <label>Correo</label>
                                    <input type="email" name="" id="correo" class="form-control input-sm">
                                    <label>Gl</label>
                                    <input type="text" name="" id="gl" class="form-control input-sm">
                                    <label>Posicion</label>
                                    <input type="text" name="" id="posicion" class="form-control input-sm">
                                    <label>Area</label>
                                    <input type="text" name="" id="area" class="form-control input-sm">
                                </div>
                                <div class="modal-footer">
                                    <a id="guardarnuevo" class="btn btn-primary mt-2 " data-dismiss="modal">Guardar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <script>
            $("#table").load("controller/tableasociados.php");
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="src/js/asociados.js"></script>
    </body>
</html>