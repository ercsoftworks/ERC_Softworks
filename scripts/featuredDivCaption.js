$(function(){
	$('#bottom_img).live('mouseover', function(){
		$(this).parent().find('.top_text').css('background','blue');
		});
		
		$('#bottom_img).live('mouseout', function(){
		$(this).parent().find('.top_text').css('background', 'red');
		});
	});


