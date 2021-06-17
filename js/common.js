$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        menu: '#gnb',
        lockAnchors: false,
        responsiveWidth: 940,
        anchors: ['welcome', 'work', 'skill', 'contact'],
        onLeave: function(index, nextIndex, direction){
            $("#gnb li").removeClass("on");
            if(nextIndex == 2){
                $("#gnb li:nth-of-type(2)").addClass("on");
            }else if(nextIndex == 3){
                $("#gnb li:nth-of-type(3)").addClass("on");
            }else if(nextIndex == 4){
                $("#gnb li:nth-of-type(4)").addClass("on");
            }else{
                $("#gnb li:nth-of-type(1)").addClass("on");
            }
        }
    });

    //methods
    $
        .fn
        .fullpage
        .setAllowScrolling(true);

    /* tablet size 이하 일때 gnb 인터렉션 */
    if ($(window).innerWidth() < 989) {
        $("#header").addClass("on");
        $(".gnb_btn").click(function () {
            $("#header").css("right", "0");
            $(this).css("display", "none");
        })
        $(".gnb_btn_close").click(function () {
            $("#header").css("right", "-400px");
            $(".gnb_btn").css("display", "block");
        })
    } else {
        $("#header").removeClass("on");
        $(".gnb_btn_close").css("display", "none");
    }

    $(window).resize(function () {
        if ($(window).innerWidth() < 989) {
            $("#header").addClass("on");
            $(".gnb_btn").click(function () {
                $("#header").css("right", "0");
                $(this).css("display", "none");
            })
            $(".gnb_btn_close").click(function () {
                $("#header").css("right", "-400px");
                $(".gnb_btn").css("display", "block");
            })
        } else {
            $("#header").removeClass("on");
            $(".gnb_btn_close").css("display", "none");
        }
    })

    /* portfolio 클릭 */
    $(".site_box").click(function () {
        let siteBoxIndex = $(this).index() + 2;
        $(".work_wrap").removeClass('on')
        $(".click_bg").addClass('on')
        $(".work_wrap").each(function () {
            let workWrapIndex = $(this).index();
            if (siteBoxIndex == workWrapIndex) {
                $(this).addClass('on');
            }
        })
    })
    // close버튼 클릭 시 work_wrap닫기
    $(".close_btn").click(function () {
        $(".work_wrap").removeClass('on')
        $(".click_bg").removeClass('on')
    })
});