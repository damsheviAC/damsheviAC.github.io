$(document).ready(function () {
//Slick slider
	$('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dotts: false
  });



//Scroll
  $('.button, .competition a').on('click', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
   	top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

//Mask for telephone
  $(function(){
    $("input[name='phone']").mask("+7(999) 999-9999");
  });

//Form send
    $(function() {
          $('form').submit(function(e) {
            var $form = $(this);
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
            }).done(function() {
            	$('#send_success').fadeIn();
              $('#send_success').animate({
                  top: '50%'
                }, 200, function() {
                  $('#send_success').animate({
                    marginTop: '-150px'
                  }, 200);
                }); 
              $('form').trigger("reset");
            }).fail(function() {
              $('#send_error').fadeIn();
                $('#send_error').animate({
                  top: '50%'
                }, 200, function() {
                  $('#send_error').animate({
                    marginTop: '-150px'
                  }, 200);
                });              
            });
            e.preventDefault();
          });
    });


//FadeOut POPUP
  $('.exit_send').on('click', function(){
    $(this).parent().fadeOut();
    $('.alert').css('top', '-300px').css('margin-top', '0');
  });

});
