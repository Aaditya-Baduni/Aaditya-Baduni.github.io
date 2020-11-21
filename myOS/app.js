// ask user whether or not he/she is using a mobile device or not 
var ans = confirm("Are you using a mobile or a tablet?");
if(ans === true) {
    var ans2 = confirm("We recommend that you join with a desktop or a laptop. Do you wish to continue? (WARNING: SOME GLITCHES MAY OCCUR)");
    if(ans2 === false) {
        window.close();
    }
} else if(ans === false) {
    alert("Pls maximize the window if not already done. (WARNING: If your window is not maximized then some glitches may occur)");
} 

var searchIcon = document.getElementById("search-icon"); // the search icon
var searchBox_input = document.getElementById("search-box");
searchIcon.addEventListener("click", function() {
    if(window.getComputedStyle(searchBox_input).visibility == "hidden") {
        searchBox_input.style.visibility = "visible";
    } else if(window.getComputedStyle(searchBox_input).visibility == "visible") {
        searchBox_input.style.visibility = "hidden";
    }
});

function changeInValue() {
    if(searchBox_input.value != "") {
        alert("Sorry, but you cannot search in the Beta Version!");
        searchBox_input.value = "";
    }
}

// get the file explorer
var fe = document.getElementById("fe");
fe.onmouseover = function() {
    fe.innerText = "File Explorer";
    fe.style.fontSize = "15px";
    fe.style.paddingTop = "7px";
    fe.style.color = "black";
}
fe.onmouseout = function() {
    fe.innerText = "FE";
    fe.style.fontSize = "25px";
    fe.style.paddingTop = "2px";
    fe.style.color = "white";
}
fe.onclick = function() {alert("Apps are not available in Beta Version");}

// detect any change in value of the search box
setInterval(changeInValue, 1000);

// the myOS symbol in the taskbar
var myOS_div = document.getElementById("start");
var startMenu = document.getElementById("start-menu"); // the start menu to display

//! All start menu code is below
// show start menu onclick
myOS_div.onclick = function() {
    // if it is the first time
    if(startMenu.classList == "visibility") {
        startMenu.classList.remove("visibility");
    }
    startMenu.classList.toggle("m-fadeIn");
    if(startMenu.classList == "") {
        startMenu.classList.add("m-fadeOut");
    }
}

// apps are not available in Beta-version!
var tiles = document.getElementsByClassName("tile");
for(var i = 0; i < tiles.length; i++) {
    tiles[i].onclick = function() {
        alert("Apps are not available in Beta-version!")
    }
}