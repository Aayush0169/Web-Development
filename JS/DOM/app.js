let old=document.getElementsByClassName("oldImg");
for(i=0;i<old.length;i++){
    old[i].src="assets/ultimate-spider.webp";
    console.dir(`image of ${i} is changed`);
}

//chanig Heading Text
let newHead=document.querySelector("h1");
console.dir("Olde heading Was: "+(newHead.innerText));
newHead.innerText="Ayush";
console.dir("New heading is: "+(newHead.innerText));

//changing main img
let chngImg=document.querySelector("#desImg");
console.dir("Old image source was: "+(chngImg.src));
chngImg.src="assets/stan_spider.jpeg";
console.dir("New image source is: "+(chngImg.src));
let main_img =document.getElementById("mainImg");
main_img.src="assets/ultimate-spider.webp";

// changing paragraphs
let para=document.querySelectorAll("p");
// for(i=0;i<para.length;i++){
//    para[i].innerText="Peter Benjamin Parker is a former Midtown School of Science and Technology student who gained superhuman abilities and fought crime across New York City as the superhero Spider-Man. While he juggled his hero duties with the demands of his high-school life, he was recruited by Tony Stark to join the Avengers Civil War, putting Spider-Man into a brief conflict with Captain America. Parker was given a new suit as well as new Stark technology in exchange for his help and was allowed to keep them when he returned home to continue his own hero work."
// }
let list=document.querySelectorAll(".box ul li");
console.dir(list);
for(i=0;i<list.length;i++){
    console.dir(list[i]);
    list[i].style.color="red";
}
//adding new element using javascript
let newp=document.createElement('p');
newp.innerText="This part is added later by using javascript";
let bodytag=document.querySelector('body');
bodytag.appendChild(newp);

// adding image
let newimg=document.createElement("img");
newimg.src="assets/devilSpider.webp";
bodytag.appendChild(newimg);
//adding a class to img
console.dir(newimg.classList);
newimg.classList.add('jsimg');
console.dir(newimg.classList);

// adding to remove
let waste=document.createElement('h1');
waste.innerText="this is a waste";
bodytag.appendChild(waste);

// removing this heading
bodytag.removeChild(waste);


