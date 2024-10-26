// array is a object which stores mutiple items in single variable . 
// arary in javascript are ri-sizeable . 
// index of array id start from 0 .
// array copy opratoion creates shallow copy (object whose properties share the same refrence point )


// ---------------------------------------->declaretion of array .

const myArray = [1,2,3,4,5]
const newArray = new Array(1,2,3,"mj")


// ---------------------------------------->opration in array

myArray.push(10)
// insert parameter in last of aaray 
myArray.pop()
// delete last element 
myArray.shift()

myArray.unshift(5)
// add parameter at 0th index and shift all elements back .
myArray.includes(10)
// helps to ask parameter to find element inside the aaray  else return boolean .
myArray.indexOf(10)
// gives index value of element or return boolean (-1)
myArray.join()
// bind all the element of aaray in a string , 
myArray.slice(1,3)
// give all element between range , but didnt change original array .
myArray.splice(1,3)
// splice dont include range and modify the main aaray 




// ------------------------------------------->advance array functions

myArray.push(newArray)
console.log(myArray);
// if we push a array with another array it gives array inside a array , insted of merging them .

const n_array = myArray.concat(newArray)
console.log(n_array);
// if we concate a array with another array it returns a new array containg all elements from both array . 

const n2_array = [ ...myArray, ...n_array]
console.log(n2_array);
// this is another way of doing concatination in array also known as spreding of aaray , majorly in practice .

const any_array = [1,2,3,[1,2,4],4,6,[4,[1,2,3,4,5,5,6,7,8,9]]]
const real_array = any_array.flat(3)
console.log(real_array);
// flat is use when we want all the element in a single array when their is a complex array situation in any aaray. 


console.log(Array.isArray("youwe"));
console.log(Array.from("youwe")); 
// from makes any type of data an array , but if we pass a object or key value pair to from() it cant convert it to array and return empty aary[] , we have to pass condition to whome we have to make array from key and value .


s1 = 100
s2 = 200
s3 = 300
console.log(Array.of(s1,s2,s3));
// by using array.of()  we can make multiple set of element/variables  an aaray  


