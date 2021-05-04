<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
//require 'vendor/autoload.php';
$path=$_SERVER['DOCUMENT_ROOT'].'/toyota';
require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";
//Instantiation and passing `true` enables exceptions
//$correo="comunidadtesturban@gmail.com"; $nombre="hola";$folio="10";
correspondencia();
//function correspondencia($correo,$nombre,$folio,$numero){
    function correspondencia(){
        $correo="adangc53@gmail.com";
$mail = new PHPMailer(true);

    $mensaje=" TMMGT Programa toyota Moms, Estudios clinicos para todas nuestras madres, como parte del programa toyota moms se le ha asignado una cita medica el dia CITA_DATE donde
    donde podra tener acceso a una serie de estudios generales y de especialidad. Los estudios estan pensados para que todas nuestras mujeres puedan estar al tanto de su estado de salud
     ";
        $nombre="NOM_ASOCIADO su solicitud fue aprobada";

try {
    //Server settings
    $mail->SMTPDebug =0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ToyotaMoms2021@gmail.com';                     //SMTP username
    $mail->Password   = "AlterCronos821";                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('ToyotaMoms2021@gmail.com', 'TMMGT TOYOTA MomS');//correo de envio 
    $mail->addAddress("$correo","$nombre");     //Destino
   


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Solicitud de reposicion folio:";//titulo 
    $mail->Body    = "$nombre su solicitud fue aprovada <br> <b>folio: $mensaje</b>";//contenido
    

    $mail->send();
    echo '200'; //mensaje de respuesta
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}