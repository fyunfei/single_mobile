$(function(){
  $(".unCheck").click(function() {
    if($(this).hasClass('checked')){
      $(this).removeClass('checked');
    }else{
      $(this).addClass('checked');
    }
    var rows = $('.model04-body ul li').siblings();
    for(var i=0;i<rows.length; i++){
      if(rows[i].lastElementChild.className.indexOf("checked") !== -1){
	$('.model04-btn').removeClass('hidden');
	$('.model04-body-ul').removeClass('marginTop');
	return;
      }else{
	$('.model04-btn').addClass('hidden');
	$('.model04-body-ul').addClass('marginTop');
      }
    }
  });
});
