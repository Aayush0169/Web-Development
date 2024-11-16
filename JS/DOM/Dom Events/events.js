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