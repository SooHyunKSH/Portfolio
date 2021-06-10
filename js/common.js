$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        menu: '#gnb',
		lockAnchors: false,
		responsiveWidth: 415,
        anchors:['welcome','work','profile','comtect'],
		onLeave: function (origin, destination, direction) {
            if (destination > 1) {
                $("#header").addClass("on");
				$(".gnb_btn").css("display","block");
            }else{
				$("#header").removeClass("on");
				$(".gnb_btn").css("display","none");
			}
        }
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	$(".gnb_btn").click(function(){
		$("#header").css("right","40rem");
		$(".gnb_btn").css("display","none");
		console.log("text")
	});
	$(".gnb_btn_close").click(function(){
		$("#header").css("right","-40rem");
		$(".gnb_btn").css("display","block");
	});

	/* portfolio 클릭 */
	$(".site_box").click(function(){
		let siteBoxIndex = $(this).index() + 1;
		$(".work_wrap").removeClass('on')
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
	})
});