$(document).ready(function(){
	$('#nav-icon').click(function(){
		if ($(this).attr('data-toggle') == "0") {
			$('#nav-list').show('slide', {'direction': 'left'}, 300);
			$(this).attr('data-toggle', "1");
		} else {
			$('#nav-list').hide('slide', {'direction': 'left'}, 300);
			$(this).attr('data-toggle', "0");
		}
	});
	
	$('#viewport').click(function(){
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
	});
	
	$('.nav-item').click(function(){
		if ($(this).attr('id') == "nav-item-about") {
			$('html, body').animate({'scrollTop': '500px'});
		} else if ($(this).attr('id') == "nav-item-program") {
			$('html, body').animate({'scrollTop': '1252px'});
		} else if ($(this).attr('id') == "nav-item-team") {
			$('html, body').animate({'scrollTop': '2950px'});
		} else if ($(this).attr('id') == "nav-item-mentor") {
			$('html, body').animate({'scrollTop': '3940px'});
		} 
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
	});
	
	$('#nav-logo').click(function(){
		$('html, body').animate({'scrollTop': '0px'});
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
	});
	
});