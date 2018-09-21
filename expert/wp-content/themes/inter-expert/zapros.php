<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$services = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_title = 'услуги' AND ping_status = 'open'");
?>
    <div id="zapros">
        <p>Оставьте заявку и мы обязательно свяжемся с Вами</p>
        <p class="exit"><span>+</span></p>
        <form action="<?php echo get_template_directory_uri(); ?>/send-zapros.php" method="post">
            <input type="text" name="name" placeholder="Введите Ваше Имя*" required>
            <input type="tel" name="phone" placeholder="Введите Ваш номер телефона*" required>
            <input type="email" name="email" placeholder="Введите Ваш email*" required>
            <select name="theme">
                <option disabled selected>Выберите тему запроса</option>
				<?php while ($service = mysqli_fetch_array($services)) { ?>
					<option><?php echo($service['post_content']); ?></option>    
				<?  }; ?> 
            </select>
            <textarea name="message" placeholder="Введите Ваше сообщение"></textarea>
            <button type="submit">Отправить</button>
        </form>
    </div>  