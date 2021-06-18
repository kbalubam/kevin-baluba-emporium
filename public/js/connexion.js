let btnConexion = document.querySelector(".connex");
let btnClose= document.querySelector(".title").querySelector("button");
let btnConexion2= document.querySelector(".connInsp").querySelectorAll("button")[0];
let btnInscription= document.querySelector(".connInsp").querySelectorAll("button")[1];
let DivPop=document.querySelector(".pop-upp");
let form2= document.querySelectorAll("form")[1];
let form1= document.querySelectorAll("form")[0];

console.log(DivPop);

btnConexion.addEventListener("click", (e)=>{
    e.preventDefault();
    DivPop.setAttribute("style", "display:block")
    btnClose.addEventListener("click", ()=>{
        DivPop.setAttribute("style", "display:none");
    })
    btnInscription.addEventListener("click",()=>{
        form2.setAttribute("style", "display: block");
        form1.setAttribute("style", "display:none");
    })
    btnConexion2.addEventListener("click", ()=>{
        form2.setAttribute("style", "display: none");
        form1.setAttribute("style", "display:block ");
    })

})






