// jshint esversion:6

// get all of the elements from the DOM
var seconds_span = document.getElementById("secs-span");
var minutes_span = document.getElementById("mins-span");
var hours_span = document.getElementById("hrs-span");

var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");

var seconds_input = document.getElementById("secs");
var minutes_input = document.getElementById("mins");
var hours_input = document.getElementById("hrs");

var doneBtn = document.getElementById("done-btn");

// alarm sound
var alarm = new Audio("alarm.mp3");

// hours, minutes, seconds
var hours = "00";
var minutes = "00";
var seconds = "00";

// functions for what will happen when certain buttons are clicked
function funcDoneBtn() {
    // get the values from what the user has put in (in the input boxes)
    // hours
    if (hours_input.value != "") {
        hours = hours_input.value;
        hours_span.innerText = hours;
    }

    // minutes
    if (minutes_input.value != "") {
        minutes = minutes_input.value;
        minutes_span.innerText = minutes;
    }

    // seconds
    if (seconds_input.value != "") {
        seconds = seconds_input.value;
        seconds_span.innerText = seconds;
    }
}

function funcStartBtn(secs, mins, hrs) {
    // if user has not provided any time in seconds, minutes or hours
    if (hours === "00" && minutes === "00" && seconds === "00") {
        alert("Please provide a value (seconds, minutes or hours) to count down from");
        return;
    }

    var secondsInMilliseconds = parseInt(secs) * 1000;
    var minutesInMilliseconds = parseInt(mins) * 60 * 1000;
    var hoursInMilliseconds = parseInt(hrs) * 60 * 60 * 1000;
    var totalTimeInMilliseconds = secondsInMilliseconds + minutesInMilliseconds + hoursInMilliseconds;

    var now = new Date().getTime();
    var futureTime = now + totalTimeInMilliseconds;

    var secondsParsed = parseInt(secs);
    var minutesParsed = parseInt(mins);
    var hoursParsed = parseInt(hrs);

    var updateTimer = setInterval(function() {
        var newCurrentTime = now + 1000;

        if (secondsParsed > 0) {
            secondsParsed -= 1;
        } else if (secondsParsed === 0) {
            if(minutesParsed > 0) {
                minutesParsed -= 1;
                secondsParsed = 59;
            } else if(minutesParsed === 0) {
                if(hoursParsed > 0) {
                    hoursParsed -= 1;
                    minutesParsed = 59;
                    secondsParsed = 59;
                } else {
                    timerDone(updateTimer);
                }
            }
        }

        // show the time to the user
        seconds_span.innerText = secondsParsed;
        minutes_span.innerText = minutesParsed;
        hours_span.innerText = hoursParsed;
    }, 1000);
}

function timerDone(interval) {
    alarm.play();

    seconds_span.innerText = "00";
    minutes_span.innerText = "00";
    hours_span.innerText = "00";

    clearInterval(interval);
    alert("Time is up!");
    alarm.pause();
    alarm.currentTime = 0;
}

function funcResetBtn() {
    seconds_span.innerText = seconds;
    minutes_span.innerText = minutes;
    hours_span.innerText = hours;
}

// execute those functions (with addEventListener) to get the app working
doneBtn.addEventListener("click", funcDoneBtn);
startBtn.addEventListener("click", () => funcStartBtn(seconds, minutes, hours));
resetBtn.addEventListener("click", funcResetBtn);