var userName_cookie = document.cookie.split("; ").find(row => row.startsWith("username"))?.split("=")[1];

function noUserName() {
    document.getElementById("known").style.display = "none"; // make sure that the known div is hidden
    document.getElementById("not-known").style.display = "block";
    document.getElementById("submit-btn").onclick = function() {
        userName_cookie = document.getElementById("enter-name").value;
        userNameKnown();
    }
}

function userNameKnown() {
    // add user name to cookie
    userName_cookie = document.getElementById("enter-name").value;
    document.getElementById("not-known").style.display = "none"; // make sure that the unknown div is hidden
    document.getElementById("known").style.display = "block";
    // edit known div to show username
    document.getElementById("hello").innerText = `Hello, ${userName_cookie}`
    // time (good morning, good evening etc.)
    var date = new Date();
    var hours = date.getHours();
    if(hours < 12) {
        document.getElementById("time").innerText = `Good Morning`;
    } else if(hours == 12) {
        document.getElementById("time").innerText = `Good Noon? or Afternoon, shall I say?`;
    }
    else if(hours > 12 && hours <= 16) {
        document.getElementById("time").innerText = `Good Afternoon`;
    } else if(hours > 16) {
        document.getElementById("time").innerText = `Good Evening`;
    }
    document.getElementById("known").style.display = "block";
}

if(userName_cookie === undefined) {
    noUserName();
} else {
    userNameKnown();
}
