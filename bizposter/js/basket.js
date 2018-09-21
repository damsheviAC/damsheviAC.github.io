$(document).ready(function () {
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
	$('input[name=standart]').val(userOrderStandart);
	$('input[name=mini]').val(userOrderMini);
		
	var standart = $('input[name=standart]').val();
	var mini = $('input[name=mini]').val();
	var sum = Number(standart) + Number(mini);
	
	
	window.cart = {
      quantity: 0, //общее количество товаров
      quantityMini: 0,
      quantityStandart: 0,
      costMini: 0,
      costStandart: 0,
      weight: 0,
      cost: 0,
      height: 0,
      width: 0,
      depth: 8
    }
	
	

	
	function SaveCookie(){
	  var premail = $('#email').val();
	  var prphone = $('#phone').val();
	  var prname = $('#name').val();
	  var prstandart = $('input[name=standart]').val();
	  var prmini = $('input[name=mini]').val();
	  document.cookie = "userName="+prname+"";
	  document.cookie = "userEmail="+premail+"";
	  document.cookie = "userPhone="+prphone+"";
	  document.cookie = "userOrderStandart="+prstandart+"";
	  document.cookie = "userOrderMini="+prmini+"";
	}
	
	var userName = SetCookie("userName");
	var userEmail = SetCookie("userEmail");
	var userPhone = SetCookie("userPhone");
	$('#email').val(userEmail);
	$('#phone').val(userPhone);
	$('#name').val(userName);
	



	
	
  function GetParams(){
	  cart.width = Number(standart)*8 + Number(mini)*8;
	  if(standart!=0){
		cart.height = 110;	
	  }
	  if(standart==0 && mini!=0){
		cart.height = 75;
	  }
  }

  
  function GetCost(){ 
	  cart.quantityStandart = standart;
	  cart.quantityMini = mini;
	  cart.quantity = sum;
	  cart.weight = sum*0.5;
	  cart.cost = standart*7000 + mini*5000;
	  cart.costMini = 5000;
	  cart.costStandart = 7000;
  }

	function Calculate(){
		$('header .basket .count').text(sum+' шт.');
		//calculator
		var priceStandart = $('#calculator-standart').find('.price').attr('data-price');
		var saleStandart = $('#calculator-standart').find('.price').attr('data-sale');
		var totalPriceStandart = Number(priceStandart) * Number(standart);
		var totalSaleStandart = Number(saleStandart) * Number(standart);
		var priceMini = $('#calculator-mini').find('.price').attr('data-price');
		var saleMini = $('#calculator-mini').find('.price').attr('data-sale');
		var totalPriceMini = Number(priceMini) * Number(mini);
		var totalSaleMini = Number(saleMini) * Number(mini);
		var totalPrice = Number(totalPriceMini) + Number(totalPriceStandart);
		$('#calculator-standart').find('.count p').text(standart);
		$('#calculator-mini').find('.count p').text(mini);
		$('.calculator-footer').find('.footer-left p').text(sum+' товара в корзине');
		$('#calculator-standart').find('.new-price').text(totalPriceStandart+' р.');
		$('#calculator-standart').find('.sale').text(totalSaleStandart+' р.');
		$('.calculator-footer').find('.footer-right-bottom').text(totalPrice+' р.');
		$('#order .submit-total').find('.bold').text(totalPrice+' р.');
		$('#calculator-mini').find('.new-price').text(totalPriceMini+' р.');
		$('#calculator-mini').find('.sale').text(totalSaleMini+' р.');
		$('.calculator-footer').find('.footer-right-bottom').text(totalPrice+' р.');
		$('#order .submit-total').find('.bold').text(totalPrice+' р.');
	}

    function ShowSelect(){
    	if(userOrderStandart !=0 || userOrderMini !=0){
			$('.basket-block').show();
	    	$('.basket_null').hide();
			Calculate();
			GetCost();
			GetParams();
			$('header .button').css('display', 'none');
			$('header .basket').css('display', 'flex');
    	}		
	    if(userOrderStandart==0){
	    	$('#calculator-standart').css('display', 'none');
	    }else{
	        $('#calculator-standart').css('display', 'flex');
	    }
	    if(userOrderMini==0){
	    	$('#calculator-mini').css('display', 'none');
	    }else{
	        $('#calculator-mini').css('display', 'flex');
	    }
    }
    ShowSelect();

	/*basket standart+1*/
    $('#calculator-standart .plus1').on('click',function() {
		standart++;
		sum++;	
		$('input[name=standart]').val(standart);	
		Calculate();
		GetCost();
		GetParams();
	});
	
	/*basket mini+1*/
    $('#calculator-mini .plus1').on('click',function() {
		mini++;
		sum++;	
		$('input[name=mini]').val(mini);
		Calculate();
		GetCost();
		GetParams();		
	});
	
	
    /*basket standart-1*/
    $('#calculator-standart .minus1').on('click',function() {
		if(standart>0){
			standart--;
			sum--;
		}
		if(standart==0){
			$('#calculator-standart').css('display', 'none'); 
			if(mini==0){
				$('.basket-block').css('display', 'none');
				$('.basket_null').css('display', 'block');
			}		
		}
		$('input[name=standart]').val(standart);
		Calculate();
		GetCost();
		GetParams();		
	});
	
	
    /*basket mini-1*/
    $('#calculator-mini .minus1').on('click',function() {		
		if(mini>0){
			mini--;
			sum--;
		}
		if(mini==0){
			$('#calculator-mini').css('display', 'none'); 
			if(standart==0){
				$('.basket-block').css('display', 'none');
				$('.basket_null').css('display', 'block');
			}		
		}
		$('input[name=mini]').val(mini);
		Calculate();
		GetCost();
		GetParams();		
	});

    //reset all
	function ResetAll(){
		$('.basket-block').hide();
		$('.basket_null').show();
		$("#order input[name='standart']").val(0);
		$("#order input[name='mini']").val(0);
		standart=0;
		mini=0;
		sum=0;
		Calculate();
	}
	
	$('#basket .reset').on('click', function () {
		ResetAll();
		SaveCookie();
    });

    //reset this
    $('#calculator-standart .reset-this').on('click', function () {
		$('#calculator-standart').hide();
		$("#order input[name='standart']").val(0);
		standart=0;
		sum=mini;
		Calculate();
		GetParams();
		GetCost();
		if($("#order input[name='mini']").val()==0){
			ResetAll();			
        }
		SaveCookie();	
	});	
	
	$('#calculator-mini .reset-this').on('click', function () {
		$('#calculator-mini').hide();
		$("#order input[name='mini']").val(0);
		mini=0;
		sum=standart;
		Calculate();
		GetParams();
		GetCost();
		if($("#order input[name='standart']").val()==0){
			ResetAll();			
        } 
		SaveCookie();
	});	


    //Mask for telephone
    $(function(){
        $("#order input[name='phone']").mask("+7(999) 999-9999");
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




        //Popup basket
    $('header .button, footer .button').on('click', function () {
      $('#call-me').fadeIn();
    });
    $('footer .call-form').on('click', function () {
      $('#callback').fadeIn();
    });
    $('#callback .exit').on('click', function () {
      $('#callback').fadeOut();
    });
    $('#call-me .exit').on('click', function () {
      $('#call-me').fadeOut();
    });
    $('.callback p').on('click', function () {
      $('#call-me').fadeIn();
    });		

	
	
	
/*---------------------------------DELIVERY------------------------------------*/


function SubmitOrder(){
    var premail = $('#email').val();
    var prphone = $('#phone').val();
    var prname = $('#name').val();
    if(premail!='' && prphone!='' && prname!=''){
      $('.submit-container button').removeAttr('disabled');
      $('.submit-container button').css('background-color', '#5ebe79');
      $('.submit-container button').text('Подтвердить заказ');
    }
  }
    
  function SelectDelivery() {
    var prcity = $('#city').val();
    var prstreet = $('#street').val();
    var prhouse = $('#house').val();
    if(prcity!='' && prstreet!='' && prhouse!=''){
      $('#order .click-data').css('display', 'block');
    }    
  }
  function DisabledChange() {
    $('.minus1').css('pointer-events', 'none');
    $('.plus1').css('pointer-events', 'none');
    $('.reset').css('pointer-events', 'none');
    $('.reset-this').css('pointer-events', 'none');
	$('.calculator-size').attr('title', 'Для изменения заказа обновите страницу');
  }
  



  $('.click-data label').on('click', function(){
    DisabledChange();
	SaveCookie();
  });

  $('#phone').on('change', function(){ 
    if ($('#delivery_description').text()!=''){     
      var premail = $('#email').val();
      var prphone = $('#phone').val();
      var prname = $('#name').val();
      if(premail!='' && prname!=''){
        $('.submit-container button').removeAttr('disabled');
        $('.submit-container button').css('background-color', '#5ebe79');
        $('.submit-container button').text('Подтвердить заказ');
      }      
    }
  });
  $('#email').on('change', function(){
    if ($('#delivery_description').text()!=''){
      var premail = $('#email').val();
      var prphone = $('#phone').val();
      var prname = $('#name').val();
      if(prphone!='' && prname!=''){
        $('.submit-container button').removeAttr('disabled');
        $('.submit-container button').css('background-color', '#5ebe79');
        $('.submit-container button').text('Подтвердить заказ');
      }     
    }
  });
  $('#name').on('change', function(){
    if ($('#delivery_description').text()!=''){
      var premail = $('#email').val();
      var prphone = $('#phone').val();
      var prname = $('#name').val();
      if(premail!='' && prphone!='' && prname!=''){
        $('.submit-container button').removeAttr('disabled');
        $('.submit-container button').css('background-color', '#5ebe79');
        $('.submit-container button').text('Подтвердить заказ');
      }      
    }
  });

  $('#city').on('change', function(){
    SelectDelivery();
  });
  $('#street').on('change', function(){
    SelectDelivery();
  });
  $('#house').on('change', function(){
    SelectDelivery();
  });
  $('#index').on('change', function(){
    SelectDelivery();
  });  
 

  document.getElementById("delivery_description").addEventListener("DOMSubtreeModified", function() {
    var tags = $('#delivery_description').text();
    var tagList = tags.split(' руб');
    var tagList2 = tagList[0].split(',');
    var costDostavka = tagList2[tagList2.length - 1];
    var costBeforeText = $('.footer-right-bottom').text();
    var costBefore = parseInt(costBeforeText);
    var costAfter = Number(costBefore)+Number(costDostavka);
    $('.submit-total').find('.bold').text(costAfter+' р.');
    SubmitOrder();
  });


    ydwidget.ready(function(){
   ydwidget.initCartWidget({
        //получить указанный пользователем город
        'getCity': function () {
          var city = yd$('#city').val();
          if (city) {
            return {value: city};
          } else {
            return false;
          }
        },
        //id элемента-контейнера
        'el': 'ydwidget',
        //общее количество товаров в корзине
        'totalItemsQuantity': function () { return cart.quantity },
        //общий вес товаров в корзине
        'weight': function () { return cart.weight },
        //общая стоимость товаров в корзине
        'cost': function () { return cart.cost },
        //габариты и количество по каждому товару в корзине
    'itemsDimensions': function () {return [
          [cart.height, cart.width, cart.depth,1]
        ]},
    //объявленная ценность заказа. Влияет на расчет стоимости в предлагаемых вариантах доставки, для записи поля в заказ данное поле так же нужно передать в объекте order (поле order_assessed_value)
    'assessed_value': cart.cost,
    //Способы доставки. Влияют на предлагаемые в виджете варианты способов доставки.
       onlyDeliveryTypes: function(){return ['todoor','pickup','post'];},
        //обработка автоматически определенного города
        'setCity': function (city, region) { yd$('#city').val(region ? city + ', ' + region : city) },
        //обработка смены варианта доставки
        'onDeliveryChange': function (delivery) {
          //если выбран вариант доставки, выводим его описание и закрываем виджет, иначе произошел сброс варианта,
          //очищаем описание
    if (delivery) {
        yd$('#delivery_description').text(ydwidget.cartWidget.view.helper.getDeliveryDescription(delivery));
        if (ydwidget.cartWidget.selectedDelivery.type == "post") {
          yd$('#street').val(ydwidget.cartWidget.getAddress().street);
          yd$('#house').val(ydwidget.cartWidget.getAddress().house);
          yd$('#floor').val(ydwidget.cartWidget.getAddress().floor);
          ydwidget.cartWidget.close();
        } else {
          ydwidget.cartWidget.close();
        }
      } else {
        yd$('#delivery_description').text('');
         } 
    },
        //завершение загрузки корзинного виджета
        'onLoad': function () {
          //при клике на радиокнопку, если это не радиокнопка "Яндекс.Доставка", сбрасываем выбранную доставку
          //в виджете
          yd$(document).on('click', 'input:radio[name="delivery"]', function () {
            if (yd$(this).not('#yd_delivery')) {
              ydwidget.cartWidget.setDeliveryVariant(null);
            }
          });
          //добавляем в форму отсутствующие поля "Улица", "Дом", "Квартира", "Индекс"
          //var $streetField = yd$('<div><input type="text" id="street" placeholder="улица"></div>');
          //var $houseField = yd$('<div><input type="text" id="house" placeholder="дом"></div>');
          //var $floorField = yd$('<div><input type="text" id="floor" placeholder="квартира/офис"></div>');
          //var $indexField = yd$('<div><input type="text" id="index" placeholder="индекс"></div>');
          //yd$('#city').after($streetField, $houseField, $floorField, $indexField);
        },
        //снятие выбора с варианта доставки "Яндекс.Доставка" (настроенного в CMS)
        'unSelectYdVariant': function () { yd$('#yd_delivery').prop('checked', false) },
        //автодополнение
        'autocomplete': ['city', 'street', 'index'],
        'cityEl': '#city',
        'streetEl': '#street',
        'houseEl': '#house',
    'floor': '#floor',
        'indexEl': '#index',
        //создавать заказ в cookie для его последующего создания в Яндекс.Доставке только если выбрана доставка Яндекса
        'createOrderFlag': function () { return yd$('#yd_delivery').is(':checked') },
        //необходимые для создания заказа поля
        //возможно указывать и другие поля, см. объект Order в документации
        'order': {
          //имя, фамилия, телефон, улица, дом, индекс
          'recipient_first_name': function () { return yd$('#name').val() },
          //'recipient_last_name': function () { return yd$('#surname').val() },
          'recipient_email': function () { return yd$('#email').val() },
          'recipient_phone': function () { return yd$('#phone').val() },
          'deliverypoint_street': function () { return yd$('#street').val() },
          'deliverypoint_house': function () { return yd$('#house').val() },
          'deliverypoint_floor': function () { return yd$('#floor').val() },
          'deliverypoint_index': function () { return yd$('#index').val() },
      //объявленная ценность заказа
      'order_assessed_value': cart.cost,
          //товарные позиции в заказе
          //возможно указывать и другие поля, см. объект OrderItem в документации
          'order_items': function () {
            var items = [];
            items.push({
              'orderitem_name': 'Стандарт',
              'orderitem_quantity': cart.quantityStandart,
              'orderitem_cost': cart.costStandart
            });
            items.push({
              'orderitem_name': 'Мини',
              'orderitem_quantity': cart.quantityMini,
              'orderitem_cost': cart.costMini
            });
            return items;
          }
        },
        //id элемента для вывода ошибок валидации. Вместо него можно указать параметр onValidationEnd, для кастомизации
        //вывода ошибок
        'errorsEl': 'yd_errors',
        //запустить сабмит формы, когда валидация успешно прошла и заказ создан в cookie,
        //либо если createOrderFlag вернул false
        'runOrderCreation': function () { yd$('form#order').submit() }
      })
    })	
	

});





                    