<!DOCTYPE html>
<html>
<head>
  <title>Заказ успешно оформлен!</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/basket.css">
  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>

<!-- Следующую строку нужно заменить кодом корзинного виджета из личного кабинета Яндекс.Доставки -->
<script src="https://delivery.yandex.ru/widget/loader?resource_id=51208&sid=38236&key=76c0ed031208b06d69d5c7bc39ffefcf"></script>

  <!-- Инициализация виджета -->
  <script type="text/javascript">
    ydwidget.ready(function(){
      ydwidget.initCartWidget({
        //завершение загрузки корзинного виджета
        'onLoad': function () {
          //подтверждаем заказ, и передаем любые данные со страницы успешного оформления, если нужно
          //в данном случае, номер заказа (чтобы номер заказа в CMS и в Яндекс.Доставке совпадал)
          //вызов метода confirmOrder подразумевает, что заказ был ранее записан в cookie
          //методом createOrder (прямым вызовом, или нажатием на элемент с атрибутом data-ydwidget-createorder)
          ydwidget.cartWidget.order.confirmOrder({'order_num': yd$('#order_num').text()})
            .done(function (data) {
              if (data.status == 'ok') {
                $('.order-alert').find('.thanks').text('Спасибо за заказ');
				$('.order-alert').find('.order-alert-text').text('Заказ успешно оформлен');
					document.cookie = "userName=";
					document.cookie = "userEmail=";
					document.cookie = "userPhone=";
					document.cookie = "userOrderStandart=0";
					document.cookie = "userOrderMini=0";
              } else {
                //при правильной интеграции, на этом этапе ошибки быть не должно, так как вся валидация
                //происходит на этапе вызова createOrder, и здесь в cookie уже валидные данные
				$('.order-alert').find('.thanks').text('Ошибка!');
				$('.order-alert').find('.order-alert-text').text('Очистите кэш браузера и повторите заказ заново');
              }
            });
        }
      })
    })
  </script>
</head>
<body>
  <div class="alert-container">
    <div class="order-alert">
      <p class="thanks"></p>
      <p class="order-alert-text"></p>
	  <a href="index.html">Вернуться на главную</a>
    </div>
  </div>
  <?php
     if(!empty($_POST['email']) and !empty($_POST['phone'])){
  		$name = $_POST['name'];
  		$email = $_POST['email'];
      $phone = $_POST['phone'];
      $standart = $_POST['standart'];
      $mini = $_POST['mini'];
      $message = "Имя:".$name."\nEmail: ".$email."\nТелефон: ".$phone."\nКоличество СТАНДАРТ: ".$standart.
      "\nКоличество МИНИ: ".$mini;
      $to = 'aiawww@mail.ru';
      $subject = 'Заказ';
      mail($to, $subject, $message);
   	}
  ?>
</body>
</html>
