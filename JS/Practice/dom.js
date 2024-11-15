let body=document.querySelector('body');

let para=document.createElement('p');
para.innerText="Hey i am red";
body.append(para);
para.style.color="red";

let h3=document.createElement('h3');
h3.innerText="i am blue but h3";
h3.classList.add("blue");
body.append(h3);

let div=document.createElement('div');
div.classList.add('div');
body.append(div);

let h1=document.createElement('h1');
h1.innerText="I am inside a div";
div.insertAdjacentElement("afterbegin",h1);

let paradiv=document.createElement('p');
paradiv.innerText="me too";
div.insertAdjacentElement("beforeend",paradiv);

