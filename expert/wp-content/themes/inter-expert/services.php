<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$services = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_title = 'услуги' AND ping_status = 'open'");
	$i = 1;
	$services_time = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'services_time'");
	$echo_services_time = mysqli_fetch_row($services_time);
?>
	
<?php
/*
Template Name: services
*/
?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="services"><?php echo get_the_title(); ?></a>
        </div>
    </div>
    <!--Services-->
    <section class="documents">
        <div class="container">
            <h2>Наши услуги</h2>
            <h4>Наша компания оказывает следующие услуги:</h4>
        </div>    
            <div class="services__container">
				<?php while ($service = mysqli_fetch_array($services)) { ?>
						<div class="services__left">
							<div class="container">
								<span><?php echo $i; $i++; ?></span><p><?php echo($service['post_content']); ?></p>    
							</div>                    
						</div>	
				<?  }; ?>                                
            </div>            
        <div class="container">
            <p class="services-time"><?php echo ($echo_services_time[0]); ?></p> 
            <div id='services_button' class="button__containerrow"><button>Отправить заявку</button></div>           
        </div>
    </section>
	<?php get_template_part( 'zapros' ); ?>
 <?php get_footer(); ?>