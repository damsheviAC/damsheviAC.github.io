<?php
	require ('class.phpmailer.php');
	require ('class.smtp.php');

	$to = 'inter.expert.2004@gmail.com';
	
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $organization = $_POST['organization'];
    $posrednik = $_POST['posrednik'];
    $product = $_POST['product'];
    $comment = $_POST['comment'];
	$message = "Название организации:".$organization."<br>Посредническая организация: ".$posrednik."<br>Электронная почта: "
    .$email."<br>Контактный телефон: ".$phone."<br>Контактное лицо: ".$name."<br>Название продукта: ".$product."<br>Комментарий: ".$comment;
	
	
	$mail = new PHPMailer();

	//$mail->IsSMTP();                                      
	$mail->Host = 'smtp.gmail.com';  // specify main and backup server
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->Username = 'inter.expert.2004@gmail.com';  // SMTP username
	$mail->Password = 'expert2018'; // SMTP password
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;
	$mail->CharSet = 'UTF-8';

	$mail->setFrom('inter-expert');
	$mail->addAddress($to);   
	

	$mail->AddAttachment($_FILES['document']['tmp_name'], $_FILES['document']['name']); 
	$mail->AddAttachment($_FILES['product-list']['tmp_name'], $_FILES['product-list']['name']); 
	$mail->AddAttachment($_FILES['partner-map']['tmp_name'], $_FILES['partner-map']['name']); 
	$mail->AddAttachment($_FILES['doverenost']['tmp_name'], $_FILES['doverenost']['name']); 	

	$mail->isHTML(true);                                 
	$mail->Subject = 'Электронная заявка';
	$mail->Body    = $message;
		
	if(!$mail->send()) {
	 echo '<p style="position:absolute; top:30%; left:50%; transform:translate(-50%); color:red;font-size:34px;">Ошибка!</p>';
	 echo 'Mailer Error: '.$mail->ErrorInfo;
	} else {
	    echo '<html>';
    echo '<head>';
        echo '<meta  http-equiv="refresh" content="2;http://inter-expert.h1n.ru/documentation/">';
    echo '<head>';
    echo '<body>';
        echo '<p style="position:absolute; top:30%; left:50%; transform:translate(-50%); color:red;font-size:34px;">Заявка успешно доставлена!</p>';
    echo '</body>';
echo '</html>';
	}
?>











