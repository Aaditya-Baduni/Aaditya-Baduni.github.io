userScore = 0;

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
});