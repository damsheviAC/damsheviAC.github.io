<?php
	require ('class.phpmailer.php');
	require ('class.smtp.php');

	$to = 'inter.expert.2004@gmail.com';
	
	$name = $_POST['organization'];
    $message = $_POST['message'];
	$text = "Название организации:".$name."<br>Отзыв: ".$message;
	
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

	$mail->AddAttachment($_FILES['logo']['tmp_name'], $_FILES['logo']['name']); 
	
	$mail->isHTML(true);                                 
	$mail->Subject = 'Отзыв';
	$mail->Body    = $text;
		
	if(!$mail->send()) {
	 echo '<p style="position:absolute; top:30%; left:50%; transform:translate(-50%); color:red;font-size:34px;">Ошибка!</p>';
	 echo 'Mailer Error: '.$mail->ErrorInfo;
	} else {
echo '<html>';
    echo '<head>';
        echo '<meta  http-equiv="refresh" content="3;http://inter-expert.h1n.ru/feedback/">';
    echo '<head>';
    echo '<body>';
        echo '<p style="position:absolute; top:30%; left:50%; transform:translate(-50%); color:red;font-size:34px;">Отзыв успешно доставлен!</p>';
    echo '</body>';
echo '</html>';
	}
?>