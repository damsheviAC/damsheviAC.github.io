<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$head_slogan = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'head_slogan'");
	$echo_head_slogan = mysqli_fetch_row($head_slogan);
	$about_us = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'about_us'");
	$echo_about_us = mysqli_fetch_row($about_us);
	$about_us2 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'about_us2'");
	$about_us_photo = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'about_us_photo'");
	$echo_about_us_photo = mysqli_fetch_row($about_us_photo);
	$diploma_img = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'diploma_img'");
	$echo_diploma_img = mysqli_fetch_row($diploma_img);
	$diploma_txt = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'diploma_txt'");
	$echo_diploma_txt = mysqli_fetch_row($diploma_txt);
	
	$pluses_id = get_cat_ID('Плюсы');
?>

<?php
/*
Template Name: index
*/
?>
<?php get_header(); ?>
        <div id='main_button' class="container">
            <div class="header__titlebox">
                <h1>
                    <?php echo ($echo_head_slogan[0]); ?>
                </h1>
            </div>
            <button>Отправить запрос</button>
        </div>
    </header>
    <!--About-->
    <section class="about">
        <div class="container">
            <div class="about__row">
                <div class="about__textbox">
                    <h2>
                        О нас
                    </h2>
                    <img src="<?php bloginfo(template_url); ?>/img/molecule.png" alt="О нас" class="about__molecule">
                    <p class="about__article"><?php echo ($echo_about_us[0]); ?>
                    </p>
                </div>
                <div class="about__imgbox">
                    <?php echo ($echo_about_us_photo[0]); ?>
                </div>
            </div>
        </div>
    </section>
    <!--Pluses-->
    <section class="pluses">
        <div class="container">
            <div class="pluses__iconsrow">
				<?php
				query_posts('cat='.$pluses_id.''. '&order=ASC');
				if(have_posts()){ while(have_posts()){ the_post();
				?>			
                <div class="pluses__iconbox">
					<?php echo get_the_post_thumbnail(); ?>
                    <p class="pluses__popup"><?php echo get_post_meta($post->ID, 'popup', true); ?></p>
                    <p class="pluses__icontext">
                        <?php the_content(); ?>
                    </p>
                </div>
				<?php }}?>	
            </div>
        </div>
    </section>
    <!--Diploma-->
    <section class="diploma">
        <div class="container">
            <div class="diploma__row">
                <div class="diploma__imgbox">
                    <?php echo ($echo_diploma_img[0]); ?>
                </div>
                <div class="diploma__textbox">
                    <p class="diploma__article"><?php echo ($echo_diploma_txt[0]); ?></p>
                </div>
            </div>
        </div>
    </section>
	<?php get_template_part( 'zapros' ); ?>
<?php get_footer(); ?>
