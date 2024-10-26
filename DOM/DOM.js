// ---------------------------->    DOM is knokn as " DOCUMENT OBJECT MODEL"  .
// in console " console.log(window)" shows all info about your window ex :- location , document , file type , etc .
// in console " console.log("document") shows all info about our document or page .
// use of DOM manuplulation = data retrival from html , data manuplution in html , dynamic ablity to transform data in html .




// <---------------------------------------------------quearyslectors ------------------------------------------------->
document.querySelector("h1") // gives first thing occur in page on demand .
document.querySelectorAll("h1") // gives all same element occour in page in a node list[] , {node list is similar to array but not a  array } 
// we can store values in a variable and perform more task such as style and manipulation and all . 
document.querySelector("#main") 
document.querySelectorAll(".class") 


// -------------------------------------------->taking element by their ID .
let title = document.getElementById("main") // takes element by their id .

// --------------------------------------------> taking welement by their class .
document.getElementsByClassName("item name ") //takes element by using class name .





//---------------------------------------------------------------------->" using style on a element "
title.style.backgroundColor = "green" // we can give any css property to style .
title.style.padding = "5px" // we can give any css property to style .
title.style.margin = "2px" // we can give any css property to style .







// ------------------------------------------------------------->get and set attribute 
document.getElementById().getAttribute("") // gives the attribute name of perticular id .
document.getElementById().setAttribute('class or id ' , 'test  test2') // sets a attribute to a id or class with a new name ."test" or "test2" .










// extracting values from html container .
title.innerHTML // this gives all values and written html code as a string .
title.textContent // shows all values the element is having . 
title.innerText //shows values which are visible on document . 













// -----------------------------------------------------------------------------creating new element in DOM . 
const div = document.createElement("div") // creates a new blank element in html page .
div.classname ="main"  // gives class to creted div .
div.id= "divId" // gives id to creatted div .
// div.setAttribute("title ", "created title") // giving attribute .
// div.style.color ="red" // giving style .
div.innerText = " hello world" // adding contant .

// this created div is in memory  to display to web page we have to do .
document.body.appendChild(div) // display element in screen .



















// -----------------------------------------------------> adding , editing  and removing element in DOM .

// adding a new list in unordered list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
// this add new element in an last of list which makes a new DOM tree every time of function execution . 
function newlang (langname){
    const li =document.createElement("li")
    li.innerHTML= (`${langname}`)
    document.querySelector(".lang").appendChild(li)

}
newlang("python")
newlang("java")
newlang("rust")


// optimised way of doing same thing 
// this function avoid whole traversing of tree and add a new element at last of list .
function optilang(language){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(language)) // crete a new text node and append it in list directly .
    document.querySelector(".lang").appendChild(li)
}
optilang("go")



// editing element in DOM .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
// we have to holld the value of element in a variable to edit it.    
const secound_lang = document.querySelector("li.nth-child(2)") // select thre element .
secound_lang.innerHTML = "python 3" // works but not a good approch .


// makes a new element and replace to new element . 
const newli = createElement(li)
newli.textContent =" python 3"
secound_lang.replaceWith(newli)

//removing a element in DOM .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
const last_lang = document.querySelector("li.last-child")
last_lang.remove()