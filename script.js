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
const options = Array.from(document.querySelectorAll('.btn-yours'));
options.forEach(option => option.addEventListener('click', () => option.classList.add('playing')));
options.forEach(option => option.addEventListener('transitionend', removeTransition));


