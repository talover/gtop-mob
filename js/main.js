$(document).ready(function(){
	$('.logger-btn').click(function(e){
		e.preventDefault();
		$(this).parents('#logger').toggleClass('active').find('.logger-dropdown').slideToggle();
		e.stopPropagation();
	});

	$(document).click(function(){
		if($('.logger-dropdown').is(":visible")) {
			$('.logger-dropdown').slideUp();
			$('#logger').removeClass('active');
		}
	});

	$('#menu-button').click(function(){$('#main,body').toggleClass('active');});

	with_video();
	$('[data-toggle="tooltip"]').tooltip()
	
	/* -- gold gift --*/

	$('.gold-gift').click(function(){
		$(this).toggleClass('active');
		$('.gold-wrap').toggleClass('active');
	});

	$('.carousel').carousel()
});


$(window).resize(function(){
	with_video();
});

/* for video block */
function with_video(){
	$('.article .with-video').each(function(){
		var hv = $(this).find('.f-left img').height();

		$(this).find('li').css('height', ((parseInt(hv)/2)) + "px");
	});
}
