/**@Author: Eric Carestia, EC Computers LLC.
 */

function TextSlideUp() {
	var $active = $('#text_slide p.active');

	if ($active.length == 0)
		$active = $('#text_slide p:last');

	var $next = $active.next().length ? $active.next() : $('#text_slide p:first');

	$next.css({
		opacity : 0.0,
		marginTop : '50px'
	}).addClass('active').animate({
		opacity : 1.0,
		marginTop : '25px'
	}, 1000, function() {

		$active.removeClass('active last-active');
	});

	$active.addClass('last-active').animate({
		opacity : 0.0,
		marginTop : '50px'
	}, 1000);

}

$(function() {
	setInterval("TextSlideUp()", 8500);
});
