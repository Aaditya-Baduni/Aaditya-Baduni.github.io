/* userScore = 0;

// get the squirrels
var squirrel1_img = document.getElementById("squirrel-1");
var squirrel2_img = document.getElementById("squirrel-2");
var squirrel3_img = document.getElementById("squirrel-3");
var squirrel4_img = document.getElementById("squirrel-4");
var squirrel5_img = document.getElementById("squirrel-5");

// remove class (to end the transitions) 
function removeClass(element, classOfElement) {
    element.classList.remove(classOfElement);
}

// get the userScore span
var userScore_span = document.getElementById("user-score");

// get the result para
var result_para = document.getElementById("result");

// change the elements styles (Cuz apparently, it is not working)
squirrel1_img.style.visibility = "visible";
squirrel2_img.style.visibility = "hidden";
squirrel3_img.style.visibility = "hidden";
squirrel4_img.style.visibility = "hidden";
squirrel5_img.style.visibility = "hidden";

function squirrelClick(squirrel) {
    if (squirrel == squirrel1_img && squirrel.style.visibility === "visible") {
        squirrel.style.visibility = "hidden"; // make it hidden
        userScore++; // increase the userScore
        squirrel2_img.style.visibility = "visible"; // make the next one visible
        userScore_span.innerText = userScore; // display the userScore
        result_para.innerText = "You clicked on the squirrel!!!";
        result_para.classList.add("win");
        result_para.addEventListener("transitionend", () => removeClass(result_para, "win"));
    } 
    else if(squirrel == squirrel2_img && squirrel.style.visibility === "visible") {
        squirrel.style.visibility = "hidden";
        userScore++;
        squirrel3_img.style.visibility = "visible";
        userScore_span.innerText = userScore;
        result_para.innerText = "You clicked on the squirrel!!!";
        result_para.classList.add("win");
        result_para.addEventListener("transitionend", () => removeClass(result_para, "win"));
    }
    else if(squirrel == squirrel3_img && squirrel.style.visibility === "visible") {
        squirrel.style.visibility = "hidden";
        userScore++;
        squirrel4_img.style.visibility = "visible";
        userScore_span.innerText = userScore;
        result_para.innerText = "You clicked on the squirrel!!!";
        result_para.classList.add("win");
        result_para.addEventListener("transitionend", () => removeClass(result_para, "win"));
    }
    else if(squirrel == squirrel4_img && squirrel.style.visibility === "visible") {
        squirrel.style.visibility = "hidden";
        userScore++;
        squirrel5_img.style.visibility = "visible";
        userScore_span.innerText = userScore;
        result_para.innerText = "You clicked on the squirrel!!!";
        result_para.classList.add("win");
        result_para.addEventListener("transitionend", () => removeClass(result_para, "win"));
    }
    else {
        squirrel.style.visibility = "hidden";
        userScore++;
        userScore_span.innerText = userScore;
        if(userScore = 5)  {
            result_para.innerText = "You win the game!!!";
            result_para.classList.add("win");
            result_para.addEventListener("transitionend", () => removeClass(result_para, "win"));
        }
    }
}

squirrel1_img.addEventListener("click", () => squirrelClick(squirrel1_img));
squirrel2_img.addEventListener("click", () => squirrelClick(squirrel2_img));
squirrel3_img.addEventListener("click", () => squirrelClick(squirrel3_img));
squirrel4_img.addEventListener("click", () => squirrelClick(squirrel4_img));
squirrel5_img.addEventListener("click", () => squirrelClick(squirrel5_img));

// the tree image
var treeImage = document.getElementById("tree-img");
treeImage.addEventListener("click", function() {
    result_para.innerText = "You did not click on the squirrel...";
    result_para.classList.add("lose");
    result_para.addEventListener("transitionend", () => removeClass(result_para, "lose"));

    if(squirrel1_img.style.visibility == "visible") {
        squirrel1_img.style.visibility = "hidden";
        squirrel2_img.style.visibility = "visible";
    } else if(squirrel2_img.style.visibility == "visible") {
        squirrel2_img.style.visibility = "hidden";
        squirrel3_img.style.visibility = "visible";
    } else if(squirrel3_img.style.visibility == "visible") {
        squirrel3_img.style.visibility = "hidden";
        squirrel4_img.style.visibility = "visible";
    } else if(squirrel4_img.style.visibility == "visible") {
        squirrel4_img.style.visibility = "hidden";
        squirrel5_img.style.visibility = "visible";
    } else if(squirrel5_img.style.visibility == "visible") {
        squirrel5_img.style.visibility = "hidden";
        if(userScore < 5) {
            result_para.innerText = "Game ended... you lose";
            result_para.classList.add("lose");
            result_para.addEventListener("transitionend", () => removeClass(result_para, "lose"));
        }
    } 
}); */

