<?php
	$of_feedback_id = get_cat_ID('Отзывы официальные');
	$feedback_id = get_cat_ID('Отзыв');
?>

<?php
/*
Template Name: feedback
*/
?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="feedback"><?php echo get_the_title(); ?></a>
        </div>
    </div>
    <!--Services-->
    <section class="documents">
        <div class="container">
            <h2>Отзывы наших клиентов</h2>
            <h4>Нашей компании доверяют следующие организации:</h4>
            <div class="container_feedback_official">
				<?php
				query_posts('cat='.$of_feedback_id.'');
				if(have_posts()){ while(have_posts()){ the_post();
				?>
                <div class="slide">
                    <div class="slide-img">
                        <?php echo get_the_post_thumbnail(); ?>
                    </div>
                    <div class="slide-text">
                        <h6><?php echo get_post_meta($post->ID, 'Название организации для отзыва', true); ?></h6>
                        <?php the_content('Подробнее'); ?>
                    </div>
                </div>
				<?php }}?>
            </div>
            <div class="container_feedback">
				<?php
				query_posts('cat='.$feedback_id.'');
				if(have_posts()){ while(have_posts()){ the_post();
				?>
                <div class="slide_container">
                    <div class="slide">
                        <div class="slide-img">
                            <?php echo get_the_post_thumbnail(); ?>
                        </div>
                        <div class="slide-text">
                            <div class="slide-text-top">
                                <h6><?php echo get_post_meta($post->ID, 'Название организации для отзыва', true); ?></h6>
                                <?php the_content('Подробнее'); ?>    
                            </div>
                        </div>                    
                    </div>                                                                                
                </div>  
				<?php }}?>
            </div>
            <div id='feedback_button' class="button__containerrow">
                <button>Написать отзыв</button>                
            </div>
        </div>    
    </section>
    <div id="otzyv">
        <p>Оставьте свой отзыв</p>
        <p class="exit"><span>+</span></p>
        <form action="<?php echo get_template_directory_uri(); ?>/send-otzyv.php" method="post" enctype="multipart/form-data">
            <input type="text" name="organization" placeholder="Введите название организации*" required>
            <label for="file-logo">
                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
            </label>
            <input id="file-logo" type="file" name="logo">
            <textarea name="message" placeholder="Введите текст" required></textarea>
            <button type='submit'>Отправить</button>
        </form>
    </div> 
 <?php get_footer(); ?>