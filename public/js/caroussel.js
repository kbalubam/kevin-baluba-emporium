let carosse = document.getElementById("container");
let btn0 = document.getElementById("pos0");
let btn1 = document.getElementById("pos1");
let btn2 = document.getElementById("pos2");
let btn3 = document.getElementById("pos3");

btn1.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-360px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s";
    console.log("test");
});
btn2.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-760px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s";
});
btn3.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-1360px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s"
});
btn0.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(0px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s"
});