// the user score and others
var userScore = 0;
var result_para = document.getElementById("result"); // will show 'you clicked on the squirrel' or 'you did not click on the squirrel' etc.
var userScore_span = document.getElementById("user-score");

// the win and lose functions
function win() {
    result_para.innerText = "Congrats! You have won the game!";
    result_para.classList.add("win");
    result_para.ontransitionend = function() {
        result_para.classList.remove("win");
    };
}

function lose() {
    result_para.innerText = `You only caught ${userScore} squirrels. You lose...`;
    result_para.classList.add("lose");
    result_para.ontransitionend = function() {
        result_para.classList.remove("lose");
    };
}

// small win (gaining a point) and small lose (score remains the same)
function smallWin() {
    result_para.innerText = "You clicked on the squirrel!";
    result_para.classList.add("win");
    result_para.ontransitionend = function() {
        result_para.classList.remove("win");
    };
}

function smallLose() {
    result_para.innerText = "You clicked on tree. You lose a point";
    result_para.classList.add("lose");
    result_para.ontransitionend = function() {
        result_para.classList.remove("lose");
    };
}

// get the squirrel images
var squirrel1_img = document.getElementById("squirrel-1");
var squirrel2_img = document.getElementById("squirrel-2");
var squirrel3_img = document.getElementById("squirrel-3");
var squirrel4_img = document.getElementById("squirrel-4");
var squirrel5_img = document.getElementById("squirrel-5");

// changing the squirrel images visibility
squirrel1_img.style.visibility = "visible"; // the first one will be visible (in the beginning)
squirrel2_img.style.visibility = "hidden";
squirrel3_img.style.visibility = "hidden";
squirrel4_img.style.visibility = "hidden";
squirrel5_img.style.visibility = "hidden";

// get the tree image
var tree_img = document.getElementById("tree-img");

// the function for when the squirrel is clicked
function squirrelClick(squirrel) {
    if(squirrel == squirrel1_img) { // if the squirrel is the first one
        userScore++;
        userScore_span.innerText = userScore;
        squirrel1_img.style.visibility = "hidden";
        squirrel2_img.style.visibility = "visible";
        smallWin();
    } else if(squirrel == squirrel2_img) { // if the squirrel is the second one
        userScore++;
        userScore_span.innerText = userScore;
        squirrel2_img.style.visibility = "hidden";
        squirrel3_img.style.visibility = "visible";
        smallWin();
    } else if(squirrel == squirrel3_img) { // if the squirrel is the third one
        userScore++;
        userScore_span.innerText = userScore;
        squirrel3_img.style.visibility = "hidden";
        squirrel4_img.style.visibility = "visible";
        smallWin();
    } else if(squirrel == squirrel4_img) { // if the squirrel is the second one
        userScore++;
        userScore_span.innerText = userScore;
        squirrel4_img.style.visibility = "hidden";
        squirrel5_img.style.visibility = "visible";
        smallWin();
    } else if(squirrel == squirrel5_img) {
        userScore++;
        userScore_span.innerText = userScore;
        squirrel5_img.style.visibility = "hidden";
        if(userScore == 5) {
            win();
        } else if(userScore < 5) {
            lose();
        }
    }
}

// execute squirrelClick();
squirrel1_img.addEventListener("click", () => squirrelClick(squirrel1_img)); // for the first squirrel
squirrel2_img.addEventListener("click", () => squirrelClick(squirrel2_img)); // for the second squirrel
squirrel3_img.addEventListener("click", () => squirrelClick(squirrel3_img)); // for the third squirrel
squirrel4_img.addEventListener("click", () => squirrelClick(squirrel4_img)); // for the fourth squirrel
squirrel5_img.addEventListener("click", () => squirrelClick(squirrel5_img)); // for the fifth squirrel

// the function for when the squirrel is not clicked
function clickOnTree() {
    if(squirrel1_img.style.visibility == "visible") { // if the first squirrel is visible
        squirrel1_img.style.visibility = "hidden";
        squirrel2_img.style.visibility = "visible";
        smallLose();
    }
    else if(squirrel2_img.style.visibility == "visible") { // if the second squirrel is visible
        squirrel2_img.style.visibility = "hidden";
        squirrel3_img.style.visibility = "visible";
        smallLose();
    } else if(squirrel3_img.style.visibility == "visible") { // if the third squirrel is visible
        squirrel3_img.style.visibility = "hidden";
        squirrel4_img.style.visibility = "visible";
        smallLose();
    } else if(squirrel4_img.style.visibility == "visible") { // if the fourth squirrel is visible
        squirrel4_img.style.visibility = "hidden";
        squirrel5_img.style.visibility = "visible";
        smallLose();
    } else if(squirrel5_img.style.visibility == "visible") { // if the fifth squirrel is visible
        squirrel5_img.style.visibility = "hidden";
        if(userScore == 5) {
            win();
        } else if(userScore < 5) {
            lose();
        }
    }
}

tree_img.addEventListener("click", clickOnTree);