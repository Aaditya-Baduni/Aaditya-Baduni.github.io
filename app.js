// Show "Hello, ${username}, Good ${time_of_the_day (like evening, morning etc.)}"

var notKnown_div = document.getElementById("not-known");
var known_div = document.getElementById("known");
var submitBtn_input = document.getElementById("submit-btn");
var enterName_input = document.getElementById("enter-name");
var hello_p = document.getElementById("hello");
var time_p = document.getElementById("time");

if (typeof (Storage) !== undefined) {
    // for the user's name
    if (localStorage.getItem("username") == null) {
        submitBtn_input.onclick = function () {
            // hide not known div, set username in localStorage
            notKnown_div.style.display = "none";
            localStorage.setItem("username", enterName_input.value);
            known_div.style.display = "block";
            hello_p.innerText = "Hello, " + localStorage.getItem("username");
        }
    } else {
        notKnown_div.style.display = "none";
        hello_p.innerText = "Hello, " + localStorage.getItem("username");
        known_div.style.display = "block";
    }

    // for the welcome screen
    if (localStorage.getItem("visited") == "false" || localStorage.getItem("visited") == null) {
        localStorage.setItem("visited", "true");
        // date
        var d = new Date();
        localStorage.setItem("lastDateVisited", d.getTime());
    } else if (localStorage.getItem("visited") == "true") {
        var lastDateVisited = localStorage.getItem("lastDateVisited");
        var currentDate = new Date().getTime();
        if ((lastDateVisited + (30 * 24 * 60 * 60 * 1000)) <= currentDate) {
            localStorage.setItem("visited", "false");
        }
    }
    // date and time stuff
    var date = new Date();
    var time_hours = date.getHours();
    if (time_hours < 12) {
        time_p.innerText = "Good Morning";
    } else if (time_hours >= 12 && time_hours <= 16) {
        time_p.innerText = "Good Afternoon";
    } else if (time_hours > 16) {
        time_p.innerText = "Good Evening";
    }
} else {
    notKnown_div.style.display = "none";
    known_div.style.display = "none";
}

// go to these links when the images on the carousel are clicked
// the images which will be clicked on
var squirrelCarousel_div = document.getElementById("squirrel-carousel");
var rpsCarousel_div = document.getElementById("rps-carousel");
var teachSoundsCarousel_div = document.getElementById("teach-sounds-carousel");
var faqCarousel_div = document.getElementById("faq-carousel");
var aboutMeCarousel_div = document.getElementById("about-me-carousel");

// function which will run once those images are clicked
function goToURL(url) {
    window.location.href = url;
}

// on click of the images
squirrelCarousel_div.addEventListener("click", () => goToURL("https://aaditya-baduni.github.io/games/find-the-squirrel/"));
rpsCarousel_div.addEventListener("click", () => goToURL("https://aaditya-baduni.github.io/games/rock-paper-scissors/"));
teachSoundsCarousel_div.addEventListener("click", () => goToURL("https://aaditya-baduni.github.io/other/teach-sounds/"));
faqCarousel_div.addEventListener("click", () => goToURL("https://aaditya-baduni.github.io/other/faq/"));
aboutMeCarousel_div.addEventListener("click", () => goToURL("https://aaditya-baduni.github.io/other/about-me/"));

// Welcome screen
var welcome_div = document.getElementById("welcome");
var continue_btn = document.getElementById("continue");
var visited = localStorage.getItem("visited");

if (visited == "true") {
    welcome_div.style.height = "0%";
    welcome_div.style.width = "0%";
    welcome_div.style.display = "none";
} else {
    continue_btn.onclick = function () {
        var opacity = 1;
        var opa = setInterval(() => {
            if (opacity > 0.0) {
                opacity -= 0.1;
                welcome_div.style.opacity = opacity.toString();
            } else {
                clearInterval(opa);
                welcome_div.style.height = "0%";
                welcome_div.style.width = "0%";
                welcome_div.style.display = "none";
            }
        }, 20);
    };
}