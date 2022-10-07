let winCount = 0;
let text = document.querySelector("#update");

game();

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
        winCount++;
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        winCount++;
        return "You win! Scissors beats Paper";
    }
    else {
        winCount++;
        return "You win! Paper beats Rock";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerPick = getComputerChoice();
        let playerPick = prompt("Enter Rock, Paper, or Scissors: ").toUpperCase();

        while (computerPick === playerPick) {
            computerPick = getComputerChoice();
        }
        
        let currentRound = playRound(computerPick, playerPick);
    }

    if (winCount >= 3) {
        text.textContent = "You win the Overall Game! :)";
    }
    else {
        text.textContent = "You lose the Overall Game. :("
    }
}