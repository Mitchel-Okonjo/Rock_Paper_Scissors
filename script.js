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


