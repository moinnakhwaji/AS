const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.04,
});


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
        full.style.top = "-120%"
        cr = 1;
        console.log("not click")
    }
})
gsap.to("#g",{
    x:"45vw",
    duration:1,
    opacity:0.8,
    // scale:1,
})