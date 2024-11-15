const instagram = {
    name:"aayu",
    username:"a4yu11sh",
    followers:169,
    following:100,
};
console.log(instagram);
// nested objects
console.log("Nested Objects");
const obj={
  obj1:{
    name:"ayush",
    roll:12
  },
  obj2:{
    name:"khushi",
    roll:13
  },
  obj3:{
    name:"ashish",
    roll:14
  }
};
console.log(obj);

//
console.log("array of objects")
const info=[
  {
    name:"thor",
    number:11,
    add:"asgard"
  },
  {
    name:"ironman",
    number:3000,
    add:"california"
  },
  {
    name:"spiderman",
    number:13,
    add:"newy-york"
  }
]
console.log(info);

//  Math objects
//spread 
const info2={
  movie:"OPPENHIEMER",
  director:"NOLAN",
  lead:"CILLIAN MURPHY"
};
let advncinfo={
  ...info2,oscar:"RDJ",music:"Ludwig Göransson"
};
console.log("Copy of an object");
console.log(advncinfo);

//rough
function name(...fdmi){
  return fdmi.reduce((res,el)=>res+el)
}

const student={
  name:"ayus",
  roll:1323405,
  sex:0,
  gender:"m",
  subs:["BCA-302","BCA-304","BCA-307"],
  remarks:8.9
}