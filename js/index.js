
$(function(){
	$(".subnav li").mouseenter(function(){
		$(this).find("div[class='sub_nav']").slideDown();
	});
	
	$(".subnav li").mouseleave(function(){
		$(this).find("div[class='sub_nav']").slideDown().stop();
		$(this).find("div[class='sub_nav']").slideUp();
	});
});



$(function() {
	var oWidth = $("#focus").width();
	//滑动按钮执行
	$(".btn span").mouseover(function() {
			var index = $(this).index();
			i = index;
			$(this).addClass("active").siblings().removeClass("active");
			$("#list").stop().animate({
				left: index * oWidth * (-1) + "px"
			});
		})
		//自动执行
	var i = 0;
	var timer;
	$("#list").html($("#list").html() + $("#list").html());

	function autoPlay() {
		var oLength = $(".btn span").length;
		timer = setInterval(function() {
			i++;
			if(i == (oLength + 1)) {
				i = 1;
				$("#list").css({
					"left": "0px"
				});
			}
			$("#list").stop().animate({
				left: i * oWidth * (-1) + "px"
			});
			$(".btn").find("span").eq(i % oLength).addClass("active").siblings().removeClass("active");
		}, 4000);
	}
	autoPlay();
	$("#focus").mouseover(function() {
		clearInterval(timer);
		
	})
	$("#focus").mouseout(function() {
		autoPlay();
		
	})

});

$(function() {
	var oWidth = $(".slides-container").width();
	//滑动按钮执行
	$(".pagination-yellow li").mouseover(function() {
			var index = $(this).index();
			i = index;
			$(this).addClass("cull").siblings().removeClass("cull");
			$(".slides-control").stop().animate({
				left: index * oWidth * (-1) + "px"
			});
		})
		//自动执行
	var i = 0;
	var timer;
	$(".slides-control").html($(".slides-control").html() + $(".slides-control").html());

	function autoPlay() {
		var oLength = $(".pagination-yellow li").length;
		timer = setInterval(function() {
			i++;
			if(i == (oLength + 1)) {
				i = 1;
				$(".slides-control").css({
					"left": "0px"
				});
			}
			$(".slides-control").stop().animate({
				left: i * oWidth * (-1) + "px"
			});
			$(".pagination-yellow").find("li").eq(i % oLength).addClass("cull").siblings().removeClass("cull");
		}, 4000);
	}
	autoPlay();
	$(".slides-container").mouseover(function() {
		clearInterval(timer);
		
	})
	$(".slides-container").mouseout(function() {
		autoPlay();
		
	})

});



$(function(){
		
		for(var i=0;i<$(".box-brands-point li").length;i++){
			$(".box-brands-point li")[i].index = i;  // 存储索引值i 
			$(".box-brands-point li")[i].onmouseover = function(){
				console.log(this.index);	// 索引值的使用this.index		
				for(var j=0;j<$(".box-brands-point li").length;j++){
					$(".box-brands-point li")[j].className = "";
					$(".box-brands div")[j].style.display = "none";
				}
				this.className = "box-point1";
				$(".box-brands div")[this.index].style.display = "block";
			}
		}
		
		
});
