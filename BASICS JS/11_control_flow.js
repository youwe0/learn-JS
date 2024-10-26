// ------------------------------>conditional statment. use to ensure running of part of code on condition basis.

//-----------------------------------------> if statment .  
if("condition is true"){
    "scope is executed"
}
// -----------------------------------------> else statment .
else{
    console.log("else runned");
    
}



// ----------------------------------->scope in conditional statment .
// alwayes ensure that variable is not going to use outside the scope of condition . use let and const insted .


// shorthand notation  or implicite scope 
if("statment") console.log("hello");












// -------------------------------------->nested condition check 
let score = 5000
if(score > 10000){
 console.log("less than 10000");
   
}else if(score <1000){
    console.log("more than 1000");
    

}else{
    console.log("score is 5000");
    
}



















//using multiple parametr in one statment .  (and oprator)
{const userlogin =true 
const payed = true

if (userlogin && payed ){ // we can use "&&" as "and" oprator to check mutiple parameter in one line .
    console.log("allow shopping");
    
}else{
    console.log("not allowed");
    
}}

//using multiple parametr in one statment .(or oprator)
const userlogin =true 
const payed = true

if (userlogin || payed ){ // we can use "||" as "or" oprator to check mutiple parameter in one line .
    console.log("allow shopping");
    
}else{
    console.log("not allowed");
    
}
// nullish coalesing oprator (??) focused on "null" or "undifined" keywords 
let val1 ;
val1 = null??10
console.log(val1);













// --------------------------------------------->switch case
// use to check multiple satatement in one context ussing a key 
switch (key) { // key is a value for variable .
    case value:
        
        break; // break use to break exicution of code after true condition 

    default:
        break;
} // basic syntex for switch case 




month = 6
switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;

    default:
        console.log("mounth not found");
        
        break;
}




    

//" truely or falsy values" are value which are not taken as true and false but considered as true or false 

// truthy values :- true , "0" , "false" , " ", {}, function(){} , anything not false is true 
// false value :- false , 0 ,-0 , 0n in bigInt , "", null ,undified , NaN .