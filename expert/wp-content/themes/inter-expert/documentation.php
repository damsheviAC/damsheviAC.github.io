<?php
	// Create database connection
	$connect_db = mysqli_connect(localhost, damshev1, geo0926040, expert);
	$email = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'email'");
	$echo_email = mysqli_fetch_row($email);
	$yes1head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '141'");
	$echo_yes1head = mysqli_fetch_row($yes1head);
	$yes1 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-1' AND ping_status = 'open'");
	$echo_yes1 = mysqli_fetch_row($yes1);
	$yes2head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '289'");
	$echo_yes2head = mysqli_fetch_row($yes2head);
	$yes2 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-2' AND ping_status = 'open'");
	$echo_yes2 = mysqli_fetch_row($yes2);
	$yes3head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '148'");
	$echo_yes3head = mysqli_fetch_row($yes3head);
	$yes3 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-3' AND ping_status = 'open'");
	$echo_yes3 = mysqli_fetch_row($yes3);
	$yes4head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '143'");
	$echo_yes4head = mysqli_fetch_row($yes4head);
	$yes4 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-4' AND ping_status = 'open'");
	$echo_yes4 = mysqli_fetch_row($yes4);
	$yes5head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '155'");
	$echo_yes5head = mysqli_fetch_row($yes5head);
	$yes5 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-5' AND ping_status = 'open'");
	$echo_yes5 = mysqli_fetch_row($yes5);
	$yes5_1 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'yes-5-1' AND ping_status = 'open'");
	$echo_yes5_1 = mysqli_fetch_row($yes5_1);
	$no1head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '165'");
	$echo_no1head = mysqli_fetch_row($no1head);
	$no1 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-1' AND ping_status = 'open'");
	$echo_no1 = mysqli_fetch_row($no1);
	$no2head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '298'");
	$echo_no2head = mysqli_fetch_row($no2head);
	$no2 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-2' AND ping_status = 'open'");
	$echo_no2 = mysqli_fetch_row($no2);
	$no2_1head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '300'");
	$echo_no2_1head = mysqli_fetch_row($no2_1head);
	$no2_1 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-2-1' AND ping_status = 'open'");
	$echo_no2_1 = mysqli_fetch_row($no2_1);
	$no2_2head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '302'");
	$echo_no2_2head = mysqli_fetch_row($no2_2head);
	$no2_2 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-2-2' AND ping_status = 'open'");
	$echo_no2_2 = mysqli_fetch_row($no2_2);
	$no2_3head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '304'");
	$echo_no2_3head = mysqli_fetch_row($no2_3head);
	$no2_3 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-2-3' AND ping_status = 'open'");
	$echo_no2_3 = mysqli_fetch_row($no2_3);
	$no2_4head = mysqli_query($connect_db, "SELECT meta_value FROM wp_postmeta WHERE meta_key = 'wpcf-head-documents' AND post_id = '306'");
	$echo_no2_4head = mysqli_fetch_row($no2_4head);
	$no2_4 = mysqli_query($connect_db, "SELECT post_content FROM wp_posts WHERE post_name = 'no-2-4' AND ping_status = 'open'");
	$echo_no2_4 = mysqli_fetch_row($no2_4);
/*
Template Name: documentation
*/

?>

