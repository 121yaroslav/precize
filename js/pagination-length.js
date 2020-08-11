function dots_length(){
		var win_size = $(window).width();
		var dot_length = $('.main-slider ').find('.owl-carousel').find('.owl-pagination').find('.owl-page').length;
		var result = win_size / dot_length;
		var body=document.getElementsByTagName('body')[0];
		var size=(body.clientWidth-1117)/2;
		result = (result * 100)/win_size;
		$('.main-slider ').find('.owl-carousel').find('.owl-pagination').css({
			width : win_size,
			// left : -size
		});
		if(win_size>=1117){
			$('.main-slider').find('.owl-carousel').find('.owl-pagination').css({
			left : -size
		});
		}else{
			$('.main-slider ').find('.owl-carousel').find('.owl-pagination').css({
			left : 0
			});
		}
		$('.main-slider ').find('.owl-carousel').find('.owl-pagination').find('.owl-page').css({
			width : result+'%'
		});

	}