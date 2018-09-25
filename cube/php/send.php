<?php
if(isset($_POST) && $_POST["phone"]){
	$to      = 'info@highcube.ru';
	$subject = 'Сообщение с сайта http://highcube.ru/';

	$message = array();
	$message[] = '<table border="0">';
	if(isset($_POST['name'])){$message[] = '<tr><td><b>Имя:</b></td><td>'.$_POST["name"].'</td></tr>';}
	if(isset($_POST['email'])){$message[] = '<tr><td><b>E-mail:</b></td><td>'.$_POST["email"].'</td></tr>';}
	$message[] = '<tr><td><b>Телефон:</b></td><td>'.$_POST["phone"].'</td></tr>';
	$message[] = '</table>';

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	$headers .= 'From: support@highcube.ru' . "\r\n";

	$send = mail($to, $subject, implode("", $message), $headers);

	if($send)
		echo 'success';
}