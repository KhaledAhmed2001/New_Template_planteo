$(document).ready(function (){
$(".navbar .nav-item.dropdown").click(function(){
    $(this).toggleClass("show").sib
})


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

