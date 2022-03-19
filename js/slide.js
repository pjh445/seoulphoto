$(document).on("pagecreate","#pageone",function(){	
	
	/*******슬라이드이미지 자동*******/
	let autoSlide = setInterval(slideRight, 2500);
	
	if( $(window).width()<600 ){		
		var amount= $("#slideMobile a").width();
		var $slide = $("#slideMobile");
		$("#slideMobile").width(amount * 6);
	}
	
	if( $(window).width()>=600 ){
		var amount= $("#slidePC a").width();
		var $slide = $("#slidePC");	
		$("#slidePC").width(amount * 6);		
	}

	
	let pos = 0;	
	function slideRight(){
		pos++;
		if(pos>5){pos=0;}
		clearInterval(autoSlide);
		$slide.stop(true).animate({left: 0 },1000,function(){
			$slide.prepend($slide.children().last());
			$slide.css("left",amount*(-1)+"px");
			$("#circle div").eq(pos).addClass("active").siblings().removeClass("active");
		});
		autoSlide = setInterval(slideRight, 2500);
	}
	
	function slideLeft(){
		pos--;
		if(pos<0){pos=5;}
		clearInterval(autoSlide);
		$slide.stop(true).animate({left:amount*(-2)},1000,function(){
			$slide.append($slide.children().first());
			$slide.css("left",amount*(-1)+"px");
			$("#circle div").eq(pos).addClass("active").siblings().removeClass("active");
		});
		autoSlide = setInterval(slideRight, 2500);
	}	
	
	
	/*모바일에서의 스와이프 기능(손으로 영역을 좌<->우로 미는 동작)*/
	/*오른쪽방향으로 밀때*/
	$("#slideArea").swiperight(function(){
		slideRight();
	}); 
	
	/*왼쪽방향으로 밀때*/
	$("#slideArea").swipeleft(function(){
		slideLeft();
	});	
	
	
	/**** PC에서만 보여지는 화살표버튼 ****/
	/***슬라이드 양쪽 화살표 버튼***/	
	/*오른쪽방향버튼*/
	$("#arrLeft").click(function(){
		slideRight();
	});
	
	/*왼쪽방향버튼*/
	$("#arrRight").click(function(){
		slideLeft();		
	});	
	
	/*동그라미 원 클릭 
	$("#circle div").click(function(){		
		$(this).addClass("active").siblings().removeClass("active");
		const i = $(this).index();
		let speed=0;
		clearInterval(autoSlide);
		 switch(i){
			case 0:	speed= 0;			break;
			case 1: speed= amount*(-1);	break;
			case 2: speed= amount*(-2);	break;
			case 3:	speed= amount*(-3); break;
			case 4:	speed= amount*(-4);	break;
			case 5:	speed= amount*(-5);
		}
		$slide.stop(true,true).animate({left:speed },1000,function(){
			$slide.append($slide.children().first());
			$slide.css("left",amount*(-1)+"px");
		});
		autoSlide = setInterval(slideRight, 2500);
	});******/
	
}); /****  제이쿼리 끝  ****/

