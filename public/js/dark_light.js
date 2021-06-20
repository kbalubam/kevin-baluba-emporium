let buttonDar = document.querySelector(".dark");
let buttonLight=buttonDar.nextElementSibling;
let ul =Array.from(document.querySelector(".liste").querySelectorAll("a"));
let titre=document.querySelector("h1");
let titreShopping=document.querySelector(".titredl");
let titreCarousseul=document.querySelector("#titre");

let header = document.querySelector("header");

buttonDar.addEventListener("click", (e)=>{
    e.preventDefault()
    document.body.style.backgroundColor="black";
    titreShopping.style.color="white";
    titreCarousseul.style.color="white";
    
    header.style.backgroundColor="black";
    ul.forEach(ele=>{
        ele.style.color="white";
    })
    titre.style.color="white";
});
buttonLight.addEventListener("click", (e)=>{
    e.preventDefault()
    document.body.style.backgroundColor="white";
    titreShopping.style.color="black";
    titreCarousseul.style.color="black";
    header.style.backgroundColor="white";
    ul.forEach(ele=>{
        ele.style.color="black";
    })
    titre.style.color="black";
})