// var for time value
var seconds = 0;
var minutes = 0;
var hours = 0;

// var to hold "display" value
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours= 0;

//var to hold setInterval() function
var interval = null;

//var to hold stopwatch status
var status = "stopped";

//var for laps
var lap = document.getElementById("lapTime");

// stopwatch function (increment in the value, etc.)
function stopWatch(){

    seconds++;

    // Logic to determine when to increment next value

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    
    // If seconds/minutes/hours are only one digit, add a leading 0 to the value

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    
    // Display updated time value to user
        document.getElementById("display").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
    
}

// Function to start/stop the stopwatch
function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

// Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00 : 00 : 00";
    document.getElementById("startStop").innerHTML = "Start";
    lap.innerHTML = " ";

}

// Function for laps
function laps(){
    if(stopWatch){
        var li = document.createElement("li");
        li.innerText = displayHours + " : " + displayMinutes + " : " + displaySeconds;
        lap.appendChild(li); 
    }
}
