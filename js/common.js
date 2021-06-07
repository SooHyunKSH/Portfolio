$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        menu: '#menu',
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});