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

    //slider
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

});