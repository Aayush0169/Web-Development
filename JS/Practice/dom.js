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
h1.innerText=" inside a div";
div.insertAdjacentElement("afterbegin",h1);

let paradiv=document.createElement('p');
paradiv.innerText="me too";
div.insertAdjacentElement("beforeend",paradiv);

//practice Qs

//Qsl. Create a new input and button element on the page using JavaScript only. Set the
//text of button to "Click me'
let btn=document.createElement('button');
btn.innerText="Click me";
let input=document.createElement('input');
body.append(btn);
body.append(input);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
input.setAttribute("placeholder","username");
btn.id=("id","btn");


//Qs3. Access the btn using the querySelector and button id. Change the button background
//color to blue and text color to white.
let objbtn =document.querySelector("#btn");
objbtn.style.backgroundColor="blue";
objbtn.style.color="white";

// Qs4. Create an hl element on the page and set its text to "Dom Practice" underlined.
// Change its color to purple.
let heading=document.createElement('h1');
heading.innerText="DOM Practice";
heading.style.textDecoration="underline";
heading.style.textDecorationColor="crimson";
body.insertAdjacentElement('beforebegin',heading);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
let para2=document.createElement('p');
para2.innerHTML="<p>Learning <b>Web Devlopment</b></p>"
body.insertAdjacentElement('beforebegin',para2);

// Qs6.Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
let bttn=document.querySelector("#bttn");
bttn.addEventListener("click",()=>{
    bttn.style.backgroundColor="green";
})

// Qs7. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]
document.getElementById('nameinput').addEventListener('input', function() {
    const filteredInput = this.value.replace(/[^a-zA-Z ]/g, ''); // Only allow letters and spaces
    document.getElementById('nameHeading').textContent = filteredInput;
});
