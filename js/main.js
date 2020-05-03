$(document).ready(() => {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $openBars = $('#open');
    $closeBars = $('#close');

    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
        $openBars.toggleClass('close'); //Animation when you press the collapse button
        $closeBars.toggleClass('open');
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 750) {
            $nav.removeClass('collapse');
            if ($openBars.hasClass('close')) {
                $openBars.removeClass('close');
                $closeBars.removeClass('open');
            }
        }
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            900: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    $('.move-up span').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

});