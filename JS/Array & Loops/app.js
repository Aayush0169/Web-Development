let student =["ayu","khushi","ankit","carry","ashish","purav"];
let info=["Ayush", "RollNo:" ,1323404,"3rd", 24];
let subarr=[[1,2,4],34,"help"];
subarr[1]=100;
console.log(subarr);

               // Array methods
 //   insertion and deletion         
let arr=["one","two","three"];
arr.push("four"); //for insertion at end of array
arr.pop(); //for deletion at end of array
arr.unshift("zero");//for insertion at start of array
arr.shift();//for deletion at start of array

    //searching
let sprhro=["BATMAN","HULK","THOR","IRONMAN","DAREDEVIL","LOKI"];
console.log(sprhro.indexOf("HULK"));//1
console.log(sprhro.indexOf("LOGAN"));//-1

console.log(sprhro.includes("THOR"));//true
console.log(sprhro.includes("thanos"));//false
 
    //concat(adding/mergin)
  let vln=["THANOS","ZEMO","KNULL","JOKER"] 
  let all=sprhro.concat(vln); 
  console.log(all);

    //splice
//arr.splice(start-no, delete-count, insertion(could be as much as you can))
vln.splice(0,1,"zemo");

let month=["jan","march","july","aug"];
let tictac=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(tictac);

//loops
for(let i=1;i<=10;i++){
    if(i%2!=0){
        console.log(i);
    }
}
//table
// let n= prompt("Enter a number");
// n=parseInt(n);
// console.log("Table Of "+n);
// for(let i=1;i<=10;i++){
//     console.log(n*i);
// }
 console.log("fruits");
// loops with array
let fruits = ["mango","banana","apple","orange","lichi"];
for(i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
// nested loops in nested array
console.log(`Nested Loops In Nested Array:`)
let hero=[["thor", "ironman","loki","bucky"],["superman","batman","flash","aquaman"],["wanda","blackwidow","valkryie","shehulk"],["wonderwoman","catwoman","harleyQuin","superGirl"]]
for(i=0;i<hero.length;i++){
    console.log(`LIST ${i}`)
    for(j=0;j<hero[i].length;j++){
        console.log(j,hero[i][j]);
    }
}
console.log("Another Example")
let marks=[["ayush",8.0],["khushi",9.0],["piyush",9.5]];
for(i=0;i<marks.length;i++){
    for(j=0;j<marks[i].length;j++){
        console.log(marks[i][j]);
    }
}

// for of loop
for(const fruit of fruits){
    console.log(fruit);
}

// nested for of
let heroes=[["batman","superman"],["spiderman","ironman"]];
for(let hero of heroes){
    for(let name of hero){
        console.log(name);
    }
}