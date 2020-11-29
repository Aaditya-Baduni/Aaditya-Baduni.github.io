//     Scissors cut Paper
//     Paper covers Rock
//     Rock crushes Lizard
//     Lizard poisons Spock
//     Spock smashes Scissors
//     Scissors decapitate Lizard
//     Lizard eats Paper
//     Paper disproves Spock
//     Spock vaporizes Rock
//     Rock crushes Scissors

// the userScore and the result para
var userScore = 0;
var computerScore = 0;
var result_p = document.getElementById("result-para");
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");

// get the rock, paper, scissors, lizard, and spock images
var rock_img = document.getElementById("r");
var paper_img = document.getElementById("p");
var scissors_img = document.getElementById("s");
var lizard_img = document.getElementById("li");
var spock_img = document.getElementById("sp");

// small words
var userWord = "user".sub();
var compWord = "comp".sub();

// convert to word
function convertToWord(word) {
    if(word == "r") {return "rock"}
    else if(word == "p") {return "paper"}
    else if(word == "s") {return "scissors"}
    else if(word == "li") {return "lizard"}
    else {return "spock"}
}

// if the user wins
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${userWord} beats ${convertToWord(computerChoice)} ${compWord}. USER WINS!!! 🔥`;
    document.getElementById(userChoice).classList.add("green");
    setTimeout(document.getElementById(userChoice).classList.remove("green"), 300);
}

// if the user loses 
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${userWord} loses to ${convertToWord(computerChoice)} ${compWord}. User loses 💩`;
    document.getElementById(userChoice).classList.add("red");
    setTimeout(document.getElementById(userChoice).classList.remove("red"), 300);
}

// if there is a tie
function tie(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} ${userWord} and ${convertToWord(computerChoice)} ${compWord} is the same. TIE 😐`;
    document.getElementById(userChoice).classList.add("grey");
    setTimeout(document.getElementById(userChoice).classList.remove("grey"), 300);
}

// getting the computer choice
function getComputerChoice() {
    var choices = ["r", "p", "s", "li", "sp"];
    var computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

// play the game
function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        // user wins!
        case "sp": // scissors cuts paper
        case "pr": // paper covers rock
        case "rli": // rock crushes lizard
        case "lisp": // lizard poisons spock
        case "sps": // spock smashes scissors
        case "sli": // scissors decapitate lizard
        case "lip": // lizard eats paper
        case "psp": // paper disproves spock
        case "spr": // spock vaporizes rock
        case "rs": // rock crushes scissors
            win(userChoice, computerChoice);
            break;

        // computer wins
        case "ps": // paper loses to scissors
        case "rp": // rock loses to paper
        case "lir": // lizard gets crushed by rock
        case "spli": // spock loses to lizard
        case "ssp": // scissors loses to spock
        case "lis": // lizard loses to scissors
        case "pli": // paper loses to lizard
        case "spp": // spock loses to paper
        case "rsp": // rock loses to spock
        case "sr": // scissors loses to rock
            lose(userChoice, computerChoice);
            break;

        // there is a tie
        case "ss":
        case "pp":
        case "rr":
        case "lili":
        case "spsp":
            tie(userChoice, computerChoice);
            break;
    }
}

rock_img.addEventListener("click", function() {
    game("r");
});

paper_img.addEventListener("click", function() {
    game("p");
});

scissors_img.addEventListener("click", function() {
    game("s");
});

lizard_img.addEventListener("click", function() {
    game("li");
});

spock_img.addEventListener("click", function() {
    game("sp");
});