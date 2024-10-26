// loops or itration is use to execute any statment or code mutiple time on basis of condition or digits .


// -----------------------------------------------> for loop
for (let index = 0; index < array.length; index++) {  // range to itrate 
    const element = array[index]; // execution code 
    
}



// -------------------------------------------------->nested loops 

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
      console.log(`inner loop ${j} and outer loop i is ${i}`);
      }    
  }




// ------------------------------------------------->loops on array 
let myArray = ["ram","shayam","ghanshaym"] 
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}  

























// ------------------------------------------------------------------------------------>break and continue 

// break
for (let index = 1 ; index <= 20; index++) {    
    if (index == 5) {
        console.log("detected 5 ");
        break   // break statment terminates statment on satisfying conditions .
    }
  console.log(`value of index is ${index} `);    
}



// continue
for (let index = 1 ; index <= 20; index++) {    
    if (index == 5) {
        console.log("detected 5 ");
        continue
    }
  console.log(`value of index is ${index} `);    
}































// ---------------------------------------------------------->while loop 
let index =0
while ( index <= 10) { // code runes when  condition is true . 
  console.log(`value for insex is ${index}`);
  index = index +2 
}

myArray = [ 23,25,254 ,48, 45]
let i = 0
while (i<myArray.length) {
  console.log(`value of i is ${myArray[i]}`);
  i =i+1
  
}


// -------------------------------------------------------------->dowhile loops 
let score = 0
do { // checks condition at last and do work first .  
  console.log(`score is ${score}`);
  score++
  
} while (score <= 10);























//-------------------------------------------------------------------------------> high order array loops  
// these are array sppecific loops 

let arr = [1,2,3,5]
for (const element of arr) { // forof loop
  console.log(element);// we have to pass our object/element simpaly in loop it 
  
}

let str = "hello world "
for (const element of str) { //forof loop 
  console.log(`elements of string are ${element}`);
  
  
}

//---------------------------------------------------------------->  maps  & forin loops 
const map = new map() //map is a object in JS holds key value - pair and remember the original insertion order of key value . not having dunlicate value 
 

for (const key in object) { // forin loop 
  if (Object.prototype.hasOwnProperty.call(object, key)) { // delet this scope while using this loop 
    const element = object[key];
    
  }
}
// if we want to itrate a map we can use "forof " but forof not itratable on objects , so we have to us "forin" in that case.
// if we use "forin" on array to get keys it gives index values of array 

// ------------------------------------------------------------------------------->foreach loop .
// foreach loop have variable , index , array list as parameter 
const codeing =["js " ,"python" ,"cpp" , "rust"]

codeing.forEach( function (item){ //by using callback function " function without name " .
  // console.log(item);
  
})

codeing.forEach((item) => { // by using arrow function .
   console.log(item)
})

codeing.forEach( printer) // by using function refrence .

function printer(item){
  console.log(item);
}



// this practice uses when we have to perform loops on database return data like in a object and array 
const coding =[
    {
      name:"abc",
      number:2
    },
    {
      name:"abc",
      number:2
    },
    {
      name:"abc",
      number:2
    }
  ]
  coding.forEach((item)=>{  // performing loop io objects inside a array 
    console.log(item.name);
    
  })















