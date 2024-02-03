const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.04,
});


// gsap 
gsap.to("#g",{
    x:"45vw",
    duration:1,
    opacity:0.8,
    // scale:1,
})



let full = document.querySelector(".full-scr")
let menu = document.querySelector(".nav h3")
//  var cancel = document.querySelector("#cancel") 
var cr = 1;
menu.addEventListener("click",function(){
    if(cr==1){
        full.style.top = 0
        cr = 0
    }
    else{
        full.style.top = "-100%"
        cr = 1;
        console.log("not click")
    }
})


function slide(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    
      });
}
slide()
// Wait for the DOM content to be fully loaded
// Wait for the DOM content to be fully loaded


