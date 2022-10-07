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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());