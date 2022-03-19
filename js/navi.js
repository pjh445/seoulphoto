$(document).ready(function(){

	//모바일화면: 시작
	if( $(window).width()<700 ){

		//모바일메뉴 열기<->닫기(X)버튼 전환
		let $menuBtn = 0;
		$("button.menu").click(function(){

			if($menuBtn != 1){				
				//메인메뉴 슬라이드다운
				$("nav#menuAll> ul").slideDown();
				//버튼 모양을 X로 전환
				$(this).html("close");
				//body 스크롤 방지
				$("body").css("overflow","hidden");
				$menuBtn++;
			}
			else {				
				$(this).html("menu");
				//메인메뉴+서브메뉴 슬라이드업
				$("nav#menuAll> ul, nav.subMenu").slideUp("fast");
				$("a.mainMenu").children(".more").html("expand_more");
				$("body").css("overflow","auto");
				$menuBtn = 0;
			}
		});
		
		//서브메뉴 슬라이드다운
		$("a.mainMenu").click(function(){
			$("nav.subMenu").slideUp("fast");
			$("a.mainMenu").children(".more").html("expand_more");
			$(this).next("nav.subMenu").slideDown();
			$(this).children(".more").html("expand_less");
			///////////////////////////////
			/*페이지이동후에도 오렌지bar 활성화유지*/
			
			
			
			
		});

	}//모바일화면: 끝


	//PC화면: 시작
	if( $(window).width()>=700 ){
		
		//하위메뉴 내려옴
		$("nav#menuAll").mouseenter(function(){	
			$("nav.subMenu, #subMenuBg").slideDown();
		});
		//탭키로 이동후 엔터키를 누르면 하위메뉴 내려옴
		$(".mainMenu").keydown(function(e){
			if(e.keyCode==13){
				$("nav.subMenu, #subMenuBg").slideDown();
			}
		});




		//메인메뉴에 마우스오버하는 동안  오렌지바 활성유지
		$("a.mainMenu").mouseenter(function(){
			$("a.mainMenu").removeClass("orageBar");
			$(this).addClass("orageBar");
		});	
		
		//메인메뉴: 오렌지바 비활성 됨
		$("#slideBg").mouseenter(function(){
			$("nav.subMenu, #subMenuBg").slideUp();
			$("a.mainMenu").removeClass("orageBar");
		});


	}//PC화면: 끝


});//제이쿼리 끝
