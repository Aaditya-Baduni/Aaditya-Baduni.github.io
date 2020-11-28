// the games
var rpsGame_div = document.getElementById("rps");
var sounds_div = document.getElementById("sounds");
var squirrel_div = document.getElementById("squirrel");
var rpslisp_div = document.getElementById("rps-li-sp");
var MyOS_div = document.getElementById("MyOS");

// onclick of those games, open them in a new tab
rpsGame_div.onclick = function() {
    window.open("https://aaditya-baduni.github.io/rock-paper-scissors/");
}
sounds_div.onclick = function() {
    window.open("https://aaditya-baduni.github.io/teach-sounds/");
}
squirrel_div.onclick = function() {
    window.open("https://aaditya-baduni.github.io/find-the-squirrel/");
}
rpslisp_div.onclick = function() {
    window.open("https://aaditya-baduni.github.io/rps-lizard-spock/");
}
MyOS_div.onclick = function() {
    window.open("https://aaditya-baduni.github.io/myOS/")
}