<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="src/css/navbar.css">
    <link rel="stylesheet" href="src/icons/css/all.css">
   
    <title>Document</title>
</head>
<body>
<?php session_start(); ?>
<?php  
          if  (!isset($_SESSION)) session_start();
          if (!isset($_SESSION["user"])) $_SESSION["user"] = "";
          if ($_SESSION["user"]=="0"){
            
            header("location:index.php");
        }
        else
             $bandera = true;
  ?>
    <div class="">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="src/images/toyota.svg" alt="" width=200></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    
      <li class="nav-item">
       <a class="nav-link" href="home.php">Home</a>
      </li>
    
     <li class="nav-item">
      <a class="nav-link" href="agendar.php">Agenda</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="general.php">General</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="asociados.php">Asociados</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="citas.php">Tiempos</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="reagendar.php">Reagendar asociado</a>
      </li>
      </li>
      
    </ul>
       <p class="mt-2 float-right mr-3 h5"> <?php print $_SESSION["user"]; ?></p>
     
    <form class="form-inline my-2 my-lg-0">
    
    <a class="nav-link logout" href="controller/Logout.php">Cerrar sesion</a>
    </form>
  </div>
</nav>
</div>

<script src="src/bootstrap/js/jquery.min.js"></script>
<script  src="src/bootstrap/js/bootstrap.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>


</body>
</html>
