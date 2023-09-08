//JavaScript file for the Services section card swiper

$(document).ready(() => {
    const swiper = new Swiper(".services-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});