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
      $('.header__nav').toggleClass('active');
    });




    //input radio
    $('.input__container').find('input').on('change', function () {
      $(this).next().toggleClass('chacked'); 
      $('.input__container input').not(this).next().removeClass('chacked');     
    });




    //slider partner
    $('.partners__container').slick({
      dots: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      arrows: false,
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
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }); 




    //click exit
    $('.exit').on('click', function(){
      $(this).parent().css('opacity', '0');
      $(this).parent().css('z-index', '-1');
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


});