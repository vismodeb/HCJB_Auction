$(document).ready(function(){
  // main mercedes contain
  $('.main_mercedes_contain').owlCarousel({
    loop:true,
    nav:false,
    margin:30,
    center: true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
      0:{
        items:2
      },
      575:{
        items:3
      },
      767:{
        items:6
      }
    }
  });
});