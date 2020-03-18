const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    920: {
        items: 2
    }
}

$(document).ready(function() {
    // owl carousel	for blog
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
});