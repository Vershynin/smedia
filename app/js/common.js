$(document).ready(function(){

  	var galleryThumbs = new Swiper('.gallery-thumbs', {
  		spaceBetween: 10,
  		centeredSlides: true,
  		loop: 'true',
      slidesPerView: 3,
      spaceBetween: 30,
  		touchRatio: 0.2,
  		//slideToClickedSlide: true,
  		autoplay: {
  			delay: 4000,
  		},
    	navigation: {
    		nextEl: '.swiper-next',
    		prevEl: '.swiper-prev',
    	},
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        360: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        }
      }
  	});

    var careersThumbs = new Swiper('.career-thumbs', {
      autoplay: {
        delay: 5000,
      },
      loop: 'true',
      navigation: {
        nextEl: '.career-next',
        prevEl: '.career-prev',
      },
     slidesPerView: 1

  	});



  $("#menu").on("click","a", function (event) {

    event.preventDefault();

    var id  = $(this).attr('href'),

      top = ($(id).offset().top) - 75;

    $('body,html').animate({scrollTop: top}, 1250);
  });




  var matched, browser;

  jQuery.uaMatch = function( ua ) {
      ua = ua.toLowerCase();

      var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
          /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
          /(msie)[\s?]([\w.]+)/.exec( ua ) ||
          /(trident)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
          ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
          [];

      return {
          browser: match[ 1 ] || "",
          version: match[ 2 ] || "0"
      };
  };

  matched = jQuery.uaMatch( navigator.userAgent );
  //IE 11+ fix (Trident)
  matched.browser = matched.browser == 'trident' ? 'msie' : matched.browser;
  browser = {};

  if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
  }

  // Chrome is Webkit, but Webkit is also Safari.
  if ( browser.chrome ) {
      browser.webkit = true;
  } else if ( browser.webkit ) {
      browser.safari = true;
  }

  jQuery.browser = browser;


  $(".to-contacts").click(function () {
        var elementClick = $(this).attr("href");
        console.log(elementClick);
        var destination = $(elementClick).offset().top - 25;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });



  $("#cbackform").submit(function( e ) { //устанавливаем событие отправки для формы с id=form

      var name = $('#firstname').val();
      var email = $('#email').val();
      var message = $('#tmessage').val();

      e.preventDefault();

      if ( name != '' && email != '' && message != '' ) {
        var form_data = $(this).serialize(); //собираем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php файла отправителя
            data: form_data,

            success: function(res) {
                //код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отправлено!");
                $("#cbackform")[0].reset();
            },
            error: function (error) {
                console.log(error);
            }
        });
      }
  });


});
