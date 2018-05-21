$(document).ready(function(){

  // $('.input-group.').picker({format: "dd.mm.yyyy"});



  	// var galleryTop = new Swiper('.gallery-top', {
  	// 	spaceBetween: 0,
  	// 	loop: 'true',
  	// 	loopedSlides: $('.gallery-top .swiper-wrapper .swiper-slide').length,
  	// 	navigation: {
  	// 		nextEl: '.swiper-button-next',
  	// 		prevEl: '.swiper-button-prev',
  	// 	},
  	// 	autoplay: {
    //   	delay: 6000,
    // 	}
  	// });



  	// setTimeout(function() {
  	//
  	// }, 100);

  	var galleryThumbs = new Swiper('.gallery-thumbs', {
  		spaceBetween: 10,
  		centeredSlides: true,
  		loop: 'true',
      //autoHeight: true,
  		//loopedSlides: $('.gallery-thumbs .swiper-wrapper .swiper-slide').length,
  		//slidesPerView: 'auto',
      slidesPerView: 3,
      spaceBetween: 30,
      //width: 'auto',
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
          // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
          // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
  	});

    var careersThumbs = new Swiper('.career-thumbs', {
      autoplay: {
        delay: 5000,
      },
      loop: 'true',
      // width: '370px',
      navigation: {
        nextEl: '.career-next',
        prevEl: '.career-prev',
      },
     // slidesPerView: 'auto'
     slidesPerView: 1

  	});

  	//loop: 'true',
  //	var loopedSlidesCount = $('.gallery-thumbs .swiper-wrapper .swiper-slide').length;
  //	console.log(loopedSlidesCount);

  	// galleryThumbs.update(true);
  	// galleryThumbs.slideTo(0, 0);

  //	galleryTop.controller.control = galleryThumbs;
  //	galleryThumbs.controller.control = galleryTop;


});
