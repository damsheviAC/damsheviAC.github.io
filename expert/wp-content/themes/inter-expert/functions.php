<?php
show_admin_bar (false);
//подключаем стили к определенным страницам
function pages_scripts() {
    if ( is_page( contacts ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );        
        wp_enqueue_style ( 'contacts', get_template_directory_uri() . '/css/contacts.css', null );

    }

    if ( is_page( services ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );
        wp_enqueue_style ( 'services', get_template_directory_uri() . '/css/services.css', null );
    }

    if ( is_page( documentation ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );
    }  

    if ( is_page( success ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );
    }   

    if ( is_page( feedback ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );
        wp_enqueue_style ( 'feedback', get_template_directory_uri() . '/css/feedback.css', null );    
    }  
    if ( is_page( partners ) ) {
        //подключаем стили
        wp_enqueue_style ( 'documentation', get_template_directory_uri() . '/css/documentation.css', null );
        wp_enqueue_style ( 'partners', get_template_directory_uri() . '/css/partners.css', null );    
    }  
}
add_action( 'wp_enqueue_scripts', 'pages_scripts' );  


function index_scripts() {
    wp_enqueue_style( 'normalize', get_template_directory_uri() . '/css/normalize.css', null );    
    wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css', null );
    wp_enqueue_style( 'media.css', get_template_directory_uri() . '/css/media.css', null );
    wp_enqueue_style( 'slick', get_template_directory_uri() . '/slick/slick.css', null );
    wp_enqueue_style( 'slick-theme', get_template_directory_uri() . '/slick/slick-theme.css', null );    

    wp_enqueue_script( 'jquery-3.3.1', get_template_directory_uri() . '/js/jquery-3.3.1.min.js', null);
    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', null);
    wp_enqueue_script( 'slick', get_template_directory_uri() . '/slick/slick.min.js', null);
}

// правильный способ подключить стили и скрипты
add_action( 'wp_enqueue_scripts', 'index_scripts' );


register_nav_menu ('menu1', 'header');
register_nav_menu ('menu2', 'footer');

add_theme_support( 'post-thumbnails' ); // для всех типов постов
