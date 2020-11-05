import React from 'react'
 

function Timers(){
    let myGreeting = setTimeout(function sayHi() {
        alert('Hello, Mr. Universe!');
      }, 2000)
      
      
    function displayTime() {
        alert('hello form setinterval')    
    }
     const createClock = setInterval(displayTime, 3000);
    return(
        <div>
            <h4>hello from timers {myGreeting}</h4>
            <h5>{createClock} </h5>
        </div>
    ) 

} 


export default Timers
