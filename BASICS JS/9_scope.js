// --------------------------------------------------scope {} .

let  a= 10
const b= 20
var c=30
// if we directly log these variables they will run directly , but the twist is in using them inside a function .

function printvalue(){    
let  a= 10 //let will not print anything , becouse of scope of function is not allowing it to run out side of function 
const b= 20 // same as let const will not print anything , let and const allow variable to use in local scope / or with in the function .
var c=30 // var will run out side the function , ignoring scope of function . var allow to use variable at global scope 
}

console.log(a);
console.log(b);
console.log(c);



// ------------------------------------>nested scope.

function one(){
    const user = "youwe" //bigger scope cant use smaller scopes variable .

    function two(){ // smaller scope can use variable from bigger scope .
        const naam = "meraname"
        console.log(user)
        
    }
    console.log(naam);
    two()

}
one()



// HOISTING is a concept in js which insure the position of declaertion of function and variables 

addone(2)
function addone(num){
  num +1
}
// if we declare a function normally we can call it anywhere ,



addTwo(2)
const main =function addTwo(num){
  num +1
}//but if we declared a function iin variable and call it before declaretion , it gives error .

