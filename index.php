<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway|Ubuntu" rel="stylesheet">
    <link rel="stylesheet" href="src/css/index.scss">
    <link rel="stylesheet" href="src/bootstrap/css/bootstrap.min.css">
    <link rel="shortcut icon" href="src/images/logo.svg" style="background-color:red" type="image/x-icon">
    <!-- Estilos -->
    

    <title>Formulario Login y Registro de Usuarios</title>
</head>
<body>
<br>
<br>
   <!-- Formularios -->
    <div class="contenedor-formularios ">
        <!-- Links de los formularios -->
       

        <!-- Contenido de los Formularios -->
        <div class="contenido-tab">
            <!-- Iniciar Sesion -->
            <div id="iniciar-sesion">
                <h1>Iniciar Sesión</h1>
                <form >
                    <div class="contenedor-input">
                       
                        <input type="text" id="user" required placeholder="Numero de asociado *" require>
                    </div>

                    <div class="contenedor-input">
                        
                        <input id="passdata" type="password" required placeholder="Contraseña *">
                    </div>
                   
                  <!--   <input type="submit" class="button button-block" value="Iniciar Sesión">-->
                  <a id="login"  class="button button-block">Iniciar Sesión</a>
                 
                </form>
            </div>
            <script>
    
</script>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <section>
                <div class="row"><label for="rednumero" class="form control">No. asociado</label></div>
                <br>
                <div class="row mt-3 justify-content-center"><input id="rednumero" type="number" placeholder="Numero de asociado" class="form-control col-10"></div>
                
            </section>
            <section class="">
                 <div class="row"><label for="regmail">Contraseña</label></div>
                 <div class="row mt-5 justify-content-center">
                     <input type="password" id="regpass" class="form-control col-10" placeholder="Contraseñas">
                 </div>    
            </section>
            <section class="">
                 <div class="row"><label for="regmail">Correo</label></div>
                 <div class="row mt-5 justify-content-center">
                     <input type="mail" id="regmail" class="form-control col-10" placeholder="Correo electronico">
                 </div>    
            </section>
            <section class="">
                 <div class="row"><label for="regmail">Telefono</label></div>
                 <div class="row mt-5 justify-content-center">
                     <input type="number" id="regtel" class="form-control col-10" placeholder="Telefono particular">
                 </div>    
            </section>
      <div class="modal-footer mt-2">
      
        <button id="closemodal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a id="Save"  class="btn btn-primary float-right " type="button">Guardar</a>
      </div>
    </div>
  </div>
</div>
</div>

    <script src="src/bootstrap/js/jquery.min.js"></script>
<script  src="src/bootstrap/js/bootstrap.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="src/js/index.js"></script>


</body>
</html>
