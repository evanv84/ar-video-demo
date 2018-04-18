$(document).ready(function() {

	var video = document.getElementById('video');
	video.pause();

	$('.pause-btn').hide()
	
	$(document).on('click', '.play-btn', function(event) {
		event.preventDefault();
		video.play();
		$('.play-btn').hide(400);
		$('.pause-btn').show(400);
	});

	$(document).on('click', '.pause-btn', function(event) {
		event.preventDefault();
		video.pause();
		$('.play-btn').show(400);
		$('.pause-btn').hide(400);
	});

});