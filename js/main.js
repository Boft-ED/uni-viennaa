$(document).ready(function () {
    // Анимация чисел 
    var isAnimated = false;
  
    function animatePrice() {
      $('.facts__number').spincrement({
        thousandSeparator: "",
        duration: 2500
      });
      isAnimated = true;
    }
    if($('#facts').length>=1){
      $(window).scroll(function () {
          var scroll = $(window).scrollTop() + $(window).height();
          var statTop = $("#facts").offset().top;
  
          if (scroll > statTop && isAnimated == false) {
              animatePrice();
          }
        });  
    }
    // Появление шапки 
    $(window).on("scroll", function () {
        var wn = $(window).scrollTop();
        var nav = $(".header-bottom").offset().top;
        if(wn > $(".header-bottom").height() * 2){
            $(".header-bottom").css("position", "fixed");
            $(".header-bottom").css("width", "100%");
            $(".header-bottom").css("top", "0");
            $(".header-bottom").css("left", "0");
            $(".header-bottom").css("transition", ".5s");
            $(".header-bottom").css("box-shadow", "0px 0px 14px 2px rgba(34, 60, 80, 0.2)");
            $(".header-bottom").css("z-index", "999");
            $(".header-bottom").css("animation", ".3s ease-in-out 0s normal none 1 running fadeInDown");
            $(".header-bottom").css("animation-name", "fadeInDown");
        }else{
            $(".header-bottom").css("position", "relative");
            $(".header-bottom").css("animation-name", "none");
        }
    });

    // Появление кнопки  
    $(window).on("scroll", function () {
        var wn = $(window).scrollTop();
        var nav = $(".header-bottom").offset().top;
        var i =0;
        if(wn > $(".header-bottom").height() * 6){        
            $(".back-to-top-btn").css("animation", ".6s ease-in-out 0s normal none 1 running fadeInLeft");
            $(".back-to-top-btn").css("animation-name", "fadeInLeft");
            $(".back-to-top-btn").css("right", "30px");
        }else{
            i++;
            if(i>1){
                $(".back-to-top-btn").css("animation-name", "fadeInRight");
                $(".back-to-top-btn").css("animation", ".6s ease-in-out 0s normal none 1 running fadeInRight");
            }
            $(".back-to-top-btn").css("right", "-60px");
            
        }
    });


    // Отправка формы 
    $('form').submit(function( event ) {

        event.preventDefault();

        $.ajax({
            type: $(".order-form").attr('method'),
            url: $(".order-form").attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,       
            success: function(result){
                //alert("Отправка формы прошла успешно!");
            }
          });              
    });
});