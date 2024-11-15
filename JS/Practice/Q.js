//Qs1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let number =200;
if(number%10==0){
    console.log("Good");
}
else{
    console.log("Bad")
}

// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age)
// name is age years old.

let name= prompt("Enter your name:")
let age= prompt("Enter your age:")
alert(`Your name is ${name} and age is ${age}`)
if(age>=18){
    console.log("You are an adult.")
}

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]
 let num=2;
 switch(num){
    case 1: console.log("First Quater: JAN, FEB, MAR, APR");
    break;
    case 2: console.log("Second Quater: MAY, JUN, JULY, AUG");
    break;
    case 3: console.log("Fourth Quater:SEPT,OCT,NOV,DEC");
    break;
    default: console.log("NULL");
    break;
 }

//  Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let str2="Aayush";
if(str2[0]==="A"||str2[0]==="a"&& str2.length>=5){
    console.log("This is a good string")
}
// Qs5. Write a program to find the largest of 3 numbers.
let a=25;
let b=182;
let c =4;
if(a>=b && a>=c){
    console.log((a)+" is the largest number")
}
else if(b>=a&&b>=c){
    console.log((b)+" is the largest number")
}
else{
    
    console.log((c)+" is the largest number")
}
// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2
let num1=35;
let num2=13;
let last1=num1%10;
let last2=num2%10;
if(last1==last2){
    console.log("Both have same last number.")
}
else{
    console.log("Both haven't same last number.")
}
//        PART 2
//     Qs. For the Give String :
//     let msg"help"
//     Trim it & convert it to uppercase.
let msg=" help!   ";
console.log((msg.trim().toUpperCase()));
        
// Qs7. Separate the "College" part in above string & replace 'l' with 't' in it.
let clg ="ApnaCollege";
slice.clg(-7);
clg.replace("l","T")

//Qs8. For the given start state of an array, change it to final form using splice.
// start :jan,march,july,aug;
// final :july,june,march,aug
let mn=["jan","march","july","aug"];
console.log(month+"hello");

//Qs9. Write a JavaScript function that returns array elements larger than a number.
function largeNum(arr,num){ 
    for(i=0;i<arr.length;i++){
        if(arr[i]>num){
        console.log(`${arr[i]} is greater than ${num}.`);
        }
    }
    }
    largeNum([10,15,20,35],32);
    
    //Qs10. Write a JavaScript function to extract unique characters from a string.
    //Example: str = “abcdabcdefgggh” ans = “abcdefgh”
    function uniquEchaRchecK(str){
        let ans="";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
        ans += currChar;
        }
        }
    return ans;}
        uniquEchaRchecK("aabyyysdfghhhweee");
    

    