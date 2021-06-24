$(window).on("load" , function () {




})
$(window).on('scroll', () => {
    let top = $('.services').offset().top / 2
    if ($(window).scrollTop() > top) {
        $('.services__item').addClass('active')
    }




    if ($(window).scrollTop() > 100) {
        $('.order').addClass('order_active')
    } else {
        $('.order').removeClass('order_active')
    }
})


