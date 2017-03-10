$(function(){
	$(".subnav li").mouseenter(function(){
		$(this).find("div[class='sub_nav']").slideDown();
	});
	
	$(".subnav li").mouseleave(function(){
		$(this).find("div[class='sub_nav']").slideDown().stop();
		$(this).find("div[class='sub_nav']").slideUp();
	});
});
