//JavaScript file for the Services section card swiper

$(document).ready(() => {
    const swiper = new Swiper(".services-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});