console.log("Array Methods")
let arr=[23,34,45,56,67,98];
function print(el){
    console.log(el);
}
arr.forEach(print);
console.log("Doubeled array:")
let double=arr.map((el)=>el*2);
console.log(double);
let std=[
    {
        name:"ayus",
        marks:45,
    },
    {
        name:"pyus",
        marks:35,
    },
];
std.forEach((student)=>{
    console.log(student.marks);
});
console.log(std.map((student)=>student.name+" kumar"));
let oddFilter=arr.filter((el)=>!(el%2==0));
let evry=arr.every((el)=>el%1==0);
let reduce=[2,3,5,8,3,5,].reduce((res,el)=>res*el);
let result =[3,2,54,9,7,78].reduce((res,el)=>{
    if(el>=res){
        return el;
    }
    else {
        return res;
    }
})
//spread 
let sprd=[1,2,4,6,8,34,56,89,94];
console.log(...sprd);
let names="AaYUSH";
console.log(...names);
let newspr=[...sprd];
//destructing
let dest=["AYUSH","MANJEET","SATYAM","PIYUSH","JAY","BINOD","DHEERAJ"];
let [first,second,third,...loosers]=dest;