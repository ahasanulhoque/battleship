const createPage = function createPageOnInitialPageLoad(content) {
  const pageTitle = document.createElement('h1');
  pageTitle.id = 'page-title';
  pageTitle.innerHTML = 'BATTLESHIP';

  // Show the play area and boards in the DOM
  const playArea = document.createElement('section');
  playArea.id = 'play-area';

  const boardOne = document.createElement('section');
  boardOne.id = 'board-one';

  const boardTwo = document.createElement('section');
  boardTwo.id = 'board-two';

  const createBoard = function createEachSpaceOnBoard(
    boardWrapper,
    boardNumber
  ) {
    /*
        This function will create an empty gameboard.
        boardWrapper should be boardOne or boardTwo, which
        will be appended with spaces of board.
        boardNumber should be 1 or 2, which will be used in
        ids for spaces
    */
    for (let i = 0; i < 10; i++) {
      const newRow = document.createElement('div');
      newRow.id = `board-${boardNumber}-row-${i}`;
      newRow.classList.add('row');

      for (let j = 0; j < 10; j++) {
        const newSpace = document.createElement('div');
        newSpace.id = `board-${boardNumber}-space-${i}-${j}`;
        newSpace.classList.add('space');
        newRow.appendChild(newSpace);
      }

      boardWrapper.appendChild(newRow);
    }
  };

  createBoard(boardOne, 1);
  createBoard(boardTwo, 2);

  playArea.appendChild(boardOne);
  playArea.appendChild(boardTwo);

  // Create button that allows human to restart at any time
  const restartButton = document.createElement('button');
  restartButton.id = 'restart-game-button';
  restartButton.innerHTML = 'Restart';

  // Also create the game over modal, which will be hidden by default
  const gameOver = document.createElement('div');
  gameOver.id = 'game-over-modal';

  // Text that will appear in the modal. This will be empty, and populate upon game over
  const gameOverText = document.createElement('p');
  gameOverText.id = 'game-over-text';

  // Play again button that will appear in the modal
  const playAgainButton = document.createElement('button');
  playAgainButton.id = 'play-again-button';
  playAgainButton.innerHTML = 'Play again';

  gameOver.appendChild(gameOverText);
  gameOver.appendChild(playAgainButton);

  content.appendChild(pageTitle);
  content.appendChild(playArea);
  content.appendChild(restartButton);
  content.appendChild(gameOver);
};

const renderBoard = function renderHumanBoardAfterShipsPlaced(
  boardArray,
  boardDOM
) {
  /* 
    This function will take in board after all ships have been placed and display
    them in DOM.
    Shorthand is used depending on shipCode:
        0: displayed as C (for Carrier)
        1: displayed as B (for Battleship)
        2: displayed as D (for Destroyer)
        3: displayed as S (for Submarine)
        4: displayed as P (for Patrol Boat)
  */

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (boardArray[i][j] != 0) {
        // If a space is not 0, create this DOM element which will display space on board
        const shipSpaceDOM = document.createElement('p');
        shipSpaceDOM.classList.add('ship-space');

        // Use the conversion above to choose text value for shipSpaceDOM
        if (boardArray[i][j].charAt(1) === '0') {
          shipSpaceDOM.innerHTML = 'C';
        } else if (boardArray[i][j].charAt(1) === '1') {
          shipSpaceDOM.innerHTML = 'B';
        } else if (boardArray[i][j].charAt(1) === '2') {
          shipSpaceDOM.innerHTML = 'D';
        } else if (boardArray[i][j].charAt(1) === '3') {
          shipSpaceDOM.innerHTML = 'S';
        } else if (boardArray[i][j].charAt(1) === '4') {
          shipSpaceDOM.innerHTML = 'P';
        }

        boardDOM
          .querySelector(`#board-1-space-${i}-${j}`)
          .appendChild(shipSpaceDOM);
      }
    }
  }
};

const updateHumanBoard = function updateHumanBoardWhenHit(
  boardArray,
  row,
  column,
  boardDOM
) {
  /* 
    This function updates the human board when hit, keeping the letter
    on the board but updating its color if a ship is hit.
    A miss is represented by O
  */

  if (boardArray[row][column] === -1) {
    // Change the color of the existing DOM element for the ship to red
    boardDOM
      .querySelector(`#board-1-space-${row}-${column}`)
      .querySelector('.ship-space')
      .classList.add('hit-space');
  } else if (boardArray[row][column] === 'miss') {
    // Add an element to the DOM to show the miss
    const shotSpaceDOM = document.createElement('p');
    shotSpaceDOM.classList.add('shot-space');
    shotSpaceDOM.innerHTML = 'O';

    boardDOM
      .querySelector(`#board-1-space-${row}-${column}`)
      .appendChild(shotSpaceDOM);
  }
};

const updateAIBoard = function updateAIBoardWhenHit(
  boardArray,
  row,
  column,
  boardDOM
) {
  /*
    This function updates the AI board when hit, using an X for a hit
    ship and an O for a missed shot
  */

  const shotSpaceDOM = document.createElement('p');
  shotSpaceDOM.classList.add('shot-space');

  if (boardArray[row][column] === -1) {
    shotSpaceDOM.innerHTML = 'X';
    shotSpaceDOM.classList.add('hit-space');
  } else if (boardArray[row][column] === 'miss') {
    shotSpaceDOM.innerHTML = 'O';
  }

  boardDOM
    .querySelector(`#board-2-space-${row}-${column}`)
    .appendChild(shotSpaceDOM);
};

const showGameOver = function showModalWhenGameEnds(modal, newText, result) {
  /*
    This function shows the game over modal in the DOM by changing its display element.
    It also updates the text of the modal p elemeent (newText), using the result 
    parameter of the function.
    'win' = show human won
    'lose' = show human lost
  */
  if (result === 'win') {
    newText.innerHTML = 'You won!';
  } else if (result === 'lose') {
    newText.innerHTML = 'You lost';
  }
  modal.style.display = 'block';
};

export {
  createPage,
  renderBoard,
  updateHumanBoard,
  updateAIBoard,
  showGameOver,
};
