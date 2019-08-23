$(function(){
	$(document).scroll(function(){
		if($(document).scrollTop() > 1800){
			$('.server-content .mask').addClass('cur');
			var delayArr = [];
			$('.server-content .item').each(function(i){
				var delay = $('.server-content .item').eq(i).attr('data-delay');
				$('.server-content .item').eq(i).css({
					animation:'itemBig 1.5s ease '+delay+'s forwards'
				})
			})
		}
    })
})