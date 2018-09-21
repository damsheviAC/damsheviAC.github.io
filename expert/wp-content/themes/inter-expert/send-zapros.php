<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
    $phone = $_POST['phone'];
    $theme  = $_POST['theme'];
    $message = $_POST['message'];
    $text = "ФИО:".$name."\nEmail: ".$email."\nТелефон: ".$phone."\nТема: ".$theme."\nСообщение:".$message;
    $to = 'inter.expert.2004@gmail.com';
    $subject = 'Заявка';
    mail($to, $subject, $text);
?>