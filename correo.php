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
        $correo="carolina.esparza@toyota.com";
        //$correoGl="16980824@itroque.edu.mx";
$mail = new PHPMailer(true);

    $mensaje=" ";
        $nombre="NOM_ASOCIADO";

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
    //$mail->addAddress("$correo","$nombre");     //Destino
    //$mail->addAddress("$correoGl","GL");  

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Programa de Revision Medica Mama Toyota";//titulo 
    $mail->Body    ="<p class='text-center' style='font-size:20px; text-align: center;'>Bienvenida al Programa de Revisión Médica para Mamá Toyota</p>".
    "<p class='text-center' style='text-align: center;'>Tienes programada una cita médica diseñada especialmente para ti el día</p>".
    "<p class='text-center' style='color:#ec039af2;text-align: center;'>Martes 11 de Mayo del 2021</p>".
    "<p style='text-align: center;'>Por favor lee y toma en cuenta la siguiente información importante antes de acudir a tu cita</p>".
    '<img src="https://lh5.googleusercontent.com/I-I8qvxbGsJb093jf6Q0W55suoN51N0_hfzkspRT0jGkS2B3L08xyVOHnxMXk3pBsJKlPeRzPgow7vFHFGAY2n1nmkEUN5dvrwgSu1TV6L6P89WVRe72baZE8e7gmVkYrA=w1280" style="display:block;margin:auto;">';//"$mensaje";//contenido
    

    $mail->send();
    echo '200'; //mensaje de respuesta
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}