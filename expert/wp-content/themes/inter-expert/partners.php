<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$partners = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_title = 'услуги' AND ping_status = 'open'");
	$partner_id = get_cat_ID('Партнеры');
?>

	
<?php
/*
Template Name: partners
*/
?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="partners"><?php echo get_the_title(); ?></a>
        </div>
    </div>
    <!--Services-->
    <section class="documents pb90">
        <div class="container">
            <h2>Наши партнеры</h2>
            <div class="partners__container">
				<?php
				query_posts('cat='.$partner_id.'');
				if(have_posts()){ while(have_posts()){ the_post();
				?>
					<div class="slide">
						<div class="partner">
							<?php echo get_the_post_thumbnail(); ?>
							<?php the_content(); ?>
						</div>                   
					</div> 
				<?php }}?>	
            </div>
        </div>    
    </section>
 <?php get_footer(); ?>