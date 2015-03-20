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

	// $('#menu-button').click(function(){$('#main,body').toggleClass('active');});
	$('#menu').mmenu();
	
	
	/* -- gold gift --*/

	$('.gold-gift').click(function(){
		$(this).toggleClass('active');
		$('.gold-wrap').toggleClass('active');
	});
});



