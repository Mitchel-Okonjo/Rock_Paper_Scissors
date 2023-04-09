const displayController = (() => {
  const choices = document.querySelectorAll('.piece');
  const playerChoice = document.querySelector('.player-choice');
  const computerChoice = document.querySelector('.computer-choice');
  const playerScore = document.querySelector('.player-score');
  const computerScore = document.querySelector('.computer-score');
  const finalMessage = document.querySelector('.main-message');

  choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
      if (gameController.checkGameOver()) {
        restartGame();
        return;
      }

      const { gameArray, winner } = gameController.playRound(e);

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

      gameController.reset();
    });
  });

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

  const updatePlayerChoice = (choice) => {
    playerChoice.setAttribute('src', choice.getAttribute('src'));
    playerChoice.setAttribute('alt', choice.getAttribute('alt'));
  };

  const updateComputerChoice = (choice) => {
    computerChoice.setAttribute('src', choice.getAttribute('src'));
    computerChoice.setAttribute('alt', choice.getAttribute('alt'));
  };

  const updatePlayerCount = () => {
    const playerCount = gameController.updatePlayerCount();
    playerScore.textContent = `Player: ${playerCount}`;
  };

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

  const getPlayerChoice = (choice) => {
    const piece = choice.target;
    return Number(piece.dataset.piece);
  };

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

  const checkGameOver = () => {
    if (playerCount === 5 || computerCount === 5) return true;
  };

  const updatePlayerCount = () => {
    playerCount++;
    return playerCount;
  };

  const updateComputerCount = () => {
    computerCount++;
    return computerCount;
  };

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
