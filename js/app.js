$(document).ready(function() {

	var video = document.getElementById('video');
	video.pause();
	
	$(document).on('click', '.play-btn', function(event) {
		event.preventDefault();
		video.play();
	});

});