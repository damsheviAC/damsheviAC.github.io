/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_app_less__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_app_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__less_app_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__script__);





/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

$(function() {
	/*********************************************************************/
	$.validator.addMethod('valname', function (value, element) {
		return this.optional(element) || /^[А-Яа-яЁёA-Za-z\s]{2,100}$/.test(value);
	}, 'Введите только буквы');

	$.validator.addMethod('valphone', function (value, element) {
		return this.optional(element) || /^[0-9]{2,20}$/.test(value);
	}, 'Введите только цифры');

	$.validator.addMethod("valemail", function (value, element) {
		return this.optional(element) || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
	}, "Введите корректный Email");

	$.extend($.validator.messages, {
		required: 'Обязательное поле',
		remote: 'Введите правильное значение',
		email: 'Введите корректный E-mail'
	});

	$('form').each(function () {
		$(this).validate({
			errorElement: 'label',
			rules: {
				'name': {required: true, minlength: 4, maxlength: 100, valname: true},
				'phone': {required: true, maxlength: 20, valphone: true},
				"email" : {required: true, email: true, valemail: true}
			},
			messages: {
				name: {
					required: 'Введите корректное имя',
					minlength: ''
				},
				phone: {
					required: 'Введите ваш телефон',
					minlength: ''
				}
			},
			/* Ajax отправка формы */
			submitHandler: function (form) {
				var data = {
					phone: $(form).find('input[name=phone]').val(),
					name: $(form).find('input[name=name]').val(),
					email: $(form).find('input[name=email]').val()
				};

				$(form).addClass('active')
					.find('input').attr('disabled', 'disabled')
					.find('button').attr('disabled', 'disabled');

				$.post(
					'../php/send.php',
					data,
					function (data) {
						if (data === 'success') {
							$('form.active .form-success').fadeIn();

							setTimeout(function () {
								$.fancybox.close();

								$('.form .active .form-success').fadeOut();

								$(form)
									.find('input').removeAttr('disabled').val('')
									.find('button').removeAttr('disabled');
							}, 2000);
						}
					}
				)
			}
		});
	});
	/*********************************************************************/
	var slBlock = $('#priemushestva_slider');
	if (slBlock.length) {
		var sl = slBlock.find('ul.slider');
		var projects = $('#priemushestva_slider_tab');
		var priemushestva = $('#priemushestva');

		sl.carouFredSel({
			responsive: true,
			auto: false,
			items: {
				visible: 1
			},
			scroll: {
				fx: "fade",
				pauseOnHover: true,
				onBefore: function (data) {
					var item = projects.find('.priemushestva_slider_tab_item[rel="' + $(data.items.visible[0]).attr('rel') + '"]');

					projects.find('.priemushestva_slider_tab_item').removeClass('active');
					item.addClass('active');

					/*priemushestva.css('background', 'url(' + item.find('.load-img').attr('src') + ') no-repeat');*/
				}
			},
			swipe: {
				onMouse: true,
				onTouch: true
			},
			prev: {
				button: '#priemushestva_slider_prev'
			},
			next: {
				button: '#priemushestva_slider_next'
			}
		});

		sl.trigger('updateSizes');

		$('#priemushestva_slider_tab .priemushestva_slider_tab_item').on('click', function () {
			if (sl.triggerHandler('isScrolling')) {
				return false;
			}

		/*	priemushestva.css('background', 'url(' + $(this).find('.load-img').attr('src') + ') no-repeat');*/

			sl.trigger('slideTo', ['[rel="' + $(this).attr('rel') + '"]']);
		});
	}
	/*********************************************************************/
	function projectSlider(project_slider) {
		if (project_slider.length) {
			project_slider.each(function () {
				var prev = project_slider.find('.prev'),
					next = project_slider.find('.next'),
					pagin = project_slider.find('.pagin'),
					sliderOurUl = project_slider.find('ul.slider_in'),
					widthPage = $(window).width(),
					visible;

				if (widthPage < 700)
					visible = 1;
				else if (widthPage < 1000 && widthPage > 700)
					visible = 2;
				else
					visible = 3;

				sliderOurUl.carouFredSel({
					responsive: true,
					auto: false,
					pagination: pagin,
					prev: prev,
					next: next,
					items: {
						visible: visible
					},
					scroll: {
						items: visible
					},
					swipe: {
						onTouch: true
					}
				});

				sliderOurUl.trigger('updateSizes');
			});
		}
	}
	/*********************************************************************/
	var primery_slider = $('#primery_slider');

	function primerySlider(primery_slider) {
		if (primery_slider.length) {
			var prev      = primery_slider.find('.prev'),
				next        = primery_slider.find('.next'),
				pagin       = primery_slider.find('.pagin'),
				sliderOurUl = primery_slider.find('ul.slider'),
				widthPage   = $(window).width(),
				visible,
				widthSlide = '';

			if(widthPage < 361){
				visible = 1;
				//widthSlide = 360;
			}
			else if(widthPage < 760 && widthPage > 361)
				visible = 2;
			else if(widthPage < 1150 && widthPage > 760)
				visible = 3;
			else if(widthPage < 1540 && widthPage > 1150)
				visible = 4;
			else
				visible = 5;

			sliderOurUl.carouFredSel({
				auto: false,
				pagination: pagin,
				prev: prev,
				next: next,
				//width: widthSlide,
				items: {
					visible: visible
				},
				scroll: {
					items: visible
				},
				swipe: {
					onTouch: true
				}
			});

			sliderOurUl.trigger('updateSizes');
		}
	}
	/*********************************************************************/
	$('.fancy-img').fancybox();
	/*********************************************************************/
	var our_projects = $('#our_projects');
	var our_projects_tab = our_projects.find('.our_projects_tab_item');
	var our_projects_tab_block = our_projects.find('.our_projects_tab_block_item');

	our_projects_tab.on('click', function(){
		our_projects_tab.removeClass('active');
		$(this).addClass('active');

		our_projects_tab_block.hide();

		var rel = $(this).attr('rel');
		var item = our_projects.find('.our_projects_tab_block_item[rel="'+rel+'"]');

		item.fadeIn(200, function () {
			$(window).on('resize init', function(){
				projectSlider(item.find('.our_project_slider_in'+rel));
			}).trigger('init');
		});
	});
	/*********************************************************************/
	$(window).on('resize init', function(){
		primerySlider(primery_slider);
		projectSlider($('.our_project_slider_in1'));
	}).trigger('init');
	/*********************************************************************/
	$('.header-menu li a').on('click', function(){
		$.scrollTo(this.hash, 800);

		if ($('.header-top-block-menu').hasClass('open')) {
			$('.header-top-block-menu').removeClass('open');
		}

		return false
	});
	/*********************************************************************/
	/*var project_slider_popup = $('.our_project_popup_r_img');

	 function projectSliderPopup(project_slider_popup) {
	 if (project_slider_popup.length) {
	 project_slider_popup.each(function () {
	 var prev = project_slider_popup.find('.prev'),
	 next = project_slider_popup.find('.next'),
	 pagin = project_slider_popup.find('.pagin'),
	 sliderOurUl = project_slider_popup.find('ul.slider_in_popup');

	 sliderOurUl.carouFredSel({
	 responsive: true,
	 auto: false,
	 pagination: pagin,
	 prev: prev,
	 next: next,
	 width: '100%',
	 items: {
	 visible: 1
	 },
	 scroll: {
	 items: 1
	 },
	 swipe: {
	 onTouch: true
	 }
	 });
				sliderOurUl.trigger('updateSizes');
			});
		}
	}*/
 
	$('.our_project_slider_in_item').on('click', function(){
		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				afterShow : function( instance, current ) {
					//projectSliderPopup(project_slider_popup);
				}
			}
		});
	});
	/*********************************************************************/
	$('[name=USER_AGREE]').change(function () {
		if ($(this).is(':checked')) {
			$(this).parents('form').find('[type=submit]').removeAttr('disabled');
		}
		else {
			$(this).parents('form').find('[type=submit]').attr('disabled', 'disabled');
		}
	});
	/*********************************************************************/
	$('.header-top-block-burger').on('click', function(){
		$('.header-top-block-menu').addClass('open');
	});
	$('.header-top-block-menu-close').on('click', function(){
		$('.header-top-block-menu').removeClass('open');
	});
	/*********************************************************************/
});

/***/ })
/******/ ]);