<?php
/*
Template Name: of_feedback
Template Post Type: post, page, product
*/
?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="feedback">Отзывы</a>
        </div>
    </div>
    <section class="documents">
        <div class="container of-feedback">
			<?php if(have_posts()){ while(have_posts()){ the_post(); ?>
			<?php echo get_the_post_thumbnail(); ?>
			<?php $content = get_extended($post->post_content); ?>
			<?php	echo $content['extended']; ?>
			<?php }}?>
        </div>         
    </section>
 <?php get_footer(); ?>