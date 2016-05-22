$(document).ready(function(){

	$('#fullpage').fullpage({
		anchors: ['home', 'about', 'schedule', 'how-to-go','contact', 'sub-events', 'highlights',  'emcee', 'promotions', 'partners', 'partners2' , 'partners3' , 'partners4'],
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