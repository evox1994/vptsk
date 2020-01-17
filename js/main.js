$(document).ready(function(){

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('.nav-drop').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.policy-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.policy-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

	$('.partners').slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	function idInput(){
		var i = 0;

		$('.b-input').each(function(){
			i++;
			$(this).find('label').attr('for','inp-'+i);
			if ( $(this).find('input').length ){
				$(this).find('input').attr('id','inp-'+i);
			} else {
				$(this).find('textarea').attr('id','inp-'+i);
			}
		});
	}
	idInput();

	$(document).on('click','.drop-list li',function(){
		if ( !$(this).hasClass('active') ){
			$('.drop-list li').removeClass('active');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.nav-drop',function(e){
		var drop = $(this).children('.nav-drop-wrap');
		if (drop.has(e.target).length === 0) {
			$(this).addClass('active');
		}
	});

	$(document).on('click','.nav-back',function(){
		$(this).parent('.nav-drop-wrap').parent('.nav-drop').removeClass('active');
	});

	function headerScroll(){
		var st = $(window).scrollTop();
		var gs = $('.header-main').outerHeight();
		var nh = $('.header-bot').outerHeight();
		
		if ( $(window).width() > 1024 ){
			if (st > gs){
				$('.header').addClass('scroll');
				$('.header').css('padding-bottom',nh);
			} else {
				$('.header').removeClass('scroll');
				$('.header').css('padding-bottom',0);
				$('.header-nav').find('.drop').css({
					'top': 163 - st,
					'height': $(window).height() - 163 + st
				});
			}
		} else {
			$('.header').removeClass('scroll');
			$('.header').css('padding-bottom',0);
		}
	}
	headerScroll();

	$(window).on('scroll',function(){
		headerScroll();
	});

	$(window).resize(function(){
		headerScroll();
	});

});