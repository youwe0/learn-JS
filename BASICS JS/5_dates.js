// date is a object in javascript repesent a single event , incapsulate an number represents in milliseconds (ms) since midnight 1 jan 1970. 

// ---------------------------------------->dates 
// gives exact ms till now from 1/1/1970 .
const mDate = new Date()
console.log(mDate);


// to convert date in readable formate . 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


//multiple opration on date to get multiple type of information 
let m = new Date()
console.log((m.getMonth()));
console.log(m.getFullYear());
console.log(m.getDate());
console.log(m.getUTCDate());


// to make our own date and read it in readable formate .
const newDate = new Date(2024, 15 ,8, 10,30)
console.log(newDate.toLocaleString());


// -----------------------------------------> timestamp

// give time in ms from 1970 
let timeStamp = Date.now()
console.log(timeStamp);
// dived log output by 1000 to get time in sec 




