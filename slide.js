$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").delay('300').fadeOut();
});

var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}

$(document).ready(function() {
	navFunc();
    $('#fullpage').fullpage({
    anchors: ['homePage', 'aboutPage', 'projectsPage', 'contactPage'],
    menu: '#myMenu'
});
});
