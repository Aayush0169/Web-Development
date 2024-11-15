    // Qs1. Write a JavaScript function that accepts a list of country names as input and
    // returns the longest country name as output.
    // Example : country = ["Australia", "Germany", "United States of America"] output :
    // "United States of America"
    let country=["USA","Canada","India","UAE"];
        function longestName(country) {
        let ansIdx = 0;
        for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
        ansIdx = i;
        }
        }
        return country[ansIdx];
        }
        longestName(country);
    
    //  Qs2. Write a JavaScript function to count the number of vowels in a String
    //  argument.
    let str = "howisit";
    function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (
    str.charAt(i) == "a" ||
    str.charAt(i) == "e" ||
    str.charAt(i) == "i" ||
    str.charAt(i) == "o" ||
    str.charAt(i) == "u"
    ) {
    count++;
    }
    }
    return count;

    }
    // Qs3. Write a JavaScript function to generate a random number within a range
    // (start, end)
    function getRandomNumber(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }
    //arrow fun for sqr of n
     const sqr= n=> n*n;
     
    //  arrow fun for printing 5 time delay of 2s
    let id=setInterval((()=>{
        cons0le.log("hello world")
    }),2000)
    
    setTimeout((()=>clearInterval(id)),10000);//for stop execution after a time
    
    //Qs4 . Write an arrow function named arrayAverage that accepts an array of numbers
    // and returns the average of those numbers.
    const ArrayAvg=arr=>{
        let total=0;
        for(number of arr){
            total+=number;
        }
        return total/arr.length;
    }
    
    // Qs5. Write an arrow function named isEven() that takes a single number as argument
    // and returns if it is even or not.
    const even=n=>n%2==0;
    
    //Check if all numbers in our array are multiples of 10 or not.
    let arrMulbY10 = arr=>arr.every((el)=>el%10==0);
    
    
    //Create a function to find the min number in an array.
    let minarr =(arry)=>arry.reduce((min,el)=>{
        if(el<=min){
            return el;
        }
        else{
            return min;
        }
    })

// Q6.Square and sum the array elements using the arrow function and then find the
// average of the array.
let tasks=(arr)=>arr.reduce((res,el)=>{
    let sum=res+el;
    let avg=sum/arr.length;
   console.log("Sum is " + sum);
   console.log("Average is "+avg);
   let sqr=arr.map((el)=>el*el);
   console.log( `The square of each elements are:${sqr} `);
});

//Qs7. Create a new array using the map function whose each element is equal to the
// original element plus 5.
let arr5=(arr)=>{
   let res= arr.map((el)=>el+5);
   console.log(res);
}

//Qs8. Create a new array whose elements are in uppercase of words present in the
//original array
function upperArray(arr){
    let res=arr.map(arr=>arr.toUpperCase());
    console.log(res);
}

//Qs9. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled
function doubleAndReturn(arr,...args){//an array and other erguments  
    const doubledArgs = args.map(arg => arg * 2);
    return [...arr, ...doubledArgs];
}

// Qs10. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.
function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
