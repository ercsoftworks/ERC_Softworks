/** * @author Eric Carestia */

var $i1 = '.bottom_img1';
var $i2 = '.bottom_img2';
var $i3 = '.bottom_img3';

$(document).ready(function() {

    $('.first_main_col').mouseleave(function() {

        $(this).children('.text_box').children('.top_text1').animate({
            opacity : '1'
        }, 200)

        $(this).children('.text_box').children('.top_text2').animate({
            opacity : '0'
        }, 200)

        $(this).children('.text_box').children('.top_text3').animate({
            opacity : '0'
        }, 200)
    });

    $('.bottom_img3').mouseover(function() {
 		
        $(this).parent().find('.text_box').children('.top_text2').animate({
            opacity : '0'
        }, 200)
        $(this).parent().find('.text_box').children('.top_text1').animate({
            opacity : '0'
        }, 200)
        $(this).parent().find('.text_box').children('.top_text3').animate({
            opacity : '1'
        }, 200)
        
		

    });
    $('.bottom_img3').mouseout(function() {
        $(this).parent().find('.text_box').children('.top_text3').animate({
            opacity : '0'
        }, 200)
    });

    $('.bottom_img2').mouseover(function() {
        $(this).parent().find('.text_box').children('.top_text1').animate({
            opacity : '0'
        }, 100)
        $(this).parent().find('.text_box').children('.top_text3').animate({
            opacity : '0'
        }, 100)
        $(this).parent().find('.text_box').children('.top_text2').animate({
            opacity : '1'
        }, 200)

    });

    $('.bottom_img2').mouseout(function() {
        $(this).parent().find('.text_box').children('.top_text2').animate({
            opacity : '0'
        }, 200)
    });

    $('.bottom_img1').mouseover(function() {
        $(this).parent().find('.text_box').children('.top_text1').animate({
            opacity : '1'
        }, 200)
    });
    $('.bottom_img1').mouseout(function() {
        $(this).parent().find('.text_box').children('.top_text1').animate({
            opacity : '0'
        }, 200)
    });

});

