$(function(){

    $('.bike__slider, .bike__slider-bottom').slick({

        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 339,
              settings: {
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
          ]
    });

   

});