/**
 * @author Eric Carestia
 * Copyright EC Computers, LLC T/A Eric Carestia
 * August 2012
 */

$(document).ready(function() {

	/**
	 * This simple script will animate the .feature_image class of images used within the
	 * three content buckets on the main page.
	 *
	 * 200 ms duration mouseover and mouseout timers
	 */
	$(".feature_image").mouseover(function() {
		$(this).animate({
			marginTop : '10px'
		}, 200)

		$(this).animate({
			opacity : '1'
		}, 200);

	});

	$(".feature_image").mouseout(function() {
		$(this).animate({
			marginTop : '17px'
		}, 200)

		$(this).animate({
			opacity : '0.7'
		}, 75);

	});

});
