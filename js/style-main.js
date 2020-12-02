$(document).ready(function () {

    $('.btn-menu').click(function () {
        $('.menu').toggleClass('active');

    });

    $('.landing-page .portfolio .content .content-body .navigation ul .nav-all').click(function () {
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-all').addClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-webdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-appdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-uiux').removeClass('active');

        $('.landing-page .portfolio .content .content-body .body-portfolio .web-design').removeClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .app-design').removeClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .uiux').removeClass('unActive');
    });

    $('.landing-page .portfolio .content .content-body .navigation ul .nav-webdesign').click(function () {
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-all').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-webdesign').addClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-appdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-uiux').removeClass('active');

        $('.landing-page .portfolio .content .content-body .body-portfolio .web-design').removeClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .app-design').addClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .uiux').addClass('unActive');
    });

    $('.landing-page .portfolio .content .content-body .navigation ul .nav-appdesign').click(function () {
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-all').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-webdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-appdesign').addClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-uiux').removeClass('active');

        $('.landing-page .portfolio .content .content-body .body-portfolio .web-design').addClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .app-design').removeClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .uiux').addClass('unActive');
    });

    $('.landing-page .portfolio .content .content-body .navigation ul .nav-uiux').click(function () {
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-all').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-webdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-appdesign').removeClass('active');
        $('.landing-page .portfolio .content .content-body .navigation ul .nav-uiux').addClass('active');

        $('.landing-page .portfolio .content .content-body .body-portfolio .web-design').addClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .app-design').addClass('unActive');
        $('.landing-page .portfolio .content .content-body .body-portfolio .uiux').removeClass('unActive');
    });

    var nav_testimonial = 2;

    $('.landing-page .testimonial .content .content-body .slide .slide-left').click(function () {
        nav_testimonial = nav_testimonial - 1;
        if (nav_testimonial == 1) {
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').removeClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').addClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').addClass('unActive');

            $('.landing-page .testimonial .content .content-body .navigation .circle-1').addClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-2').removeClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-3').removeClass('active');
        } else if (nav_testimonial == 2) {
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').addClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').removeClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').addClass('unActive');

            $('.landing-page .testimonial .content .content-body .navigation .circle-1').removeClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-2').addClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-3').removeClass('active');
        }
    });

    $('.landing-page .testimonial .content .content-body .slide .slide-right').click(function () {
        nav_testimonial = nav_testimonial + 1;
        if (nav_testimonial == 2) {
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').addClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').removeClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').addClass('unActive');

            $('.landing-page .testimonial .content .content-body .navigation .circle-1').removeClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-2').addClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-3').removeClass('active');
        } else if (nav_testimonial == 3) {
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').addClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').addClass('unActive');
            $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').removeClass('unActive');

            $('.landing-page .testimonial .content .content-body .navigation .circle-1').removeClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-2').removeClass('active');
            $('.landing-page .testimonial .content .content-body .navigation .circle-3').addClass('active');
        }
    });

    $('.landing-page .testimonial .content .content-body .navigation .circle-1').click(function () {
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').removeClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').addClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').addClass('unActive');

        $('.landing-page .testimonial .content .content-body .navigation .circle-1').addClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-2').removeClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-3').removeClass('active');
    })

    $('.landing-page .testimonial .content .content-body .navigation .circle-2').click(function () {
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').addClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').removeClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').addClass('unActive');

        $('.landing-page .testimonial .content .content-body .navigation .circle-1').removeClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-2').addClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-3').removeClass('active');
    })

    $('.landing-page .testimonial .content .content-body .navigation .circle-3').click(function () {
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-1').addClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-2').addClass('unActive');
        $('.landing-page .testimonial .content .content-body .slide .slide-center .card-box .testimonial-3').removeClass('unActive');

        $('.landing-page .testimonial .content .content-body .navigation .circle-1').removeClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-2').removeClass('active');
        $('.landing-page .testimonial .content .content-body .navigation .circle-3').addClass('active');
    })


});


