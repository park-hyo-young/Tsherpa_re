$(document).ready(function(){

    // include 함수
    includeLayout();
    
    // 급식 메뉴 슬라이드
    var swiper = new Swiper(".school-food", {
        navigation: {
            nextEl: ".next-day",
            prevEl: ".prev-day",
        },
    });

    // class 이동 버튼
    $('.move-class').click(function(e){
        e.preventDefault();
        $('.move-class-list').show();
    });
    $('.move-class-list > li').click(function(e){
        e.preventDefault();
        $('.move-class-list').hide();
    });

    // 학급관리 슬라이드
    var swiper = new Swiper(".class-offcial-group", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".next-class",
            prevEl: ".prev-class",
        },
    });

    // 체크박스 체크되어 있으면 버튼 숨기고 보이기
    $(".basic-class-btn").on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('active') === true){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });

    // 팝업 열고 닫기
    $('.close-btn').click(function(e){
        e.preventDefault();
        $('.class-setting-popup, .class-login-popup, .student-loding-popup, .login-warning-popup, .revise-password-popup').hide();
    });
    $('.setting-btn').click(function(e){
        e.preventDefault();
        $('.class-setting-popup').show();
    });
    $('.revise-table .btns').click(function(e){
        e.preventDefault();
        $('.revise-password-popup').show();
    });
    $('.stu-all-summit').click(function(){
        $('.student-loding-popup').show();
    });

    // 페이지 이동시 버튼에 active
    $('.page-btn').on('click', function(e){
        if ($(this).hasClass('active') === true) {
            $(this).siblings().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });

    // 비밀번호 show/hide 이미지 변경
    $('.hide-password').on('click', function(e){
        if ($(this).hasClass('show-password') === true) {
            $(this).removeClass('show-password');
        } else {
            $(this).addClass('show-password');
        }
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