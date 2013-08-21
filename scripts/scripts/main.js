$('#header ul.clearfix li').click(function() {
  $(this).addClass('current').siblings().removeClass('current');
});
