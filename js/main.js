$(function () {
$('.header__burger').click(function () {
$('.header__burger, .header__menu').toggleClass('active');
$('body, html').toggleClass('lock')
})
    window.onscroll=function () {
        if (pageYOffset>0){
            document.querySelector('.header').classList.add('fixed')
        }
        else {
            document.querySelector('.header').classList.remove('fixed')
        }
    }
    $('a[href^="#"]').click(function (e) {
        let element=$(this).attr('href')
        let elementTop=$(element).offset().top
        if ($(window).width()<767){
            $('.header__burger, .header__menu').removeClass('active')
            $('body,html').removeClass('lock')
        }
        $('html,body').animate( {
        scrollTop:elementTop-80
        },500)
        e.preventDefault()


    })
})
