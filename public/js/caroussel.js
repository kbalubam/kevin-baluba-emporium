
// class Caroussel{
//     constructor(element, option={}){
//         this.element=element,
//         this.option=Object.assign({},{
//             slidesToscroll:1,
//             slidesVisible: 1
//         }, option)
//         this.children=[].slice.call(element.children)
//         this.ratio = this.children.length / this.option.slidesVisible
//         this.root =document.createElement('div');
//         console.log(root);
//         this.root.setAttribute("class", "caroussel")
//         let panorama = this.createDivWithClass("caroussel__panorama");
//         // panorama.style.color="red";
//         this.root.appendChild(panorama);
//         console.log(panorama);
//         this.element.appenChild(this.root);
//         this.children.forEach(child => {
//             let item = this.createDivWithClass("caroussel__item");
//             item.style.width=((100/this.option.slidesVisible) / ratio) + "%";
//             item.appenChild(child)
//             panorama.appenChild(item) ;
//         });
        
//     }
//     createDivWithClass(className){
//         let div = document.createElement("div");
//         div.setAttribute("class", className)
//     }
// }











// document.addEventListener('DOMContentLoaded', function(){
//     new Caroussel(document.querySelector(".fashion").querySelector(".caroussel1"),{
//         slidesToscroll:3,
//         slidesVisible: 3
//     })
// })
