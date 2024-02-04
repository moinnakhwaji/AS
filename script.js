const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function pageanimation(){
var jaadu = document.querySelector(".jaadu");
var elemconatiner = document.querySelector(".elemconatiner");
elemconatiner.addEventListener("mouseenter",function(){
    jaadu.style.display = "block";
})
elemconatiner.addEventListener("mouseleave",function(){
    jaadu.style.display ="none";
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
var image = e.getAttribute("data-image")
jaadu.style.backgroundImage = `url(${image})`
})
})
}
function slide(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    
      });
}
function loader(){
   var loader = document.querySelector(".loader")
    setTimeout(function(){
loader.style.top ="-100%"
    },4000)
}
slide()
pageanimation()
loader()
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


