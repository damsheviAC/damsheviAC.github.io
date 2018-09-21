<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
    $phone = $_POST['phone'];
    $organization = $_POST['organization'];
    $posrednik = $_POST['posrednik'];
    $product = $_POST['product'];
    $comment = $_POST['comment'];
    $message = "Название организации:".$organization."\nПосредническая организация: ".$posrednik."\nЭлектронная почта: "
    .$email."\nКонтактный телефон: ".$phone."\nКонтактное лицо: ".$name;
    $to = 'damshevichac@gmail.com';
    $subject = 'Электронная заявка';
    mail($to, $subject, $message);

?>