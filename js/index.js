$(function(){
	$(".my_btn").mouseenter(function(){
		$(this).stop().animate({right:-20},1000);
	});
	$(".my_btn").mouseleave(function(){
		$(this).stop().animate({right:10},1000);
	});
})