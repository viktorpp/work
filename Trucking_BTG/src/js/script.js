$(document).ready(function() {
	$('.header-bottom__button, .advantage__button').on("click", function() {
		$('.overlay').show();
	});

	$('.popup-close').on("click", function() {
		$('.overlay').hide();
	});
});

$(document).ready(function() {
	$('.header-block__button').on("click", function() {
		$('.overlay-call').show();
	});

	$('.popup-close').on("click", function() {
		$('.overlay-call').hide();
	});
});

$(document).ready(function() {
	$("#phone, #phone1, #phone2").mask("+7 (999) 999-99-99");
});

$(document).ready(function() {
	var link = $('.menu-burger');
	var link_active = $('.menu-burger_active');
	var menu = $('.header-menu');
	var nav_link = $('.header-menu a');

	link.click(function() {
		link.toggleClass('menu-burger_active');
		menu.toggleClass('header-menu_active');
	});
	nav_link.click(function() {
		link.toggleClass('menu-burger_active');
		menu.toggleClass('header-menu_active');
	});
});

$('.header-title-slider').slick({
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	responsive: [
	{
		breakpoint: 400,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		}
	}
	],
	prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
	nextArrow: '<div class="slider-arrow slider-arrow-right"></div>',
	asNavFor: '.header-text-slider'
});
$('.header-text-slider').slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,

	asNavFor: '.header-title-slider'
});
$('.advantage-slider').slick({
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<div class="slider-arrow advantage-slider-arrow slider-arrow-left"></div>',
	nextArrow: '<div class="slider-arrow advantage-slider-arrow slider-arrow-right"></div>',
	responsive: [
	{
		breakpoint: 567,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		}
	}
	]
});
$('.content-galary__img').slick({
	arrows: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	
	responsive: [
	{
		breakpoint: 567,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
	
});

/*

$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Сообщение успешно отправлено");
			$(".form__input").trigger("reset");
		});
		return false;
	});*/