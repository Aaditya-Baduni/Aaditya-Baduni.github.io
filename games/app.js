// the games
var rpsGame_div = document.getElementById("rps");
var sounds_div = document.getElementById("sounds");
var squirrel_div = document.getElementById("squirrel");
var rpslisp_div = document.getElementById("rps-li-sp");
var MyOS_div = document.getElementById("MyOS");

function openInNewTab(elementLink) {
    window.location.href = elementLink;
}

rpsGame_div.onclick = function() {
    openInNewTab("rock-paper-scissors/");
}
sounds_div.onclick = function() {
    openInNewTab("teach-sounds/");
}
squirrel_div.onclick = function() {
    openInNewTab("find-the-squirrel/");
}
rpslisp_div.onclick = function() {
    openInNewTab("rps-lizard-spock/");
}
MyOS_div.onclick = function() {
    window.open("myOS/");
}