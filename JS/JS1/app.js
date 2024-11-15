// alert("THIS IS JS");
console.log("Ayush")
let num1= 15;
let num2= 20;
let total=num1+num2
// Template literals
let sum=`The sum is ${total} rs.`
console.log(sum);
// Conditional Statements
let age=prompt("Enter your age");
if(age>="18"){
    console.log("You can vote")
}
if(age>="21"){
    console.log("You can Drink")
}
// if statement
let color ='green';
if(color==='red'){
    console.log("Stop Light color is:"+ (color))
}
if(color=== 'yellow'){
    console.log("Slow down the light color is:"+(color))
}
if(color=== 'green'){
    console.log("Go the light color is:"+(color))
}
//  else if:

if(age>="18"){
    console.log("You are an adult");
}
if(age>="21"){
    console.log("You can drink");
}
else if(age<"18"){
    console.log("You are not adult");
}
// popcorn price
let size="XL";
if(size==="S"){
    console.log("The price is:"+"50")
}
else if(size==="M"){
    console.log("The price is:"+"100")
}
else if(size==="L"){
    console.log("The price is:"+"150")
}
else if(size==="XL"){
    console.log("The price is:"+"200")
}
else{
    console.log("Enter valid option!")
}
let abc="antimetal";
if(abc[0]==="a" && abc.length>=5){
    console.log("This is a good string")
}
else{
    console.log("This is not a good string")
}

// switch statment
let day= prompt("Enter a number: ");
switch (day){
    case "1": console.log("Monday");
    break;
    case "2": console.log("Tuseday");
    break;
    case "3": console.log("Wednesday");
    break;
    case "4": console.log("Thursday");
    break;
    case "5": console.log("Friday");
    break;
    case "6": console.log("Saturday");
    break;
    case "7": console.log("Sunday");
    break;
    default: console.log("Not a day")
    break;
}