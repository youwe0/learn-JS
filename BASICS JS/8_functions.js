// function is a chunk of code which can be taken in use , anytime anywhere without writting code multiple time , function return a value using return keyword , function dont excute any line written after "return" keyword .
// if we store function in a variable and try to use/print it it gives undifined .

// parameter : are those variables which are declared with function declaraation .
function addTwo(a,b){} // a,b are the parameters of function .

// arguments : are those input which are provided on function exicution .
addTwo(1,2) // 1,2 are the inputs on which functions have to work .
// if we dont give any argument to function , then it gives undifined .


// ----------------------------->making a function 
function funName()
       {console.log("hello world");
    }

// ----------------------------->using a function 
funName // if we write only name of function then it said the refrence of function .
funName() //if we use () with name of function then it is exicution of function . 
 

// if user is passing a unknown number of argument then we can use rest or spred oprator in parameter .
function count(...counter){
    return counter
    //rest oprater returns a array of input parameters . 
}
console.log(count(1,2,23,3,5));





// using object in functions  we can use any data type in function .
var myobj = {
    name:"youwe",
    number:1234,

} 
function objectfunc(objectName){
    console.log(`username is ${myobj.name} and id is ${myobj.number}`);
    
}
objectfunc(myobj) // we can pass any object and array ddirectly in argument .







// "this" is  a keyword use to refer any variable in current contaext  .
const user ={
    name :"youwe",
    class:12,
    
    newMail:function msg(){
        console.log(`${this.name} , hello `); //this means current context 
        console.log(this);
        
    }
}

console.log(this); //if we pass this outside the scope it returns {empty} in node , and windows in browser .
console.log(user);




// -------------------------------------------------------------------> arrow function . 
// arrow function is a new feature of javascript introduced in es6 of js . 
const chai = () => {  // making a arrow function .
    console.log("hello");
    
    }




    

// ------------------------------------------------>IIFE - imediatellt   invoke function expression 
(function coding(){
    // named iife 
    console.log("code is done ");
    
})  // we have to wrape our function in a () to avoid global scope intruption on function . 
();



(() => {
    // un-named iife .
}

)()

// in case of error occourence in function exicution we have to use " ; " after the function to declare termination of function .