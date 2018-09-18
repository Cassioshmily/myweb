$(function(){
	//顶部半透明
	$(".tm").css("opacity","0.8");

	//鼠标经过图片变暗
	$("#pics .pic .box img").hover(function(){
		$(this).stop().animate({"opacity":0.6},300);
	},function(){
		$(this).stop().animate({"opacity":1},200);
	});

	//加入幻灯片特效
	jQuery(".slideTxtBox").slide({mainCell:".bd ul",autoPlay:true});
})
