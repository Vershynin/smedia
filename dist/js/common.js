$(document).ready(function() {
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 50) {
    //         $('#scroll-top').fadeIn();
    //     } else {
    //         $('#scroll-top').fadeOut();
    //     }
    // });
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 110) {
    //         $("#cart-btn").addClass('is-sticky');
    //         $("body").addClass('cart-fixed');
    //
    //         var mql = window.matchMedia('(max-width: 767px)');
    //         if (mql.matches) {
    //             $('.cart-button').popover('destroy');
    //         }
    //     } else {
    //         $("#cart-btn").removeClass('is-sticky');
    //         $("body").removeClass('cart-fixed');
    //         $('.cart-button').popover('destroy');
    //     }
    // });



    $('#scroll-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $("#callback-form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: form_data,
            beforeSend: function() {
                console.log('jnghfdrf');
            },
            success: function(res) {
                alert("Ваше сообщение отправлено!");
                console.log('res', res);
            },
            error: function(error) {
                console.log(error);
                alert("Произошла ошибка, попробуйте еще раз!");
            }
        });
    });
    // $("#cart-btn").sticky({topSpacing:0});
});


// cartjs.initialize({
//     emailOrdersTo: 'ruslan.vershynin@gmail.com',
//     emailOrdersFrom: 'ruslan.vershynin@gmail.com',
//     emailClientTo: false,
//     language: 'russian',
//     basketAnimation: true,
//     currency: 'Грн',
//     requireName: true,
//     requirePhone: true,
//     requireEmail: false,
//     phoneMask: '+38 (999) 999 99 99',
//     //requireAddress : true,
//     redirect: '',
//     hideOnClick: true,
//     positionPopover: 'center',
//     minSum: 0,
//     minSumOn: true,
//     aboutShop: "Тел. +38 (067) 123 45 67, email: kings.roll.com.ua@gmail.com, Адрес: г.Запорожье "
// })
