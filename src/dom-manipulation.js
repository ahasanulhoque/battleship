const createPage = function createPageOnInitialPageLoad(content) {
  const pageTitle = document.createElement('h1');
  pageTitle.id = 'page-title';
  pageTitle.innerHTML = 'BATTLESHIP';

  // Show the play area and boards in the DOM
  const playArea = document.createElement('section');
  playArea.id = 'play-area';
  playArea.setAttribute('style', 'pointer-events: none');

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

  const informationArea = document.createElement('section');
  informationArea.id = 'information-area';

  // Section for human ships
  const humanShipsArea = document.createElement('section');
  humanShipsArea.id = 'human-ships-wrapper';

  // Dropdown for human ships
  const humanShipsLabel = document.createElement('label');
  humanShipsLabel.setAttribute('for', 'human-ships');

  const humanShipsSelect = document.createElement('select');
  humanShipsSelect.setAttribute('name', 'human-ships');
  humanShipsSelect.id = 'human-ships-select';

  const humanCarrier = document.createElement('option');
  humanCarrier.setAttribute('value', 'carrier');
  humanCarrier.innerHTML = 'Carrier';
  humanShipsSelect.appendChild(humanCarrier);

  const humanBatleship = document.createElement('option');
  humanBatleship.setAttribute('value', 'battleship');
  humanBatleship.innerHTML = 'Battleship';
  humanShipsSelect.appendChild(humanBatleship);

  const humanDestroyer = document.createElement('option');
  humanDestroyer.setAttribute('value', 'destroyer');
  humanDestroyer.innerHTML = 'Destroyer';
  humanShipsSelect.appendChild(humanDestroyer);

  const humanSubmarine = document.createElement('option');
  humanSubmarine.setAttribute('value', 'submarine');
  humanSubmarine.innerHTML = 'Submarine';
  humanShipsSelect.appendChild(humanSubmarine);

  const humanPatrol = document.createElement('option');
  humanPatrol.setAttribute('value', 'patrol');
  humanPatrol.innerHTML = 'Patrol Boat';
  humanShipsSelect.appendChild(humanPatrol);

  // Area for huma to place ships
  const shipPlacementWrapper = document.createElement('section');
  shipPlacementWrapper.id = 'ship-placement-wrapper';

  const xLabel = document.createElement('label');
  xLabel.setAttribute('for', 'x-coord');

  const xSelect = document.createElement('select');
  xSelect.setAttribute('name', 'x-coord');
  xSelect.id = 'x-coord';

  const x1 = document.createElement('option');
  x1.setAttribute('value', '1');
  x1.innerHTML = '1';
  xSelect.appendChild(x1);

  const x2 = document.createElement('option');
  x2.setAttribute('value', '2');
  x2.innerHTML = '2';
  xSelect.appendChild(x2);

  const x3 = document.createElement('option');
  x3.setAttribute('value', '3');
  x3.innerHTML = '3';
  xSelect.appendChild(x3);

  const x4 = document.createElement('option');
  x4.setAttribute('value', '4');
  x4.innerHTML = '4';
  xSelect.appendChild(x4);

  const x5 = document.createElement('option');
  x5.setAttribute('value', '5');
  x5.innerHTML = '5';
  xSelect.appendChild(x5);

  const x6 = document.createElement('option');
  x6.setAttribute('value', '6');
  x6.innerHTML = '6';
  xSelect.appendChild(x6);

  const x7 = document.createElement('option');
  x7.setAttribute('value', '7');
  x7.innerHTML = '7';
  xSelect.appendChild(x7);

  const x8 = document.createElement('option');
  x8.setAttribute('value', '8');
  x8.innerHTML = '8';
  xSelect.appendChild(x8);

  const x9 = document.createElement('option');
  x9.setAttribute('value', '9');
  x9.innerHTML = '9';
  xSelect.appendChild(x9);

  const x10 = document.createElement('option');
  x10.setAttribute('value', '10');
  x10.innerHTML = '10';
  xSelect.appendChild(x10);

  const yLabel = document.createElement('label');
  yLabel.setAttribute('for', 'y-coord');

  const ySelect = document.createElement('select');
  ySelect.setAttribute('name', 'y-coord');
  ySelect.id = 'y-coord';

  const y1 = document.createElement('option');
  y1.setAttribute('value', '1');
  y1.innerHTML = '1';
  ySelect.appendChild(y1);

  const y2 = document.createElement('option');
  y2.setAttribute('value', '2');
  y2.innerHTML = '2';
  ySelect.appendChild(y2);

  const y3 = document.createElement('option');
  y3.setAttribute('value', '3');
  y3.innerHTML = '3';
  ySelect.appendChild(y3);

  const y4 = document.createElement('option');
  y4.setAttribute('value', '4');
  y4.innerHTML = '4';
  ySelect.appendChild(y4);

  const y5 = document.createElement('option');
  y5.setAttribute('value', '5');
  y5.innerHTML = '5';
  ySelect.appendChild(y5);

  const y6 = document.createElement('option');
  y6.setAttribute('value', '6');
  y6.innerHTML = '6';
  ySelect.appendChild(y6);

  const y7 = document.createElement('option');
  y7.setAttribute('value', '7');
  y7.innerHTML = '7';
  ySelect.appendChild(y7);

  const y8 = document.createElement('option');
  y8.setAttribute('value', '8');
  y8.innerHTML = '8';
  ySelect.appendChild(y8);

  const y9 = document.createElement('option');
  y9.setAttribute('value', '9');
  y9.innerHTML = '9';
  ySelect.appendChild(y9);

  const y10 = document.createElement('option');
  y10.setAttribute('value', '10');
  y10.innerHTML = '10';
  ySelect.appendChild(y10);

  const orientationLabel = document.createElement('label');
  orientationLabel.setAttribute('for', 'orientation');

  const orientationSelect = document.createElement('select');
  orientationSelect.setAttribute('name', 'orientation');
  orientationSelect.id = 'orientation-select';

  const horizontalSelect = document.createElement('option');
  horizontalSelect.setAttribute('value', 'horizontal');
  horizontalSelect.innerHTML = 'Horizontal';
  orientationSelect.appendChild(horizontalSelect);

  const verticalSelect = document.createElement('option');
  verticalSelect.setAttribute('value', 'vertical');
  verticalSelect.innerHTML = 'Vertical';
  orientationSelect.appendChild(verticalSelect);

  const placeButton = document.createElement('button');
  placeButton.id = 'place-ship';
  placeButton.innerHTML = 'Place Ship';

  shipPlacementWrapper.appendChild(xLabel);
  shipPlacementWrapper.appendChild(xSelect);
  shipPlacementWrapper.appendChild(yLabel);
  shipPlacementWrapper.appendChild(ySelect);
  shipPlacementWrapper.appendChild(orientationLabel);
  shipPlacementWrapper.appendChild(orientationSelect);
  shipPlacementWrapper.appendChild(placeButton);

  humanShipsArea.appendChild(humanShipsLabel);
  humanShipsArea.appendChild(humanShipsSelect);
  humanShipsArea.appendChild(shipPlacementWrapper);

  // Create wrapper for start and restart buttons
  const buttonWrapper = document.createElement('section');
  buttonWrapper.id = 'start-restart-wrapper';

  /*
    Create button that allows human to start game once ships
    have been selected. Initially disabled
  */
  const startButton = document.createElement('button');
  startButton.id = 'start-game-button';
  startButton.setAttribute('disabled', true);
  startButton.innerHTML = 'Start';

  // Create button that allows human to restart at any time
  const restartButton = document.createElement('button');
  restartButton.id = 'restart-game-button';
  restartButton.innerHTML = 'Restart';

  buttonWrapper.appendChild(startButton);
  buttonWrapper.appendChild(restartButton);

  // Area for AI ships
  const aiShipsArea = document.createElement('section');
  aiShipsArea.id = 'ai-ships-wrapper';

  // List for AI ships
  const aiShipsList = document.createElement('ul');
  aiShipsList.id = 'ai-list';

  const aiCarrier = document.createElement('li');
  aiCarrier.id = 'ai-carrier';
  aiCarrier.innerHTML = 'Carrier';
  aiShipsList.appendChild(aiCarrier);

  const aiBattleship = document.createElement('li');
  aiBattleship.id = 'ai-battleship';
  aiBattleship.innerHTML = 'Battleship';
  aiShipsList.appendChild(aiBattleship);

  const aiDestroyer = document.createElement('li');
  aiDestroyer.id = 'ai-destroyer';
  aiDestroyer.innerHTML = 'Destroyer';
  aiShipsList.appendChild(aiDestroyer);

  const aiSubmarine = document.createElement('li');
  aiSubmarine.id = 'ai-submarine';
  aiSubmarine.innerHTML = 'Submarine';
  aiShipsList.appendChild(aiSubmarine);

  const aiPatrol = document.createElement('li');
  aiPatrol.id = 'ai-patrol';
  aiPatrol.innerHTML = 'Patrol Boat';
  aiShipsList.appendChild(aiPatrol);

  aiShipsArea.appendChild(aiShipsList);

  informationArea.appendChild(humanShipsArea);
  informationArea.appendChild(buttonWrapper);
  informationArea.appendChild(aiShipsArea);

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
  content.appendChild(informationArea);
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
      // Will only run if board value is not 0 and if selected DOM element does not already have child
      if (
        boardArray[i][j] != 0 &&
        !boardDOM.querySelector(`#board-1-space-${i}-${j}`).firstChild
      ) {
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

const removeShipOption = function removeShipFromDropdown(
  shipDropdown,
  shipToRemove
) {
  /*
    This function removes a ship from the dropdown after a human places
    it, so it cannot be selected more than once
  */

  shipDropdown.removeChild(shipToRemove);
};

const enableButton = function enableCurrentlyDisabledButton(buttonToEnable) {
  /*
    This funciton enables a button. Used to enable the start button after
    the user is done placing ships
  */
  buttonToEnable.removeAttribute('disabled');
};

const startGame = function startGameWhenStartButtonClicked(gameArea) {
  /*
    This function starts the game when the start button is clicked,
    by removing the styling that disables clicking
  */

  gameArea.removeAttribute('style');
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
  removeShipOption,
  enableButton,
  startGame,
  updateHumanBoard,
  updateAIBoard,
  showGameOver,
};
