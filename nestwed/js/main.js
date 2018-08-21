$(document).ready(function () {
  //hamburger
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

    $('.nav .c-hamburger').click(function() {
      $('.nav .nav-collapse').toggleClass('active');
    });






    //Slider block4
    $('#block4 .slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      ]
    });



    //Slider block8
    $('#block8 .slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      ]
    });

      //comment
      $('#block7 .question').on('click', function () {
        $(this).next().toggleClass("active");
      });


      //Scroll
      $('.nav-item-link').on('click', function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
          //забираем идентификатор бока с атрибута href
          var id  = $(this).attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;
          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1500);

      });
});
