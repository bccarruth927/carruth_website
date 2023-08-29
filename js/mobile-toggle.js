//JavaScript file that controls the toggle functionality of the primary nav menu

$(document).ready(() => {
    //Mobile menu toggle functionality
    $('.toggle').on('click', () => {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');

            //Adds the menu (hamburger) icon
            $('.toggle').html('<a href="#"><i class="fas fa-bars"></i></a>');
        } else {
            $('.menu').addClass('active');

            //Adds the cross (times) icon
            $('.toggle').html('<a href="#"><i class="fas fa-times"></i></a>');
        }
    });

    //Submenu toggle functionality
    $('.has-submenu').on('click', () => {
        if ($('.has-submenu').hasClass('submenu-active')) {
            $('.has-submenu').removeClass('submenu-active');
        } else {
            $('.has-submenu').addClass('submenu-active');
        }
    });
});