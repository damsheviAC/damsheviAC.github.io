$(document).ready(function () {
    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

    $('.c-hamburger').click(function() {
      $('#menu-header').toggleClass('active');
    });




    //input radio
    $('.input__container').find('input').on('change', function () {
      $(this).next().toggleClass('chacked'); 
      $('.input__container input').not(this).next().removeClass('chacked');
      var id = $(this).attr('id');
      switch(id) {
        case 'all-products': 
          $('.right__3').fadeIn();
          $('.right__3_1').fadeOut();
          $('.right__3_2').fadeOut();
          $('.right__3_3').fadeOut();
          $('.right__3_4').fadeOut();
        break;

        case 'explosives': 
          $('.right__3').fadeOut();
          $('.right__3_1').fadeIn();
          $('.right__3_2').fadeOut();
          $('.right__3_3').fadeOut();
          $('.right__3_4').fadeOut();             
        break;

        case 'pesticides': 
          $('.right__3').fadeOut();
          $('.right__3_1').fadeOut();
          $('.right__3_2').fadeIn();
          $('.right__3_3').fadeOut();
          $('.right__3_4').fadeOut();             
        break;

        case 'import': 
          $('.right__3').fadeOut();
          $('.right__3_1').fadeOut();
          $('.right__3_2').fadeOut();
          $('.right__3_3').fadeIn();
          $('.right__3_4').fadeOut();             
        break;                 

        case 'clean-water': 
          $('.right__3').fadeOut();
          $('.right__3_1').fadeOut();
          $('.right__3_2').fadeOut();
          $('.right__3_3').fadeOut();
          $('.right__3_4').fadeIn();             
        break;  
      }
    
    });






    //slider partner
    $('.partners__container').slick({
      dots: true,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      ]
    });




    //slider feedback official
    $('.container_feedback_official').slick({
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      ]
    });   







    //slider feedback
    $('.container_feedback').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }); 




    //click exit
    $('.exit').on('click', function(){
      $(this).parent().css('opacity', '0');
      $(this).parent().css('z-index', '-1');
    });

    $('.pluses__popup').find('.ex').on('click', function(){
      $(this).parent().removeClass('active');
    });




    $('#main_button button, #services_button button').on('click', function(){
      $('#zapros').css('opacity', '1');
      $('#zapros').css('z-index', '2');
    });

    $('#feedback_button button').on('click', function(){
      $('#otzyv').css('opacity', '1');
      $('#otzyv').css('z-index', '2');
    });

    $('#documentation_button button').on('click', function(){
      $('#el-zapros').css('opacity', '1');
      $('#el-zapros').css('z-index', '2');
    });

/*    $('.pluses__iconbox img').on('click', function(){
      $(this).siblings('.pluses__popup').addClass('active');
    });
*/	




        //Send Form zapros
      $(function() {
              $('#zapros form').submit(function(e) {
                var $form = $(this);
                $.ajax({
                  type: $form.attr('method'),
                  url: $form.attr('action'),
                  data: $form.serialize()
                }).done(function() {
                  $("#zapros form").trigger("reset");
                  $('#zapros').css('opacity', '0');
                  $('#zapros').css('z-index', '-1');
                  alert('Заявка успешно отправлена');

                }).fail(function() {
                  alert('Ошибка');
                });
                //отмена действия по умолчанию для кнопки submit
                e.preventDefault();
              });
            });







                //Send Form zapros
 /*     $(function() {
              $('#el-zapros form').submit(function(e) {
                var $form = $(this);
                $.ajax({
                  type: $form.attr('method'),
                  url: $form.attr('action'),
                  data: $form.serialize()
                }).done(function() {
                  $("#el-zapros form").trigger("reset");
                  $('#el-zapros').css('opacity', '0');
                  $('#el-zapros').css('z-index', '-1');
                  alert('Заявка успешно оформлена');
                }).fail(function() {
                  alert('Ошибка');
                });
                //отмена действия по умолчанию для кнопки submit
                e.preventDefault();
              });
            });
		
*/


  /*    $(function() {
              $('#otzyv form').submit(function(e) {
                var $form = $(this);
                $.ajax({
                  type: $form.attr('method'),
                  url: $form.attr('action'),
                  data: $form.serialize()
                }).done(function() {
                  $("#otzyv form").trigger("reset");
                  $('#otzyv').css('opacity', '0');
                  $('#otzyv').css('z-index', '-1');
                  alert('Отзыв успешно отправлен');
                }).fail(function() {
                  alert('Ошибка');
                });
                //отмена действия по умолчанию для кнопки submit
                e.preventDefault();
              });
            });
*/

    $('.image-upload input').on('change', function(){
      var link = $(this).val();
      $(this).prev().find('p').text(link);
    });
	
	$('#otzyv input').on('change', function(){
      var link = $(this).val();
      $(this).prev().find('p').text(link);
    });

});