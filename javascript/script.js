let thisSlide,
    slidesLength;
var ww = $(window).width();
function initSwiper() {
    let accessibilityParameters = {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    }

    if (ww < 768) {
        swiperNoticeCards = new Swiper('.swiper.notice-cards', {
            effect: 'cards',
            a11y: accessibilityParameters,
        })
    } else if (ww >= 768) {
        swiperNoticeCards = new Swiper('.swiper.notice-cards', {
            effect: 'slide',
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 50,
            a11y: accessibilityParameters,
        })
    }
}
initSwiper();

$(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
});

swiperCast = new Swiper('.swiper.cast', {
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    loop: true,
    loopedSlides: 1,
    autoplay: {
        delay: 1500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
    on: {
        init: function () {
            thisSlide = this;
            autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
            autoPlayBtn.addEventListener('click', (e) => {
                autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                if (autoPlayState === 'false') {
                    autoPlayBtn.setAttribute('aria-pressed', 'true');
                    thisSlide.autoplay.stop();
                } else if (autoPlayState === 'true') {
                    autoPlayBtn.setAttribute('aria-pressed', 'false');
                    thisSlide.autoplay.start();
                };
            });
        },
    },
});
let Top = document.querySelector('.btn-top');
Top.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
var rootElement = document.documentElement
var quickBuy = document.querySelector('.quick-buy')
var showTopBtn = document.querySelector(".btn-top")

function handleScroll() {
    // Do something on scroll
    var btnHeight = quickBuy.clientHeight
    var btnGap = btnHeight / 3
    var scrollRemainder = rootElement.scrollHeight - rootElement.clientHeight

    // Show button
    if ((rootElement.scrollTop / scrollRemainder) > 0.20) {
        quickBuy.style.bottom = String(btnHeight + btnGap + (rootElement.clientWidth / 100 * 4)) + "px";
        showTopBtn.classList.add("show-btn")
    }
    // Hide button 
    else {
        quickBuy.style.bottom = String(rootElement.clientWidth / 100 * 4) + "px";
        showTopBtn.classList.remove("show-btn")
    }

    showTopBtn.style.bottom = String(rootElement.clientWidth / 100 * 4) + "px";
}
document.addEventListener("scroll", handleScroll)
window.addEventListener("resize", handleScroll);

//Navigation Menu 
//공연예매에 마우스오버하면 바로자식 drop이 block 된다.

$(document).ready(function () {
    $('.main-nav>li').mouseover(function () {
        $(this).find('.drop').stop().slideDown(300);
    }).mouseout(function () {
        $(this).find('.drop').stop().slideUp(300);
    });

})

var mainNavList = document.querySelectorAll(".main-nav>li")
function addMainDropEvent() {
    mainNavList.forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            event.target.find
        })
    })
}
