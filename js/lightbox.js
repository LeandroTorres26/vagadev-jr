$(document).ready(function(e){
    let i = 0;
    $('.info__botao').click(function(){
        if($(this).hasClass("info__botao--comprado") == false){ 
            // se o botão já tiver sido clicado a msg não aparecerá
            $('.lightbox').css("display", "grid");
            i++;
            // Aumenta o número de produtos do carrinho
            $('.carrinho-quantidade').text(i);
        }
        $(this).addClass("info__botao--comprado");
        $('.info__botao--comprado').html("Comprado! <img class='mario' src='img/mario.png' alt='Imagem do Mario comemorando'>");
    });

    $('.lightbox__fechar').click(function(){
        //Fecha o lightbox ao licar no X
        $('.lightbox').css("display", "none");
    });
    $(document).mouseup(function(e){
        // Fecha o lightbox ao clicar fora da msg
        let container = $('.lightbox__container');
        if (container.is(":visible") && !container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.lightbox').css("display", "none");
        }
    });
});