$(document).ready(function() {
    $('.navbar__botao').click(function() {
        var $this = $(this),
			flag = $this.data("clickflag");
		if (!flag) {
			$('.navbar__botao').attr('src', 'svgs/hamburguer_close.svg');
            $('.dropdown').css("animation", "dropdown 300ms ease-in-out forwards");
		} else {
			$('.navbar__botao').attr('src', 'svgs/icon_hamburguer.svg');
            $('.dropdown').css("animation", "dropdown-reverse 300ms ease-in-out forwards");
		}
		$this.data("clickflag", !flag);
    });

    // Mudança de cor da barra de navegação ao descer a página
    var scroll_start = 0;
    var startchange = $('.destaque');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar").css('background-color', 'hsla(195, 83%, 18%, .8)');
        } else {
           $('.navbar').css('background-color', 'transparent');
        }
    });
     }
});