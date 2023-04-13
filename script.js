const displayController = (() => {
  // Declare DOM variables
  const choices = document.querySelectorAll('.piece');
  const playerChoice = document.querySelector('.player-choice');
  const computerChoice = document.querySelector('.computer-choice');
  const playerScore = document.querySelector('.player-score');
  const computerScore = document.querySelector('.computer-score');
  const finalMessage = document.querySelector('.main-message');

  choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
      //If game is over, Restart
      if (gameController.checkGameOver()) {
        restartGame();
        return;
      }

      const { gameArray, winner } = gameController.playRound(e);

      // Check outcome of each round and display corresponding message
      if (winner === true) {
        updateChoices(gameArray);
        displayMessage(true);
        updatePlayerCount();
      } else if (winner === false) {
        updateChoices(gameArray);
        displayMessage(false);
        updateComputerCount();
      } else {
        updateChoices(gameArray);
        displayMessage('tie');
      }

      // Reset game array variable
      gameController.reset();
    });
  });

  // Display game update message during play
  const displayMessage = (playerWon) => {
    const player = playerChoice.getAttribute('alt');
    const computer = computerChoice.getAttribute('alt');

    if (playerWon === true) {
      finalMessage.textContent = `You win! ${player} beats ${computer}`;
    } else if (playerWon === false) {
      finalMessage.textContent = `You lose! ${computer} beats ${player}`;
    } else {
      finalMessage.textContent = `It's a tie!`;
    }
  };

  // Display computer and player choices based on selection
  const updateChoices = (array) => {
    if (!array) return;
    const player = array[0];
    const computer = array[1];
    choices.forEach((choice) => {
      if (Number(choice.dataset.piece) === player) {
        updatePlayerChoice(choice);
      }
      if (Number(choice.dataset.piece) === computer) {
        updateComputerChoice(choice);
      }
    });
  };

  // Display player choice
  const updatePlayerChoice = (choice) => {
    playerChoice.setAttribute('src', choice.getAttribute('src'));
    playerChoice.setAttribute('alt', choice.getAttribute('alt'));
  };

  // Display computer choice
  const updateComputerChoice = (choice) => {
    computerChoice.setAttribute('src', choice.getAttribute('src'));
    computerChoice.setAttribute('alt', choice.getAttribute('alt'));
  };

  // Display player score
  const updatePlayerCount = () => {
    const playerCount = gameController.updatePlayerCount();
    playerScore.textContent = `Player: ${playerCount}`;
  };

  // Display computer Score
  const updateComputerCount = () => {
    const computerCount = gameController.updateComputerCount();
    computerScore.textContent = `Computer: ${computerCount}`;
  };

  const restartGame = () => {
    gameController.reset();
    gameController.resetCounts();
    finalMessage.textContent = 'Choose your weapon';
    setDefault();
  };

  // Reset display
  const setDefault = () => {
    const defaultChoice = 'images/question-mark.png';
    const defaultAlt = 'Question mark';
    playerChoice.setAttribute('src', defaultChoice);
    playerChoice.setAttribute('alt', defaultAlt);
    computerChoice.setAttribute('src', defaultChoice);
    computerChoice.setAttribute('alt', defaultAlt);

    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
  };
})();

const gameController = (() => {
  let gameArray = [];
  let playerCount = 0;
  let computerCount = 0;

  // Get computer choice at random
  const getComputerChoice = () => {
    let randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt === 1) {
      return 0;
    } else if (randInt === 2) {
      return 1;
    } else {
      return 2;
    }
  };

  // Get player choice
  const getPlayerChoice = (choice) => {
    const piece = choice.target;
    return Number(piece.dataset.piece);
  };

  // Conduct one game round
  const playRound = (playerChoice) => {
    gameArray.push(getPlayerChoice(playerChoice));
    gameArray.push(getComputerChoice());

    if (gameArray[0] === gameArray[1]) {
      const tie = 'tie';
      return { gameArray, tie };
    }

    const winner = checkWinner(gameArray);
    return { gameArray, winner };
  };

  // Determine if the player won the game
  const checkWinner = (gameArray) => {
    const winCriteria = [
      [1, 0],
      [2, 1],
      [0, 2],
    ];

    return winCriteria.some((array) => {
      return array.every((value, index) => value === gameArray[index]);
    });
  };

  const reset = () => {
    gameArray = [];
  };

  // check if the player or computer has won the game
  const checkGameOver = () => {
    if (playerCount === 5 || computerCount === 5) return true;
  };

  // Update player score count
  const updatePlayerCount = () => {
    playerCount++;
    return playerCount;
  };

  // Update computer score count
  const updateComputerCount = () => {
    computerCount++;
    return computerCount;
  };

  // Reset both player and computer score counts
  const resetCounts = () => {
    playerCount = 0;
    computerCount = 0;
  };

  return {
    playRound,
    reset,
    checkGameOver,
    updatePlayerCount,
    updateComputerCount,
    resetCounts,
  };
})();
