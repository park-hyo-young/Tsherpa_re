$(document).ready(function(){
    // include 함수
    includeLayout(); 
    
    // 팝업 show/hide
    $('.stu-code-box > a').click(function(e){
        e.preventDefault();
        $('.popup-share').show();
    });
    $('.popup-header > a').click(function(e){
        e.preventDefault();
        $('.popup-share').hide();
    });

    

    // 이름순/번호순, 페이지 이동 버튼에 active
    $('.list-menu-group > a, .next-pagebtn-group > .page-num').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('active') === true) {
            $(this).siblings().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });

    // 비밀번호 보일 때, 안보일 때 이미지 변경
    $('.stu-pass-list > a').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('pass-show') === true) {
            $(this).removeClass('pass-show');
            $(this).addClass('pass-hide');
        } else {
            $(this).removeClass('pass-hide');
            $(this).addClass('pass-show');
        }
    });
    
    // 학급관리 화면 class 이동 슬라이드
    var swiper = new Swiper(".class-offcial-box", {
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 급식 슬라이드
    var swiper = new Swiper(".school-meal-menu", {
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prex-btn",
        },
    });
})

// lode html
function includeLayout() {
    var includeArea = $('[data-include]');
    var self, url;
    $.each(includeArea, function(){
        self = $(this);
        url = self.data('include');
        self.load(url, function(){
            self.removeAttr('data-include');
        });
    });
}