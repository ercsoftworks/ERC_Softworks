/** * @author Eric Carestia */$(document).ready(function() {	/**	 * This simple script will animate the .feature_image class of images used within the	 * three content buckets on the main page.	 *	 * 200 ms duration mouseover and mouseout timers	 */	$('.bottom_img1').mouseover(function() {		$(this).parent().find('.text_box').children('.top_text1').animate({			opacity : '1'					}, 200)	});	$('.bottom_img1').mouseout(function() {		$(this).parent().find('.text_box').children('.top_text1').animate({						opacity : '0'		}, 200)	});	$('.bottom_img2').mouseover(function() {		$(this).parent().find('.text_box').children('.top_text2').animate({			opacity : '1'		}, 200)	});	$('.bottom_img2').mouseout(function() {		$(this).parent().find('.text_box').children('.top_text2').animate({						opacity : '0'		}, 200)	});			$('.bottom_img3').mouseover(function() {		$(this).parent().find('.text_box').children('.top_text3').animate({			opacity : '1'		}, 200)	});	$('.bottom_img3').mouseout(function() {		$(this).parent().find('text_box').children('.top_text3').animate({						opacity : '0'		}, 200)	});	});