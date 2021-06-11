$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        menu: '#gnb',
		lockAnchors: false,
		responsiveWidth: 415,
        anchors:['welcome','work','skill','contect'],
		afterLoad: function(origin, destination, direction){
			if( origin == $("#gnb li a").text()){
				$("#gnb li::after").css("display","block")
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
	if($(window).innerWidth() < 989){
		$("#header").addClass("on");
		$(".gnb_btb").click(function(){
			$("#header").css("right","0")
		})
	}else{
		$("#header").removeClass("on");
	}

	$(window).resize(function () {
        if ($(window).innerWidth() < 989) {
            $("#header").addClass("on");
        }else{
			$("#header").removeClass("on");
		}
    })

	/* portfolio 클릭 */
	$(".site_box").click(function(){
		let siteBoxIndex = $(this).index() + 2;
		$(".work_wrap").removeClass('on')
		$(".click_bg").addClass('on')
		$(".work_wrap").each(function(){
			let workWrapIndex = $(this).index();
			if(siteBoxIndex == workWrapIndex){
				$(this).addClass('on');
			}
		})
	})
	// close버튼 클릭 시 work_wrap닫기
	$(".close_btn").click(function(){
		$(".work_wrap").removeClass('on')
		$(".click_bg").removeClass('on')
	})
});