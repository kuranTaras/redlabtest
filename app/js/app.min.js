$(window).on("load" , function () {


    let circle = document.querySelector('.order__button');
    let example = document.querySelector('.order');
    example.addEventListener('mousemove', (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;

        let percX = ((mouseX / example.clientWidth) * 100) + '%';
        let percY = ((mouseY / example.clientHeight) * 100) + '%';

        $('.order__button').css('transform', 'translateX(' + percX + ')');
        $('.order__button').css('transform', 'translateY(' + percY + ')');
    });



})
$(window).on('scroll', () => {
    let top = $('.services').offset().top / 2
    if ($(window).scrollTop() > top) {
        $('.services__item').addClass('active')
    }




    if ($(window).scrollTop() > 100) {
        $('.order__button').addClass('order_active')
    } else {
        $('.order__button').removeClass('order_active')
    }
})


