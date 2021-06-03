const { count } = require("console");

//program to display the time after specified time
function showTime(){
    //return new date and new time
    let dateTime= new Date();
    //returns the current local time
    let time= dateTime.toLocaleTimeString();
        console.log(time);
    //let us display the time after 5 secs
    setTimeout(showTime, 5000);
    clearTimeout(time);
}

//calling the function
showTime();

