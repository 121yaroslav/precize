$(document).ready(function(){
	"use strict"
  	//idex_dots();
	submit_search_btn();
	search_btn();
	top_next_prev_size();
	dots_length();

});

$(window).resize(function(){
		search_btn();
		top_next_prev_size();
		dots_length();
	});

	function search_btn(){
		var size=$('.main-menu').find('.navbar').innerWidth();
		size=size-54;
		var check = true;
		$('.main-menu').find('form').find('button').stop().click(function(){
			if(check){
				$('.main-menu').find('.navbar-header').stop().animate({
					width : 0
				},400);
				$('.main-menu').find('form').find('input').stop().animate({
					width : size
				},400);
				check = false;
			} else {
				$('.main-menu').find('.navbar-header').stop().animate({
					width : ''
				},400);
				$('.main-menu').find('form').find('input').stop().animate({
					width : 0
				},400);
				check = true;
			}
		});
	}

	function submit_search_btn(){
		$('.main_menu_form').submit(function(event){
			if($('.main_menu_search').val()<=0) event.preventDefault();
			else return;
		});
	}

	// function idex_dots(){
	// 	$('.main-carousel').find('.owl-dot').each(function(index,element){
	// 		$(this).find('span').append($(this).index()+1);
	// 	});
	// 	$('.second-carousel').find('.owl-dot').each(function(index,element){
	// 		$(this).find('span').append($(this).index()+1);
	// 	});
	// }

	function top_next_prev_size(){
		var body=document.getElementsByTagName('body')[0];
		var size=(body.clientWidth-1117)/2;
		var prev_size=document.getElementsByClassName('top-slider')[0].getElementsByClassName('list_carousel')[0].getElementsByClassName('prev')[0];
		prev_size.style.width=size+'px';
		prev_size.style.left=-size+'px';
		var next_size=document.getElementsByClassName('top-slider')[0].getElementsByClassName('list_carousel')[0].getElementsByClassName('next')[0];
		next_size.style.width=size+'px';
		next_size.style.right=-size+'px';
	}

	function dots_length(){
		var win_size = $(window).width();
		var dot_length = $('#pager2').find('a').length;
		var result = win_size / dot_length;
		var body=document.getElementsByTagName('body')[0];
		var size=(body.clientWidth-1116)/2;
		result = (result * 100)/win_size;
		$('#pager2').css({
			width : win_size
			// left : -size
		});

		if(win_size>=1116){
			$('#pager2').css({
			left : -size
		});
		}else{
			$('#pager2').css({
			left : 0
			});
		}
		$('#pager2').find('a').css('width' , result+'%');
		
	}