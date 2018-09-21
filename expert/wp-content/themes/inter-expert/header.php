<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$phone = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'phone'");
	$echo_phone = mysqli_fetch_row($phone);
	$email = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'email'");
	$echo_email = mysqli_fetch_row($email);
	$logo = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'logo'");
	$echo_logo = mysqli_fetch_row($logo);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title><?php bloginfo(description ); ?></title>
	<?php wp_head(); ?>
    <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Разработка и регистрация Паспортов безопасности химической продукции">
    <meta name="keyword" content="Разработка и регистрация Паспортов безопасности химической продукции">
</head>
<body>
    <!--Header-->
    <header class="header main">
        <div class="header__navrow">
            <div class="header__navcontainer">
                <div class="header__logobox">
                    <div class="header__logoimgbox">
                        <a href="index"><?php echo ($echo_logo[0]); ?></a> 
                    </div>
                    <div class="header__logotextbox">
                        <p class="header__logotextup">
                            <?php bloginfo(name); ?>
                        </p>
                        <p class="header__logotextdown">
                            <?php bloginfo(description ); ?>
                    </div>
                </div>
                <div class="header__navbox">
                    <nav>
                        <?php wp_nav_menu (array('theme_location' => 'menu1')); ?>  
                    </nav>
                </div>
                <div class="header__contacts">
                    <div class="header__contacts_a">
                        <a href="tel: <?php echo ($echo_phone[0]); ?>"  class="header__phone"><?php echo ($echo_phone[0]); ?></a>
                        <a href="mailto: <?php echo ($echo_email[0]); ?>" class="header__email"><?php echo ($echo_email[0]); ?></a>
                    </div>
                    <div class="button__container">
                        <button class="c-hamburger c-hamburger--htx">
                            <span>toggle menu</span>
                        </button>
                    </div>    
                </div>
            </div>
        </div>
