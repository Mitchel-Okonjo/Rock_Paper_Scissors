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


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    e.target.classList.remove('computer-playing');
  }

  function playRound(computerSelection, playerSelection) {
    
    if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        console.log("you lose");
        round.textContent++;
        roundEndText.textContent =  "You lose! Rock beats Scissors";
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        console.log("you lose");
        round.textContent++;
        roundEndText.textContent =  "You lose! Scissors beats Paper";
    }
    else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        console.log("you lose");
        round.textContent++;
        roundEndText.textContent =  "You lose! Paper beats Rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("you win");
        round.textContent++;
        score.textContent++;
        roundEndText.textContent =  "You win! Rock beats Scissors";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("you win");
        round.textContent++;
        score.textContent++;
        roundEndText.textContent =  "You win! Scissors beats Paper";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("you win");
        round.textContent++;
        score.textContent++;
        roundEndText.textContent = "You win! Paper beats Rock";
    }
    else {
        console.log("It's a tie!");
        roundEndText.textContent = "It's a tie! click an option to continue playing.";
    }

    
}

const computerOptions = Array.from(document.querySelectorAll('.btn-computer'));
const playerOptions = Array.from(document.querySelectorAll('.btn-yours'));
const computerSelection = document.querySelector('.btn-computer');
const gameEndText = document.querySelector('.game-end-text');
const gameStartText = document.querySelector('.game-start-text');
const score = document.querySelector('.score-btn');
const round = document.querySelector('.round-btn');
const roundEndText = document.querySelector('.round-end-text');
const restart = document.querySelector('.restart-btn');

playerOptions.forEach(option => option.addEventListener('click', () => option.classList.add('playing')));
playerOptions.forEach(option => option.addEventListener('transitionend', removeTransition));


