$(document).ready(() => {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 750)
            $nav.removeClass('collapse');
    });


    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        autoplayHoverPause: true
    });

});