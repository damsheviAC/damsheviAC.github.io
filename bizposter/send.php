<?php
   if(!empty($_POST['email']) and !empty($_POST['phone'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
    $phone = $_POST['phone'];
    $spam = $_POST['spam'];
    $standart = $_POST['standart'];
    $mini = $_POST['mini'];
    $message = "Имя:".$name."\nEmail: ".$email."\nТелефон: ".$phone."\nСогласие на рассылку:".$spam."\nКоличество СТАНДАРТ: ".$standart.
    "\nКоличество МИНИ: ".$mini;
    $to = 'aiawww@mail.ru';
    $subject = 'Заказ';
    mail($to, $subject, $message);
 	}
?>
