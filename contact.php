<?php
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
$email = $_POST['email'];
$name = mb_substr($_POST['name'],0,24);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
} else {
    $message =  mb_substr($_POST['message'],0,400);
    $formcontent="From: $name \n Message: $message";
    $subject = "Portfolio Contact Form";
    $mailheader = "From: $email \r\n";
    mail("jtams322@gmail.com", $subject, $formcontent, $mailheader) or die("Error!");
    echo "Done";
}
?>