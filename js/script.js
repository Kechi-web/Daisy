$(document).ready( function() {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1200);
        return false;
    });
    window.addEventListener('scroll', function () {
        if (pageYOffset < 50) {
            header.classList.remove('header-dark');
            menulink.classList.remove('menu__link-top');
            up.classList.remove('up-y');
        }
        if (pageYOffset > 50) {
            header.classList.add('header-dark');
            menulink.classList.add('menu__link-top');
            up.classList.add('up-y');
        }
    });
    // MENU
    $('.menu__link').click(function () {
        $(this).toggleClass('menu__link-act');
        $('.menu__list').toggleClass('open');  
    });
    $('.content, .header, a[href^="#"]').click(function () {
        $('.menu__list').removeClass('open');
        $('.menu__link').removeClass('menu__link-act');   
    });
    // PORTFOLIO TABS
    $('.portfolio__tabs-link').click(function () {
        $('.portfolio__tabs-link').removeClass('tab-link-act');
        $(this).addClass('tab-link-act');   
    });
    $('#tab-link1').click(function () {
        $('.portfolio__tab').removeClass('tab-act');
        $('#tab1').addClass('tab-act');  
    });
    $('#tab-link2').click(function () {
        $('.portfolio__tab').removeClass('tab-act');
        $('#tab2').addClass('tab-act');  
    });
    $('#tab-link3').click(function () {
        $('.portfolio__tab').removeClass('tab-act');
        $('#tab3').addClass('tab-act');  
    });
    $('#tab-link4').click(function () {
        $('.portfolio__tab').removeClass('tab-act');
        $('#tab4').addClass('tab-act');  
    });
    $('#tab-link5').click(function () {
        $('.portfolio__tab').removeClass('tab-act');
        $('#tab5').addClass('tab-act');  
    });
    // SLIDER
    $('.comm__slider').slick({
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'ease-out',
        prevArrow: '<div class="comm-prev"><i class="fas fa-play"></i></div>',
        nextArrow: '<div class="comm-next"><i class="fas fa-play"></i></div>',
    });
});