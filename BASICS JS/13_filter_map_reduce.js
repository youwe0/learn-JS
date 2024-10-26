// --------------------------------------------------------> filter 
// The filter() method of Array instances creates a shallow copy of a bportion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const numbers = [1,2,3,4,5,6,7,8,9,10]
let newnum= numbers.filter( (num) => num >4)
console.log(newnum);

// use of filter method 
// use to filter array recieved from database  , in object and array form .
example 
// let a array books having multiple object of books detail 
const userbook = books.filter( (book) => book.gener === "fiction") // this line filter all books from dataset having gener of fiction 











// ------------------------------------------>MAP
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);  // rewritting in map . 
console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

// --------chaining in map . :- using mutiple method in one line is chaining . 
const newmap = map1.Map("opration 1 ").map("opration 2 ").filter("opration 3 ")
// each new opration have the input of privious output . 












// ----------------------------------------------->   reduce
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10