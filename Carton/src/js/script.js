$(document).ready(function() {
		$('.header-contacts__button, .contacts-block_button, .products-block__popup').on("click", function() {
			$('.overlay').show();
		});

		$('.popup-close').on("click", function() {
			$('.overlay').hide();
		});
});

$(document).ready(function() {
		var link = $('.menu-burger');
		var link_active = $('.menu-burger_active');
		var menu = $('.menu');
		var nav_link = $('.menu a');

		link.click(function() {
			link.toggleClass('menu-burger_active');
			menu.toggleClass('menu_active');
		});
		nav_link.click(function() {
			link.toggleClass('menu-burger_active');
			menu.toggleClass('menu_active');
		});
});

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
	});