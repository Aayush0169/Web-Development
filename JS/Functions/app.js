function helloWorld (){
    for(i=0;i<5;i++){
    console.log("HEllo Dunia");
    }
}
helloWorld();
console.log("A POEM:");
function printPoem(){
    console.log("How Happy Is The Blameless Vestal's Lot");
    console.log("The World Forgetting, By The World Forgot");
    console.log("Eternal Sunshine Of The Spotless Mind");
    console.log("Each Pray’r Accepted, And Each Wish Resign’d");
    console.log("___Ayush");
}
console.log("type printPoem() to see a poem");
console.log("A dice roll:");
function diceRoll(){
    console.log(Math.floor(Math.random()*6)+1);
}
diceRoll();

// function with arguments (values)

console.log("Printing name and info:");
function info(name,age){
    console.log(name,age);
}
info("ayush",20);

console.log("An average of three numbers:");
function avgOfThreeNo (a,b,c){
    let sum=a+b+c;
    let avg=sum/3;
    console.log(Math.floor(avg));
}
avgOfThreeNo(2,2,6);

console.log("A Table:");
function numberTable(n){
    for(i=1;i<=10;i++){
        console.log(n*i);
    }
}
numberTable(5);
//return keyword
function Return(a,b){
    return a+b;
}
console.log("Returned value wont be shown until you log it")
Return(1,5);
console.log(Return(3,5));

let sum=0;
function sumTillN(n){
    for(i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

//function for concation of strings
let str=["hi ","i ","am ","ayush"];
function concat (str){
    let result="";
    for(i=0;i<str.length;i++){
        result+=str[i];
    }
    console.log("Concated string:");
    console.log(result);
}
//high order functions

function oddEven(req){
    if(req=="odd"){
        let odd= function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(req=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong Request");
    }
}
let req="odd";//even

let greet= function(){
    console.log("hello");
}
function multiGreet(func,count){
    for(let i=1;i<=count;i++){
        func()
        
        
    }
}

//mrthods
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    dvision:function(a,b){
        return a/b;
    },
}

//"this keyword"
const result={
    name:"Ayush",
    roll:1323405,
    sub1:89,
    sub2:88,
    sub3:67,
    sub4:93,
    finalResult:function(){
        totalNo=this.sub1+this.sub2+this.sub3+this.sub4;
        prcnt=totalNo*100/400;
        console.log(prcnt +"% is the final result");

    }
}
//try & catch
try {
    console.log(hdscv);
}
catch(err){
    console.log("error");
    console.log(err);
}
//arrow functions
const arro= (a,b) => {
    return a+b;
}
//default parameters
function def(a,b=4){
    return a+b;
}



//Asynchronised function: using "Promise" object

function saveDb(data){
    return new Promise((resolve,reject) =>{
        let speed=Math.floor(Math.random()*10);
        if(speed>=4){
        resolve("saved");    
        }
        else{
        reject("slow speed");
        }
    })
    }
    
    saveDb("xyz")
    .then( ()=>{
        console.log(` the data is saved`);
        return saveDb()
        .then(()=>{
            console.log("data 2 is saved");
        })
        .catch(()=>{
            console.log("unfortunately the second data coudn't be saved")
    
        })
    })
    .catch(()=>{
        console.log("unfortunately the data coudn't be saved")
    
    })
