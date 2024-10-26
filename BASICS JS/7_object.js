// object is a data sturcuture which stores data in key value pairs , object_name= {key:value} , obejcts are used in API data .

// --------------------------------------------------creating object by litrals 
let mysymbol = "hello" // symbol is created to use in below object 

const user ={
    // we can add any kind of data in object 
    name:"youwe",
    age : 25,
    mail:"mail.com",
    "myname":"yuvraj",
    
    // if we are addind a symbol in object theen we have to declare it in a []
    [mysymbol]:"myname",
}

// getting object data 
console.log(user.age); // works but not traditional .
console.log(user.mail);// if any key is difined as string then this method should be used [ ].
console.log(user["myname"]);
console.log(user[mysymbol]);// getting a symbol is mendatory to have []




//------------------------------------------------------> creating object by using constructor .
// singleton means it has only one object of this type , and if we diclare a object as litral then it is not a singleton .
const oneuser = {}
oneuser.id ="123zbc"
oneuser.name="abcdef"
oneuser.isLoggedIn = false





// ------------------------------------------------------------------------------>opration on objects .

// combining object 
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 3:"d"}

const obj3 = {obj1,obj2}//gives object in object or nested object .
console.log(obj3); 

const obj4 = Object.assign(obj1,obj2) // create a new object holding all elements in a single object .
console.log(obj4);

const obj5 = {...obj1,...obj2}// gives a spreding object same reslt as obj4 . 
console.log(obj5);




// additional opration on object .

// getting object keys and values in a array 
console.log(Object.keys( "object name here"));
console.log(Object.values( "object name here"));
console.log(Object.entries( "object name here")); //this is use for getting array inside a array and each sub-array is keyvalue pair itself .

// this ask a question to object  "that is object is having this property or not "   return boolean .
console.log(Object_name.hasOwnProperty('property name'));


// if we have a array set of objects (we got this type of data from server side) then we can use index value of object inside array .
var users =[
    {
        name:"abc",
        id:123,

    },
    {
        name:"abc",
        id:123,

    },
    {
        name:"abc",
        id:123,

    },
    {
        name:"abc",
        id:123,

    }
]
console.log(users[1].name);




//-------------------------------------------------------------------------------> disturcturing  an object ( learn in react).


// dfrnc between object and JSON is that----> 1-object have its name JSON dont.   2-JSON have all keys as string obejct dont .
// we have to convert JSON in object to handle it more for use .
// an API not only return json as object , it can have array or object inside array or many more .



