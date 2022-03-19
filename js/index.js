$(document).ready(function(){
	
	//모집중인 국비지원 및 일반 교육과정: 이미지박스 호버효과
	$(".courseBox div").hover(function(){
		$(this).children("h3").slideUp();
	},function(){
		$(this).children("h3").slideDown();
	});
	
	//스크롤을 내리면 학원5대 장점이 하나씩 왼쪽에서 나타남
	if( $(window).width()>=600 ){
		$(window).scroll(function() { 
			if ($(document).scrollTop()>500) { 
				$("#advantages_map li").each(function(e){
					const $li=$(this);
					setTimeout(function(){
						$li.addClass("ani"); 
					}, e*500);					
				});
			}
		});
	}
});//끝