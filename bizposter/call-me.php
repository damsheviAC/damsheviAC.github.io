<?php
   if(!empty($_POST['name']) and !empty($_POST['email'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
    $coment = $_POST['coment'];
    $message = "Имя: ".$name."\nEmail: ".$email."\nКомментарий: ".$coment;
    $to = 'aiawww@mail.ru';
    $subject = 'Заказ звонка';
    mail($to, $subject, $message);
 	}
?>
