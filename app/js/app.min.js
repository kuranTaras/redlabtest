$(window).on("load" , function () {
    let example = document.querySelector('.order');
    $('.order').on('mousemove', (e) => {
        const position = example.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 1.35 ;
        $('.order__button').css('transform', 'translate(' + x * 0.7 + 'px' + ',' + y * 0.5 + 'px' + ') scale(1)');
        $('.order__button').addClass('order_hover')
    });
    $('.order').on('mouseleave', (e) => {
        if ($('.order').hasClass('order_active')) {
            $('.order__button').css('transform', 'translate(0) scale(0.8)');
        } else {
            $('.order__button').css('transform', 'translate(0) scale(1)');
        }
        $('.order__button').removeClass('order_hover')
    })
    $('.how__link').each(function (index) {
        $(this).on('click', () => {
            $('.how__link').removeClass('how__link_active')
            $(this).toggleClass('how__link_active')
        })
    })
})
$(window).on('scroll', () => {
    let top = $('.services').offset().top / 2
    if ($(window).scrollTop() > top) {
        $('.services__item').addClass('active')
    }
    if ($(window).scrollTop() > 100) {
        $('.order__button').css('transform', 'scale(0.8)')
        $('.order').addClass('order_active')
    } else {
        $('.order__button').css('transform', 'scale(1)')
        $('.order').removeClass('order_active')
    }
    if ($(window).scrollTop() === 0) {
        $('.header').removeClass('header_active')
    }
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
        $('body').addClass('body_active')
        let left = ($(window).width() - $('.how__img').width()) / 2
        console.log(left)
        $('.how__img').css('transform', 'translate(' + left + 'px, -200px)')
    }
})

$(window).on('mousewheel', (e) => {
    if ($(window).scrollTop() > 70) {
        if(e.originalEvent.wheelDelta > 0) {
            $('.header').addClass('header_active')
            $('.header').removeClass('header_hide')
        }
        if(e.originalEvent.wheelDelta < 0) {
            $('.header').addClass('header_hide')
        }
    }
})

