function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (randInt === 1) {
        choice = "ROCK";
    }
    else if (randInt === 2) {
        choice = "PAPER";
    }
    else {
        choice = "SCISSORS";
    }

    return choice;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        return "You lose! Rock beats Scissors";
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        return "You lose! Scissors beats Paper";
    }
    else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper";
    }
    else (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock";
    }
}