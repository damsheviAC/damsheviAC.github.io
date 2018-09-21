<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$phone = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'phone'");
	$echo_phone = mysqli_fetch_row($phone);
	$email = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'email'");
	$echo_email = mysqli_fetch_row($email);
	$address = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'address'");
	$echo_address = mysqli_fetch_row($address);
	$time = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'time'");
	$echo_time = mysqli_fetch_row($time);

/*
Template Name: contacts
*/
?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="contacts"><?php echo get_the_title(); ?></a>
        </div>
    </div>
    <!--Services-->
    <section class="documents">
        <div class="container">
            <h2>Наши контакты</h2>
			<p>Телефон: <?php echo ($echo_phone[0]); ?></p>
			<p>E-mail: <?php echo ($echo_email[0]); ?></p>
			<p>Адрес: <?php echo ($echo_address[0]); ?></p>
			<p>Часы работы: <?php echo ($echo_time[0]); ?></p>
			<div class="location">
              <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac3151b965183414a0697b352ea87658a70e9153caf83b355391a2c718ee20051&amp;width=100%25&amp;height=390&amp;lang=ru_RU&amp;scroll=true"></script>  
            </div>
        </div>           
    </section>
	<?php //echo do_shortcode('[contact-form-7 id="38" title="Контактная форма 1"]'); ?>
<?php get_footer(); ?>