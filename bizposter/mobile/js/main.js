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

    $('header .c-hamburger').click(function() {
      $('header .nav-collapse').toggleClass('active');
    });




    //Slider block5
    $('#block5 .slider').slick({
      speed: 800,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    //popup block10
    $('#block10 .photo').on('click',function() {
      $(this).next('.photo-description').css('opacity', '1');
      $(this).next('.photo-description').css('z-index', '1000');

    });
    $('#block10 .exit').on('click',function() {
      $(this).parent().parent().parent().css('opacity', '0');
      $(this).parent().parent().parent().css('z-index', '-1');
    });

    //Slider block12
    $('#block12 .slider').slick({
      dots: true
    });



	
	
	function SetCookie(userCookie){
	  var results = document.cookie.match ( '(^|;) ?' + userCookie + '=([^;]*)(;|$)' );
	  if (results){
		return (unescape(results[2]));  
	  }else{
		return null; 
	  }
	}
	var userOrderStandart = SetCookie("userOrderStandart");
	var userOrderMini = SetCookie("userOrderMini");	
	var standart = $('header .basket').attr('data-standart');
    var mini = $('header .basket').attr('data-mini');
	if(userOrderStandart && userOrderMini){
		standart = userOrderStandart;
		mini = userOrderMini;
	}
	var sum = Number(standart) + Number(mini);
	$('header .basket').attr('data-standart', standart);
	$('header .basket').attr('data-mini', mini);		

		


	if(standart!=0 || mini!=0){
		$('header .button').css('display', 'none');
		$('header .basket').css('display', 'flex');
		$('header .basket .count').text(sum+' шт.');
	}
	if(standart!=0){
      $('#block7 .bs-standart .block-size-basket').css('display', 'flex');
      $('#block7 .bs-standart .more').css('display', 'none');
      $('#block7 .bs-standart .button-count').text(standart+' шт.');		
	}
	if(mini!=0){
      $('#block7 .bs-mini .block-size-basket').css('display', 'flex');
      $('#block7 .bs-mini .more').css('display', 'none');
      $('#block7 .bs-mini .button-count').text(mini+' шт.');		
	}
	
	
	
 
    //Button BUY
    function SaveSelect(){
      document.cookie = "userOrderStandart="+standart+"";
      document.cookie = "userOrderMini="+mini+"";
    }

    /*click button standart*/
    $('#block7 .bs-standart .more .button').on('click',function() {
      $('header .button').css('display', 'none');
      $('header .basket').css('display', 'flex');
      parseInt(standart);
      standart++;
	  sum++
      $('header .basket').attr('data-standart', standart);
      $('header .basket .count').text(sum+' шт.');
      $('#block7 .bs-standart .block-size-basket').css('display', 'flex');
      $('#block7 .bs-standart .more').css('display', 'none');
      $('#block7 .bs-standart .button-count').text(standart+' шт.');
      SaveSelect();
    });


    /*click button mini*/
    $('#block7 .bs-mini .more .button').on('click',function() {
      $('header .button').css('display', 'none');
      $('header .basket').css('display', 'flex');   
      parseInt(mini);
      mini++;
	  sum++
      $('header .basket').attr('data-mini', mini);
      $('header .basket .count').text(sum+' шт.');
      $('#block7 .bs-mini .block-size-basket').css('display', 'flex');
      $('#block7 .bs-mini .more').css('display', 'none');
      $('#block7 .bs-mini .button-count').text(mini+' шт.');
      SaveSelect();
    });




    /*click button standart+1*/
    $('#block7 .bs-standart .count').on('click',function() {
      parseInt(standart);
      standart++;
	  sum++;
      $('header .basket').attr('data-standart', standart);
      $('header .basket .count').text(sum+' шт.');
      $('#block7 .bs-standart .button-count').text(standart+' шт.');
      $('#block7 .bs-mini .button-count').text(mini+' шт.');
      SaveSelect();
    });




    /*click button mini+1*/
    $('#block7 .bs-mini .count').on('click',function() {
      parseInt(mini);
      mini++;
	  sum++;
      $('header .basket').attr('data-mini', mini);
      $('header .basket .count').text(sum+' шт.');
      $('#block7 .bs-mini .button-count').text(mini+' шт.');
      $('#block7 .bs-standart .button-count').text(standart+' шт.');
      SaveSelect();
    });

    $('header .basket, .href, #block11 .button, #block14 .button').on('click', function(){
      SaveSelect();
    });


	function SelectStandart(){
		if (standart==0 && mini==0){
			standart=1;
			SaveSelect();
		}
	}

    //Popup basket
    $('header .button, footer .button').on('click', function () {
      SelectStandart();
    });
    $('footer .call-form').on('click', function () {
      SelectStandart();
    });
    $('#block3 .button, #block5 .button').on('click', function () {
      SelectStandart();
    });
	$('#block11 .button, #block14 .button').on('click', function () {
      SelectStandart();
    });
	
	
    $('.callback p').on('click', function () {
      $('#call-me').fadeIn();
    });
	$('#callback .exit').on('click', function () {
      $('#callback').fadeOut();
    });
    $('#call-me .exit').on('click', function () {
      $('#call-me').fadeOut();
    });










    //Send Form CALLBACK
    $(function() {
          $('#callback form').submit(function(e) {
            var $form = $(this);
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
            }).done(function() {
              $("#callback form").trigger("reset");
              $('#callback-success').fadeIn();
              $("#callback").fadeOut();
            }).fail(function() {
              $('#callback-error').fadeIn();
            });
            e.preventDefault();
          });
        });

        //Send Form CALL-me
        $(function() {
              $('#call-me form').submit(function(e) {
                var $form = $(this);
                $.ajax({
                  type: $form.attr('method'),
                  url: $form.attr('action'),
                  data: $form.serialize()
                }).done(function() {
                  $("#call-me form").trigger("reset");
                  $('#callback-success').fadeIn();
                  $("#call-me").fadeOut();
                }).fail(function() {
                  $('#callback-error').fadeIn();
                });
                //отмена действия по умолчанию для кнопки submit
                e.preventDefault();
              });
            });



        //Scroll
        $('.nav-item-link, .logo, #block1 .button').on('click', function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top-100;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);

        });





        $('.popup .exit').on('click', function(){
          $(this).parent().css('opacity', '0');
          $(this).parent().css('z-index', '-1');
        });


});
