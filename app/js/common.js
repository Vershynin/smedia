$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1250);
  });

  // var swiper = new Swiper('.swiper-container', {
  //   autoplay: {
  //     delay: 744300,
  //     disableOnInteraction: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // effect: 'fade',
  // });


  // $('#cbackform').validator();

//*AJAX SEND*//

  $("#cbackform").submit(function( e ) { //устанавливаем событие отправки для формы с id=form


    // var formNameValue = document.getElementById('firstname').value;
  	// if (formNameValue.length==0){
  	// 	var nameErr = document.getElementById("namefild-err");
    //   var clearValue = document.getElementsByClassName('clearvalue');
  	// 	nameErr.className += " validation-err";
  	// 	return false;
  	// }

    // var formEmailValue = document.getElementById('email').value;
    // if (formEmailValue.length==0){
    //   var emailErr = document.getElementById("emailfild-err");
    //   emailErr.className += " validation-err";
    //   $(this).find(".clearvalue").css("display","block");
    //   return false;
    // }



    // var clearValue = document.getElementsByClassName('clearvalue');


    //Проверим содержит ли значение введенное в поле email символы @ и .
    // at=formEmailValue .indexOf("@");
    // dot=formEmailValue .indexOf(".");
    //Если поле не содержит эти символы знач email введен не верно
    // if (at<1 || dot <1){
    //  alert('valid err email');
    //   var emailErr = document.getElementById("emailfild-err")
    //   emailErr.className += " validation-err";
    //     $(this).find(".clearvalue").css("display","block");
    //   return false;
    // }

    // var formNameValue = document.getElementById('tmessage').value;
    // if (formNameValue.length==0){
    //   var nameErr = document.getElementById("textareafild-err");
    //   // var clearValue = document.getElementsByClassName('clearvalue');
    //   nameErr.className += " validation-err";
    //   return false;
    // }
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

  // $( "#clr" ).click(function() {
  //   $("#email").val('');
  // });

  // $("#firstname").focus(function() {
  //   $("#namefild-err").removeClass("validation-err");
  // });

  // $("#email").focus(function() {
  //   $("#emailfild-err").removeClass("validation-err");
  // });

  // $("#tmessage").focus(function() {
  //   $("#textareafild-err").removeClass("validation-err");
  // });

});
