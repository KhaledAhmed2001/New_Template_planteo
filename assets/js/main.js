$(document).ready(function(){
    // navbar DropDown
    $(".navbar .nav-item.dropdown").click(function(){
      $(this).toggleClass("show")
    })
    $(window).scroll(function(){
      let wScroll = $(window).scrollTop()
      if (wScroll >= 100){
        $(".btnTop").addClass("active")
      }
      else{
        $(".btnTop").removeClass("active")
      }
      $(".btnTop").toggleClass("active" , $(this).scrollTop() >100 )
      $(".navbar").toggleClass("navScroll" , $(this).scrollTop() >100 )
  
    })
  
    // btn scroll top
    $(".btnTop").click(function(){
      $("html , body").animate({scrollTop:0}, 1000)
    })
  
//     // loding
    $(".loding").fadeOut(3000)





// $(document).ready(function (){
// $(".navbar .nav-item.dropdown").click(function(){
//     $(this).toggleClass("show").sib
// })


$(".navbar .closeIcon").click(function(){
    $(".navbar-collapse").animate({"right":"-30rem"},100)
    $(".navbar-collapse").removeClass("show");
})
})
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").animate({"right":"0rem"},100)
    $(".navbar-collapse").removeClass("show");
})
    $('.project .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

    $('.team .owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            loop:true,

            },
            600:{
                items:2,
                nav:false,
                loop:true,

            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

    $('.brand .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    })