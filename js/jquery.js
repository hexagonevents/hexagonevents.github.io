$(document).ready(function(){

	$('#fullpage').fullpage({
		anchors: ['home', 'about', 'schedule', 'how-to-go','contact', 'press-release', 'esports', 'highlights', 'lucky-draw', 'emcee', 'merchandise', 'rachta-lin', 'tickets', 'ticket-guide' , 'faq', 'partners', 'partners2' , 'partners3' , 'partners4' , 'promotions', 'promotions2', 'promotions3', 'promotions4', 'topup-promo'],
		css3: true
	});
	
	$('.banner-top').parent().css('vertical-align', 'top');
	$('#blk-home').children('.fp-tableCell').css('vertical-align', 'top');
	
	if($(window).height() <= 680){
		$('.content').css('height', '300px');
	} else if($(window).height() <= 768) {
		$('.content').css('height', '400px');
	}
	
	$(".content").mCustomScrollbar({
		theme:"minimal"
	});

	$('#slider').nivoSlider({
		directionNav: false,
	});

	$('#countdown').timeTo({
		timeTo: new Date('Dec 19 2015 10:00:00'),
		displayDays:2
	});
});