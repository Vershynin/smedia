$(document).ready(function(){

  	var galleryThumbs = new Swiper('.gallery-thumbs', {
  		spaceBetween: 10,
  		centeredSlides: true,
  		loop: 'true',
      slidesPerView: 3,
      spaceBetween: 30,
  		touchRatio: 0.2,
  		slideToClickedSlide: true,
  		autoplay: {
  			delay: 4000,
  		},
    	navigation: {
    		nextEl: '.swiper-next',
    		prevEl: '.swiper-prev',
    	},
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
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


});
