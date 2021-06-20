let titrePosition = document.querySelector("h1").offsetTop;
let header =document.querySelector("header");
let enTe= document.querySelector(".en-te");




window.addEventListener("scroll", ()=>{
    if(window.scrollY>= titrePosition){
        enTe.setAttribute("style", "display :flex; align-items : center");

        
        
    }else if (window.scrollY < titrePosition){
        enTe.setAttribute("style", "display :block");
    }
})