$(document).ready(function(){
    let pagina = $('.carousel__menu--pagina');
    let bg_image = $('.destaque');
    let nome = $('.info__titulo');

    // Carousel de Destaque
    $('.carousel-destaque').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        // Qualquer mudança no carousel a pagina é atualizada.
        let i = (currentSlide ? currentSlide : 0) + 1;
        pagina.text(i + '/' + slick.slideCount);
        $('.carousel__nome').text(nome.eq(i-1).text());
    });

    $('.carousel-destaque').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $('.destaque_esquerda'),
        nextArrow: $('.destaque_direita')
    });

    // Mudando as imagens no desktop ao carregar a pagina
    if ($(window).width() > 1050) {
        $('.destaque__img').eq(1).attr("src", "img/principal_banner_desktop.jpg");
        $('.destaque__img').eq(2).attr("src", "img/principal_banner_desktop_02.jpg");
    }else {
        $('.destaque__img').eq(1).attr("src", "img/principal_banner_mobile.jpg");
        $('.destaque__img').eq(2).attr("src", "img/principal_banner_mobile_02.jpg");
    }
    
    // Carousel de Produtos
    $('.carousel-produtos').slick({
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: 'unslick'
            }
        ],
        prevArrow: $('.produtos_esquerda'),
        nextArrow: $('.produtos_direita')
    });

    $(window).on('resize orientationChange', function(event) {
        $('.carousel-produtos').slick('reinit');
    });
});