// get the elements (caching the DOM)
// the answer paras
var answerPara1 = document.getElementById("a1");
var answerPara2 = document.getElementById("a2");
var answerPara3 = document.getElementById("a3");
var answerPara4 = document.getElementById("a4");

// get the question paras
var questionPara1 = document.getElementById("q1");
var questionPara2 = document.getElementById("q2");
var questionPara3 = document.getElementById("q3");
var questionPara4 = document.getElementById("q4");

var answer1 = "To share my creations with the world";
var answer2 = "Many. I keep adding as I make projects.";
var answer3 = "Started a JS library 8 months ago. Then learnt HTML, CSS. Then Vanilla JS. And Python. <br>So 8 months. However all of my programming abilities cannot be showcased here <br>and are for different purposes";
var answer4 = "I am young. In school. I don't want to post my age because of privacy & security reasons";

// function which appends the answer to the question?
function revealAnswer(answerPara, answer) {
    if(answerPara.innerHTML == "") {
        answerPara.innerHTML = answer;
    } else if(answerPara.innerHTML == answer) {
        answerPara.innerHTML = "";
    }
}

questionPara1.addEventListener("click", () => revealAnswer(answerPara1, answer1));
questionPara2.addEventListener("click", () => revealAnswer(answerPara2, answer2));
questionPara3.addEventListener("click", () => revealAnswer(answerPara3, answer3));
questionPara4.addEventListener("click", () => revealAnswer(answerPara4, answer4));