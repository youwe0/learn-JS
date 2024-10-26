let a = 1+"1"
console.log(a);

console.log(typeof a);

let new_a = Number(a)
console.log(typeof new_a ," data type converted")


// if the output is NaN then it means the conversion is done but the initial value is not a number or string or either mixed value 
// when conversion is not possible then output is NaN which holds the value of number 

let b = "wkjvwh"
let b2 =Boolean(b)
console.log(b2);
//  if we convert anything in boolean it will give true or false , if the data is empty then we get false otherwise we will get true .




// if we add two diffrent type of data and print it it basically performe a automatic conversition 
console.log("2"+2+2)
// it will give a string having value of 222 . if string is first in this type of scenerio all the output is set to br in string .

console.log(2+2+"2")
// now it will performe the opration first then add with the given string . and output is 42 . 