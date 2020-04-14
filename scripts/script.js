$(function(){
	$('.slider__inner, .news__slider-inner, .autoplay').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,
		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: true	
	});
	$('select').styler();

	$('.header__btn-menu').on('click', function() {
		$('.menu ul').slideToggle();
	});

});