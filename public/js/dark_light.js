let buttonDar = document.querySelector(".dark");
let buttonLight=buttonDar.nextElementSibling;
let ul =Array.from(document.querySelector(".liste").querySelectorAll("a"));
let titre=document.querySelector("h1");


let header = document.querySelector("header");

buttonDar.addEventListener("click", (e)=>{
    e.preventDefault()
    document.body.style.backgroundColor="black";
    
    header.style.backgroundColor="black";
    ul.forEach(ele=>{
        ele.style.color="white";
    })
    titre.style.color="white";
});
buttonLight.addEventListener("click", (e)=>{
    e.preventDefault()
    document.body.style.backgroundColor="white";
    
    header.style.backgroundColor="white";
    ul.forEach(ele=>{
        ele.style.color="black";
    })
    titre.style.color="black";
})