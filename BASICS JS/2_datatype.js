// js is a dynamically typed language :- means in js we dont have to difine data type in code everywhere 
// their are two types of datatypes in js primitive or non-primitive (refrence type )

// primitive data types are :-  string , number , bigint , boolean , null , undifined , symbol .


// *****************primitive data type ***************************************

// --------------------------------------->string datatype 
let name = "abc "

// string interpolation :- use ` ` to concatinaate or interpolate string 
console.log(`my name is ${name} in am good`);

// declartion of string as a object :- returns a key value pair of this string 
const newstring = new string('hello bdy')

// this will give a single alphabet from string as on the index value given . 
console.log(newstring[0]);

// using {proto} for more opration on string , we use . to add function on string 
console.log(newstring.toUpperCase());
console.log(newstring.split());





//--------------------------------------------->numbers and maths
let age = 25
// integer datatype  stores upto 2 power 53
let num = 3434431667303370373730637.13
// if number is bigger than 2pwr53 than we use big int 

const balance =  new Number(500516303)

// converting a number too string
console.log(balance.toString());

// getting fixed value after decimal 
console.log(balance.toFixed(2));

// addind US standards commas in any number 
console.log(balance.toLocalesString());

// ------------------------------------------->maths 
console.log(Math.ceil(5.2));
console.log(Math.floor(4.5));
console.log(Math.round(4.5));
console.log(Math.min(1,5,12,5));
console.log(Math.min(4,5,6,9));
// their are so many math function which are built in for use 

// maths random  gives only between 0 and 1 . ex :-  0.5, 0.48 ,etc
console.log(Math.floor(Math.random()*10));
// mutiply random value by 10  to get a fixed number 











// ---------------------------------------------------->bollen datatype 
let state = true
let state2 = flase


let number = null 
// null is a datatype but more a stand alone value for any variable , represent a  empty value 

let abc = undefined
// undifined is use when value is not defined 

console.log(typeof abc);
console.log(typeof (abc));
// gives the datatype of variable 

// if we pass null in typef it gives object 
// if we pass undifined in typeof it gives undifined 


//************************* * non premitive memory type ****************************************
// non-primitive or refrence type data types are :- array , object , functions .



// Array is set of elements stored  in a square brackets []. 
const ary = [1,5,3,"mdsdkb", "Dl56"]


// object are stored in pelenthesis {}  
let myobj = {
    name : "abc",
    age : 25,
    email : "abc@123mail.com",
}



// function 
var myfunction =function(){
    console.log("hello world");
}


// *******************************stack & heap***********************************************

// all primitive data type use stack memory data type , means we have a copy of every variable diclared in memory 
let myName = "youwe"


// all non - primitive data type use heap memory , means we get a refrence of every variable .