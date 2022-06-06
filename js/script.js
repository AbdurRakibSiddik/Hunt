$(function () {
    'use strict'
    //  Slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fa-solid fa-arrow-right nxt_arr"></i>',
        prevArrow: '<i class="fa-solid fa-arrow-left prv_arr"></i>',
    });

    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    $('.serv_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        vertical: true,
        swipeToSlide: true,
        nextArrow: '<i class="fa-solid fa-chevron-down nxt_arr"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-up prv_arr"></i>',
        centerMode: true,
        centerPadding: 0,
    });

    $('.brandd').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        swipeToSlide: true,
    });

    // Double Slider
    $('.db_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.db_3',
        centerMode: true,
        centerPadding: 0,
        autoplay: false,
    });
    $('.db_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.db_1',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        vertical: true,
        swipeToSlide: true,
        nextArrow: '<i class="fa-solid fa-chevron-down nxt_arr"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-up prv_arr"></i>',
    });


    // img gallery
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid',
        spinColor: 'plum',
    });

    new VenoBox({
        selector: '.teamimg',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid',
        spinColor: 'plum',
    });

    //  Counter Js
    $('.count').counterUp({
        delay: 20,
        time: 2000,
    });


    // Type Js
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings'
    });
    var typed = new Typed('#typedd', {
        stringsElement: '#typed-stringss'
    });
    var typed = new Typed('#typeddd', {
        stringsElement: '#typed-stringsss'
    });
    var typed = new Typed('#typedddd', {
        stringsElement: '#typed-stringssss'
    });
    var typed = new Typed('#typeddddd', {
        stringsElement: '#typed-stringsssss'
    });


    // Menu Fix
    let navoff = $('.main_menu').offset().top
    console.log(navoff);

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    // BC TOP
    $('.bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.bc_top').fadeIn();
        } else {
            $('.bc_top').fadeOut();
        }
    });

});