<?php get_header(); ?>
    </header>
    <div class="container">
        <div class="breadcrumb">
            <a href="index">Главная</a><p>&#8594</p><a href="documentation"><?php echo get_the_title(); ?></a>
        </div>
    </div>
    <!--Documents-->
    <section class="documents">
        <div class="container">
            <h2>Документация</h2>
            <h4>Для разработки и регистрации Паспорта безопасности необходимо следующее:</h4>
            <h5>Определите, нужно ли составлять на Вашу продукцию Паспорт безопасности</h5>
            <div class="documents__container">
                <div class="documents__left">
                    <div class="left__1">
                        <hr />
                        <h6><?php echo ($echo_yes1head[0]); ?></h6>
						<?php echo ($echo_yes1[0]); ?>
                    </div>
                    <div class="left__2">
                        <h5 style="margin-bottom: 16px;"><?php echo ($echo_yes2head[0]); ?></h5>
						<?php echo ($echo_yes2[0]); ?>
                    </div>
                    <div class="left__3">
                        <div class="left__3__header">
                            <div class="container__img">
                                <img src="<?php bloginfo(template_url); ?>/img/attention.png">
                            </div>
                            <h6><?php echo ($echo_yes3head[0]); ?></h6>
                        </div>
                        <p><?php echo ($echo_yes3[0]); ?></p>
                        <p>Также возможна подача заявки через электронную форму!</p>
                        <div id="documentation_button" class="button__containerrow">
                            <button>Отправить запрос</button> 
                        </div>
                    </div>
                    <div class="left__4">
                        <h5><?php echo ($echo_yes4head[0]); ?></h5>
						<?php echo ($echo_yes4[0]); ?>
                    </div>
                    <div class="left__5">
                        <h5><?php echo ($echo_yes5head[0]); ?></h5>
						<?php echo ($echo_yes5[0]); ?>
                        <h6><?php echo ($echo_yes5_1[0]); ?></h6>
                    </div>                    
                </div>
                <div class="documents__right">
                    <img class="top" src="<?php bloginfo(template_url); ?>/img/molecule_doc1.png">
                    <div class="right__1">
                        <hr />
                        <h6><?php echo ($echo_no1head[0]); ?></h6>
						<?php echo ($echo_no1[0]); ?>
                        <h6>Принадлежность продукции к тому или иному типу можно дополнительно определить при помощи классификаторов <a href="https://tnved.info/" target="_blank">ТН ВЭД</a> и <a href="http://www.okpd2.info/" target="_blank">ОКПД-2</a>.</h6>
                    </div>
                    <div class="right__2">
                        <h5>Сформируйте комплект документов в зависимости от требуемого типа продукции</h5>
                        <div class="input__container">
                            <div class="input__containerrow">
                                <div class="input__containercol">
                                    <input id="all-products" type="radio" name="products"><p>все виды продукции</p>
                                </div>
                                <div class="input__containercol">
                                    <input id="explosives" type="radio" name="products"><p>взрывчатые вещества</p>    
                                </div>
                                <div class="input__containercol">
                                    <input id="pesticides" type="radio" name="products"><p>пестициды, агрохимикаты</p>    
                                </div>                                                             
                            </div>
                            <div class="input__containerrow">
                                <div class="input__containercol">
                                    <input id="import" type="radio" name="products"><p>импортная продукция</p>    
                                </div>
                                <div class="input__containercol">
                                    <input id="clean-water" type="radio" name="products"><p>реагенты для очистки воды</p>    
                                </div>                                   
                            </div>
                        </div>
                    </div>
                    <div class="right__3">
                        <h6><?php echo ($echo_no2head[0]); ?></h6>
						<?php echo ($echo_no2[0]); ?>
                    </div> 
                    <div class="right__3_1">
                        <h6><?php echo ($echo_no2_1head[0]); ?></h6>
						<?php echo ($echo_no2_1[0]); ?>
                    </div>  
                    <div class="right__3_2">
                        <h6><?php echo ($echo_no2_2head[0]); ?></h6>
						<?php echo ($echo_no2_2[0]); ?>
                    </div>  
                    <div class="right__3_3">
                        <h6><?php echo ($echo_no2_3head[0]); ?></h6>
						<?php echo ($echo_no2_3[0]); ?>
                    </div>  
                    <div class="right__3_4">
                        <h6><?php echo ($echo_no2_4head[0]); ?></h6>
						<?php echo ($echo_no2_4[0]); ?>
                    </div> 
					<img class="bottom" src="<?php bloginfo(template_url); ?>/img/molecule_doc2.png">	
                </div>
            </div>            
        </div>
    </section>
	<?php get_template_part( 'el-zapros' ); ?>
 <?php get_footer(); ?>
