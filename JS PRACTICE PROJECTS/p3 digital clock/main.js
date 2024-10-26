const clock  = document.getElementById("clock")

setInterval(function(){ //takes time in ms , and runs provided method everytime  after set duration .
    let date = new Date();
    console.log(date.toLocaleTimeString());
    
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000) 