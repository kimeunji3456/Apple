// 홈페이지 열었을 때 바로 나옴
setTimeout(() => {
    $('.logo-bg').removeClass('open');
}, 1500);




// 버튼 클릭시 바뀜
let num = 0;

$('.theme').click(function (e) {
    e.preventDefault();


    $('body').toggleClass('dark');

    // 이미지 변경
    if (num == 0) {
        $('.theme img').attr('src', './asset/images/dark-mode.gif');
        num = 1;

    } else {
        $('.theme img').attr('src', './asset/images/normal-mode.gif');
        num = 0;
    }
});



// 스크롤 내리면 헤더 변경
$(window).scroll(function () {
    current = $(this).scrollTop();

    if (current > 0) {
        $('#header').addClass('bg')
    } else {
        $('#header').removeClass('bg')
    }
})

$(window).trigger('scroll'); //강제실행




// 메뉴 글씨 효과
const menuTxt = new SplitType('#header .menu-item a', { types: 'words, chars', });

if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이상일 때

    $('#header .menu-item').mouseenter(function () {
        menuMotion = gsap.from($(this).find('.char'), {
            yPercent: 60,
            stagger: 0.03,
            paused: true,
        })
        menuMotion.restart();
    })

} else {
    // 태블릿, 모바일
    $('#header .menu-item').off('mouseenter');
}






// 메인 배경
gsap.to('.sc-visual .bg', {
    scrollTrigger: {
        trigger: ".sc-visual",
        start: "0% 0%",
        end: "100% 0%",
        //markers: true,
        scrub: 0,
    },
    yPercent: 60
})


// 메인 텍스트 글자 쪼개기
const mainTxt = new SplitType('.sc-visual .title-area .title', { types: 'words, chars', });

gsap.from(mainTxt.chars, {
    delay: 2,
    opacity: 0,
    stagger: 0.01,
    yPercent: 20
})





// 홍보 이미지 gsap
gsap.to('.sc-promotion .img-box', {
    scrollTrigger: {
        trigger: ".sc-promotion",
        start: "0% 0%",
        end: "100% 0%",
        //markers: true,
        scrub: 0,
    },
    yPercent: 50
})





// 텍스트에 hover하면 이미지 등장
/* $('.sc-today .today-wrap a').hover(function () {
    //alert('들어왔습니다');

    $(this).addClass('active').siblings().removeClass('active');
}) */

if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이상일 때

    $('.sc-today .today-wrap a').hover(function () {
        // pc버전

        //alert('들어왔습니다');    

        $(this).addClass('active').siblings().removeClass('active');
    })

} else {
    // 태블릿, 모바일
    $('.sc-today .today-wrap a').off('hover');
}






// 스크롤 효과 영역
ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function () {

        $('.sc-scroll .img-wrap .img-box').each(function (a, b) {

            ScrollTrigger.create({
                trigger: b,
                start: "0% 50%",
                end: "100% 50%",
                //markers: true,
                onEnter: function () {
                    $('.des-box .content').eq(a).addClass('active').siblings().removeClass('active');

                    $(b).addClass('on').siblings().removeClass('on');
                },
                onEnterBack: function () {
                    $('.des-box .content').eq(a).addClass('active').siblings().removeClass('active');
                }
            })

        })

    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function () {
        $('.des-box .content').removeClass('active');
    },
    // small
    "(max-width: 767px)": function () {

    },
    // all
    "all": function () {

    }
});





// 버튼에 마우스 올리면 나타나는 효과
const btnTxt = new SplitType('.btn span', { types: 'words, chars', });

if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이상일 때

    $('.btn').mouseenter(function () {
        menuMotion = gsap.from($(this).find('.char'), {
            yPercent: 60,
            stagger: 0.02,
            paused: true,
        })
        menuMotion.restart();
    })

} else {
    // 태블릿, 모바일
    $('.btn').off('mouseenter');
}





// 모바일 메뉴
$('.mobile-btn').click(function () { //열기
    $(this).siblings('.menu-area').addClass('open');
    $(this).css('display', 'none');
    $('body').addClass('no-scroll');
});

$('.mobile-close').click(function () { //닫기
    $('.menu-area').removeClass('open');
    $('.mobile-btn').css('display', 'block');
    $('body').removeClass('no-scroll');
})




// 모바일 footer 메뉴
$('.menu-wrap .icon-plus').click(function () {
    $(this).siblings('.menu-list').toggleClass('block');
    $(this).toggleClass('close');
})