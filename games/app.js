// the games
var rpsGame_div = document.getElementById("rps");
var sounds_div = document.getElementById("sounds");
var squirrel_div = document.getElementById("squirrel");
var rpslisp_div = document.getElementById("rps-li-sp");
var MyOS_div = document.getElementById("MyOS");

// onclick of those games, open them in a new tab
rpsGame_div.onclick = function() {
    window.open("rock-paper-scissors/");
}
sounds_div.onclick = function() {
    window.open("teach-sounds/");
}
squirrel_div.onclick = function() {
    window.open("find-the-squirrel/");
}
rpslisp_div.onclick = function() {
    window.open("rps-lizard-spock/");
}
MyOS_div.onclick = function() {
    window.open("myOS/")
}

// all a tags to open in a new tab
var a_tags = document.getElementsByTagName("a");
for(var i = 0; i < a_tags.length; i++) {
    a_tags[i].target = "_blank";
}