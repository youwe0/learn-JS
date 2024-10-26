// ------------------------------------------>javascript exicution context 
// javascript is a single threded language.b



// [1]   first of all js create a GLOBAL execution context {} , which differ in node{"this" gives sonthing else } and browser{"this" give window } ... 
// [2]   functional execution context .
 

//--------------------------------------> basic execution of JS code .
// [1] memory creation phase :--- allocate memory for variables and all that stuff .
let vall = 10
let val2 = 20
function addnum(){
    total = vall + val2
    return total
}
let r1 = addnum(vall,val2)
let r2 = addnum(1,2)
// first js create a global execution "this"{ adding memmory phase in global memory and aading variable with data type of undifined }.
//  addind defination of code .
// creating memory for r1 and r2 , 


// [2] execution phase :---  
// execution phase starts here . executional context make a new variable enviroment and executional thread .