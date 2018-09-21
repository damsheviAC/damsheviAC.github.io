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
	<footer>
        <div class="container">
            <div class="footer__upperrow">
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
                        </p>
                    </div>
                </div>
                <?php wp_nav_menu (array('theme_location' => 'menu2')); ?>
                <div class="header__contacts">
                    <a href="tel: <?php echo ($echo_phone[0]); ?>"  class="header__phone"><?php echo ($echo_phone[0]); ?></a>
                    <a href="mailto: <?php echo ($echo_email[0]); ?>" class="header__email"><?php echo ($echo_email[0]); ?></a>
                </div>
            </div>
            <div class="footer__lowerrow">
              <p>&copy <?php bloginfo(name); ?>, <?php echo date("Y"); ?></p>
              <p>Все права защищены</p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
