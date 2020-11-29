// some variables to use and manipulate
var userScore = 0; // the user's score
var computerScore = 0; // the computer's score
var userScore_span = document.getElementById("user-score"); // the user score span element 
var computerScore_span = document.getElementById("computer-score"); // the computer score span element 
var scoreBoard_div = document.querySelector(".score-board"); // the scoreboard div element
var result_div = document.querySelector(".result"); // the result div element (shows "Paper cover rock" etc. etc.)

// the divs containing rock, paper, scissors images
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

// computer's choice can be random
function getComputerChoice() {
    const choices = ["r", "p", "s"]; // the choices - rock, paper, scissors (r, p, s)
    const randomNumber = Math.floor(Math.random() * choices.length); // random index number
    return choices[randomNumber]; // return either r, or p, or s from list at a random index number
}

function convertToWord(letter) {
    if(letter === "r") {return "Rock"};
    if(letter === "p") {return "Paper"};
    return "Scissors";
}

// win, lose, draw functions
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `<p>${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!!!</p>`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `<p>${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose... 😢</p>`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
}

function draw(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `<p>${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw... </p>`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); // computer chooses
    switch(userChoice + computerChoice) { // depending on what the case is. like userChoice is 'r' (rock) and computerChoice is 's', then the user wins!
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r"); // user chooses rock
    });

    paper_div.addEventListener("click", function() {
        game("p"); // user chooses paper
    });

    scissors_div.addEventListener("click", function() {
        game("s"); // user chooses scissors
    });
}

main();