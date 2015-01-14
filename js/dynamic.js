function slider() {
	$('.slider .temp > div').each(function() {
		$(this).css({
			'background': 'url("'+$(this).children('img').attr('src')+'") no-repeat center top'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($(window).width());
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 1000,
		slideEasing: 'easeInOutCubic',
		play: 10000,
		pause: 2500
	});
}
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
});
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.services').length > 0 ) {
		var lines = Math.ceil(($('.services ul li').size()-1)/3);
		for ( var i = 1; i <= lines; i++ ) {
			var max = 0;
			for ( var j = 1; j <= 3; j++ ) {
				var h = $('.services ul li:nth-child('+eval((i-1)*3+j)+')').height(); 
				max = h > max ? h : max;
			}
			for ( var j = 1; j <= 3; j++ ) {
				$('.services ul li:nth-child('+eval((i-1)*3+j)+')').height(max); 
			}
		}
	}
	if ( $('.benefits').length > 0 ) {
		$('.jcarousel').jcarousel({
			scroll: 1,
			animation: 1000,
			easing: 'easeInOutCubic',
			wrap: 'circular'
		});
		$('.benefits .nav ul li a').bind('click', function() {
			$(this).parents('.benefits').find('.tabs > div:nth-child('+$(this).attr('href')+')').show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	}
	if ( $('.preinfo').length > 0 ) {
		$('.preinfo > ul li a').bind('click', function() {
			$(this).parents('.preinfo').children('div').children('div:nth-child('+$(this).attr('href')+')').show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	}
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('[data-modal]').bind('click', function() {
		$('.fade').stop(true,true).fadeIn(500);
		$('.modal').stop(true,true).fadeOut(500);
		$('.modal[data-target="'+$(this).attr('data-modal')+'"]').css({
			'margin-top': -$('.modal[data-target="'+$(this).attr('data-modal')+'"]').outerHeight()/2+'px'
		}).stop(true,true).fadeIn(500);
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.modal, .fade').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
	if ( $('select').length > 0 ) {
		$('select').selectbox();
	}
	if ( $('.zoom').length > 0 ) {
		$('.zoom').fancybox();
	}
	$('.content table td').each(function() {
		if ( $(this).attr('rowspan') > 1 ) {
			$(this).css({
				'vertical-align': 'middle'
			});
		}
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});