$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 0 && scroll < 768) {
        $(".landing-page nav .content .menu ul .nav-home").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-home").removeClass("active");
    }

    if (scroll >= 768 && scroll < 1536) {
        $(".landing-page nav .content .menu ul .nav-about").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-about").removeClass("active");
    }

    if (scroll >= 1536 && scroll < 3072) {
        $(".landing-page nav .content .menu ul .nav-service").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-service").removeClass("active");
    }

    if (scroll >= 3072 && scroll < 4100) {
        $(".landing-page nav .content .menu ul .nav-portfolio").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-portfolio").removeClass("active");
    }

    if (scroll >= 4100 && scroll < 5200) {
        $(".landing-page nav .content .menu ul .nav-testimonial").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-testimonial").removeClass("active");
    }

    if (scroll >= 5200) {
        $(".landing-page nav .content .menu ul .nav-contact").addClass("active");
    } else {
        $(".landing-page nav .content .menu ul .nav-contact").removeClass("active");
    }
});


$(document).ready(function () {
    $('.landing-page nav .content .btn-menu').click(function () {
        $('.landing-page nav .content .menu-mobile').toggleClass('active');
    });
});

$(document).ready(function () {
    $('section').click(function () {
        $('.landing-page nav .content .menu-mobile').removeClass('active');
    });
});

$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 0 && scroll < 1000) {
        $(".landing-page nav .content .menu-mobile ul .nav-home").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-home").removeClass("active");
    }

    if (scroll >= 1000 && scroll < 2300) {
        $(".landing-page nav .content .menu-mobile ul .nav-about").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-about").removeClass("active");
    }

    if (scroll >= 2300 && scroll < 4500) {
        $(".landing-page nav .content .menu-mobile ul .nav-service").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-service").removeClass("active");
    }

    if (scroll >= 4572 && scroll < 6300) {
        $(".landing-page nav .content .menu-mobile ul .nav-portfolio").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-portfolio").removeClass("active");
    }

    if (scroll >= 6300 && scroll < 7600) {
        $(".landing-page nav .content .menu-mobile ul .nav-testimonial").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-testimonial").removeClass("active");
    }

    if (scroll >= 7600) {
        $(".landing-page nav .content .menu-mobile ul .nav-contact").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile ul .nav-contact").removeClass("active");
    }
});


$(document).ready(function () {
    $('.landing-page nav .content .btn-menu-landscape').click(function () {
        $('.landing-page nav .content .menu-mobile-landscape').toggleClass('active');
    });
});

$(document).ready(function () {
    $('section').click(function () {
        $('.landing-page nav .content .menu-mobile-landscape').removeClass('active');
    });
});


$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 0 && scroll < 1000) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-home").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-home").removeClass("active");
    }

    if (scroll >= 1000 && scroll < 2300) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-about").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-about").removeClass("active");
    }

    if (scroll >= 2300 && scroll < 4500) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-service").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-service").removeClass("active");
    }

    if (scroll >= 4572 && scroll < 7400) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-portfolio").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-portfolio").removeClass("active");
    }

    if (scroll >= 7400 && scroll < 8500) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-testimonial").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-testimonial").removeClass("active");
    }

    if (scroll >= 8500) {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-contact").addClass("active");
    } else {
        $(".landing-page nav .content .menu-mobile-landscape ul .nav-contact").removeClass("active");
    }
});







$(document).ready(function () {
    $('.landing-page nav .content .btn-menu-tablet').click(function () {
        $('.landing-page nav .content .menu-tablet').toggleClass('active');
    });
});

$(document).ready(function () {
    $('section').click(function () {
        $('.landing-page nav .content .menu-tablet').removeClass('active');
    });
});


$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 0 && scroll < 1000) {
        $(".landing-page nav .content .menu-tablet ul .nav-home").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-home").removeClass("active");
    }

    if (scroll >= 1000 && scroll < 2300) {
        $(".landing-page nav .content .menu-tablet ul .nav-about").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-about").removeClass("active");
    }

    if (scroll >= 2300 && scroll < 3800) {
        $(".landing-page nav .content .menu-tablet ul .nav-service").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-service").removeClass("active");
    }

    if (scroll >= 3800 && scroll < 6700) {
        $(".landing-page nav .content .menu-tablet ul .nav-portfolio").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-portfolio").removeClass("active");
    }

    if (scroll >= 6700 && scroll < 7800) {
        $(".landing-page nav .content .menu-tablet ul .nav-testimonial").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-testimonial").removeClass("active");
    }

    if (scroll >= 7800) {
        $(".landing-page nav .content .menu-tablet ul .nav-contact").addClass("active");
    } else {
        $(".landing-page nav .content .menu-tablet ul .nav-contact").removeClass("active");
    }
});