$(document).ready(function(){
    //Get full year
	$('#year').text(new Date().getFullYear());
    /* back to top */
	var toBack = $('#toTop');
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= 100){
			toBack.fadeIn();
		}else{
			toBack.fadeOut();
		}
	});
	toBack.on('click', function(){
		$('html, body').animate({scrollTop:0},1000)
    });
});