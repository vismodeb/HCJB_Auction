// $(document).ready(function(){
//     // all testmonial gallery
//     $('.main_mercedes_contain').owlCarousel({
//         loop:true,
//         nav:false,
//         margin: 40,
//         center:true,
//         autoplay:true,
//         responsive:{
//             0:{
//                 items:2
//             },
//             575:{
//                 items:3
//             },
//             767:{
//                 items:4
//             },
//             1000:{
//                 items:6
//             }
//         }
//     });
// });

$(document).ready(function(){
    $('.main_mercedes_contain').owlCarousel({
      loop:true,
      nav:false,
      margin:40,
      center:true,
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
          items:3
        },
        991:{
          items:6
        }
      }
    });
  });