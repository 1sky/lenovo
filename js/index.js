$(document).ready(function(){
	var t;
	var tt;
	var n=0;
	var next=0;
	var aa=0;
	var heights=$(".six .iphone .iphone-right .jindutiao").height();
	function move(){
    	next=n+1;   
    	if(next>=$(".six .iphone-left li").length-1){
    		clearInterval(t);
    	}
		$(".six .iphone .iphone-left").find("li").eq(n).removeClass("actives");
		$(".six .iphone .iphone-left").find("li").eq(next).addClass("actives");
		$(".six .iphone .iphone-right").find("img").eq(next).addClass("activess");
		$(".six .jindu").find("img").eq(next).addClass("xian");
    	n=next;
    }
	function height(){
		aa+=1;
		if(aa>=heights){
			return;
		}
		$(".six .iphone .iphone-right .jindutiao").find("img").css("height",aa)
	}
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onSlideChangeStart: function(swiper){
        	console.log($(".swiper-slide-active").index())
	      	if($(".swiper-slide-active").index()==5){	 
	      		tt=setInterval(height,25);
			    t=setInterval(move,2000);			    
	      	}else{
	      		n=0;
		    	next=0;
		    	aa=0;
		    	$(".six .iphone .iphone-left").find("li").removeClass("actives");
		    	$(".six .iphone .iphone-left").find("li").eq(0).addClass("actives");
		    	$(".six .iphone .iphone-right").find("img").removeClass("activess");
		    	$(".six .iphone .iphone-right").find("img").eq(0).addClass("activess");	
		    	$(".six .jindu").find("img").removeClass("xian");
	      		$(".six .jindu").find("img").eq(0).addClass("xian");
	      		clearInterval(t);
	      		clearTimeout(tt);	      		
	      	}
	    }
    });
    $(".one .button").on("touchend","img",function(){
		swiper.slideNext();
    })
    $(".two .qipao").on("touchend","img:nth-of-type(5)",function(){
		swiper.slideNext();
    })
    $(".three .bao").on("touchend","img:nth-of-type(2)",function(){
		swiper.slideNext();
    })
    $(".four .to").on("touchend","img",function(){
		swiper.slideNext();
    })
    $(".five .foot").on("touchend","img:nth-of-type(3)",function(){
		swiper.slideNext();
    })
    $(".six .button1").on("touchend","img",function(){
		swiper.slideTo(0,1000);		
    })
       
    $(".again").on("touchend",function(){
    	n=0;
    	next=0;
    	$(".six .iphone .iphone-left").find("li").removeClass("actives");
    	$(".six .iphone .iphone-left").find("li").eq(0).addClass("actives");
    	$(".six .iphone .iphone-right").find("img").removeClass("activess");	
    	$(".six .iphone .iphone-right").find("img").eq(0).addClass("activess");	
    	$(".six .jindu").find("img").removeClass("xian");
    	$(".six .jindu").find("img").eq(0).addClass("xian");
    	clearInterval(t);
    	clearTimeout(tt);
    	aa=0;
    	tt=setInterval(height,25);
    	t=setInterval(move,2000);    	
    })
//  $("img").lazyload({
//	 	   effect : "fadeIn",
//	 	   event:"touchmove",
//	 	   threshold:100
//	 });
})
