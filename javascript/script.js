let thisSlide,
    slidesLength;

swiperNotice = new Swiper('.swiper.notice', {
    effect: 'cards',
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },

})

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
var showTopBtn = document.querySelector(".btn-top")
var quickBuy = document.querySelector('.quick-buy')
function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.20) {
        // Show button
        showTopBtn.classList.add("show-btn")
        quickBuy.style.bottom = "19.1944444444vw";

    } else {
        // Hide button
        showTopBtn.classList.remove("show-btn")
        quickBuy.style.bottom = "3.125vw";

    }
}

document.addEventListener("scroll", handleScroll)