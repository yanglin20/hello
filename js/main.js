
$(function(){
	//轮播
		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
	 });
	 
	 
	 $(".school>ul").find("li").each(function(index){
	 	$(this).hover(function(){
	 		$(this).addClass("on").siblings().removeClass("on");
	 		$(".h720").hide().eq(index).show();
	 	});
	 });

	 //加载更多
	var flag=1;
	$(".school .click_more").click(function(){
		if(flag==1){
			$(this).text("点击收起更多");
			$(".school .add").show();
			flag=2;
		}else if(flag==2){
			$(this).text("点击加载更多");
			$(".school .add").hide();
			flag=1;
		}
	});

	//优化留学方案
	$('.plan .list').css("display","none");
	var flag=1;
	$("#pulldown").click(function(){
		if(flag==1){
			$(this).css("transform","rotate(180deg)");
			$('.plan .list').css("display","block");
			flag=2;
		}else if(flag==2){
			$(this).css("transform","rotate(0deg)");
			$('.plan .list').css("display","none");
			flag=1;
		}
	});	
	
	//文字滚动
	function autoPlay(){
		$("#headline ul li:first-child").animate({
			"marginTop":"-0.3rem"},1500,function(){
				$(this).css("marginTop",0).appendTo($("#headline ul"))
			});
	}
   	var timer = setInterval(autoPlay, 1500);
   $("#headline div p").hover(function() {
       clearInterval(timer);
   }, function() {
       timer = setInterval(autoPlay, 1500);
   });
   
   //侧边栏
	var flag=1;
	$("#aside").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn2.png");
			$("aside").css("right","0");
			$("header,article").css("transform","translateX(-2.5rem)");
			flag=2;
		}else if(flag==2){
			$(this).attr("src","images/ico_btn2_hov.png");
			$("aside ").css("right","-2.55rem");
			$("header,article").css("transform","translateX(0)");
			flag=1;
		}
	});
	
//	底部
$("footer ul").find("li").each(function(index){
	 	$(this).hover(function(){
	 		$(this).find("img").attr("src","images/ico-b-nav-"+(index+1)+"-on.png");
	 		$(this).find("p a").css("color","red");
	 	},function(){
	 		$(this).find("img").attr("src","images/ico-b-nav-"+(index+1)+".png");
	 		$(this).find("p a").css("color","#929292");
	 	});
	 	
	 });
	 
	 
	 //点击指纹
	 var mark=1;
//	 $(".animation_left").css("display","none");
	 $(".animation>img:first-child").click(function(){
//	 	 $(".animation_left").css("display","block");
	 	$(this).attr("src","images/ico_btn23.png");
	 	if(mark==1){
			$('.animation div a:first-child img').animate({"left":"1.2rem"},500);
			$('.animation div a:nth-child(2) img').animate({"left":"2rem"},500);
			$('.animation div a:nth-child(3) img').animate({"left":"2.8rem"},500);
			$('.animation div a:nth-child(4) img').animate({"left":"3.6rem"},500);
			$('.animation div a:nth-child(5) img').animate({"left":"4.4rem"},500);
			mark=2;
		}else if(mark==2){
			$(this).attr("src","images/ico_btn22.png");
			$('.animation div a:first-child img').animate({"left":"0.1rem"},500);
			$('.animation div a:nth-child(2) img').animate({"left":"0.1rem"},500);
			$('.animation div a:nth-child(3) img').animate({"left":"0.1rem"},500);
			$('.animation div a:nth-child(4) img').animate({"left":"0.1rem"},500);
			$('.animation div a:nth-child(5) img').animate({"left":"0.1rem"},500);
			mark=1;
		}	
	});
//	回到最上面
	$("#gotop").click(function(){
			$('body,html').animate({scrollTop:0},800);
			return false;
		});

//	弹窗
	function appear(){
		$("#aler").show();
	 	$(".bg").show();
	}
	 $(".animation>img:nth-of-type(2)").click(function(){
	 	$("#aler").show();
	 	$(".bg").show();
	 	clearInterval(timer);
	 });
	 $(".bg").click(function(){
	 	$("#aler").hide();
		$(".bg").hide();
		clearInterval(timer);
		timer=setInterval(appear, 3000);
	 });
	$("#close").click(function(){
		$("#aler").hide();
		$(".bg").hide();
		clearInterval(timer);
		timer=setInterval(appear, 3000);
	});
	// var timer=setInterval(appear, 3000);

 });




