//        Mouse Events
//funtion for generating a color when button is clicked
let btn=document.querySelector("button");
function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}
let div=document.querySelector("div");
btn.addEventListener("click",function(){
    let h4=document.querySelector("h4");
    let randomcolor=getrandomcolor();
    h4.innerText=randomcolor;
    div.style.backgroundColor=randomcolor;
})

//using "this" for event handeling
//adding single function on multiple elements

let h2 =document.querySelector("h2");
let h5=document.querySelector("h5");
let h4=document.querySelector("h4");
let backgroundcolor=function(){
    this.style.backgroundColor="#8CB9BD";
}
h2.addEventListener("dblclick",backgroundcolor);
h5.addEventListener("dblclick",backgroundcolor);
h4.addEventListener("dblclick",backgroundcolor);
