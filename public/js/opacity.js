let view = Array.from(document.querySelectorAll(".view"));
let product= Array.from(document.querySelectorAll(".img1"));
console.log(product);
let glob=document.querySelector(".productGlob");




glob.addEventListener("mouseover", (e)=>{
    product.forEach(elem=>{
        if(e.target==elem){
            view[product.indexOf(elem)].setAttribute("style", "display :flex");

            
        }
    })
})