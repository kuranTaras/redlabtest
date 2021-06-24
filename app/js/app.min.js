$(window).on("load" , function () {


    let circle = document.querySelector('.order__button');
    let example = document.querySelector('.order');
    example.addEventListener('mousemove', (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        let offset = $('.order__button').offset()
        let x = e.pageX - offset.left
        let offsetY = $('.order__button').offset()
        let y = e.pageY - offset.top

        $('.order__button').css('transform', 'translate(' + y + 'px' + ',' + x + 'px' + ')');
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


