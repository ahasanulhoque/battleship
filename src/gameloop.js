import {
  createPage,
  renderBoard,
  updateHumanBoard,
  updateAIBoard,
  showGameOver,
} from './dom-manipulation.js';
import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';
import { Ship } from './Ship.js';

const gameloop = (function loopThroughGame() {
  // Initialize page with empty boards displayed on screen
  createPage(document.querySelector('#content'));

  // Initialize the boards
  let humanBoard = Gameboard();
  let aiBoard = Gameboard();

  // Initialize the players
  let humanPlayer = Player('human', aiBoard.board);
  let aiPlayer = Player('AI', humanBoard.board);

  // Select the boards in the DOM
  let boardOne = document.querySelector('#board-one');
  let boardTwo = document.querySelector('#board-two');

  // Select the button to restart game after it is over
  let restartButton = document.querySelector('#play-again-button');

  // Initialize the human ships (***MANUALLY PLACING FOR NOW***)
  humanBoard.placeShip(Ship(5, 'A0'), 8, 4, 'horizontal');
  humanBoard.placeShip(Ship(4, 'A1'), 1, 1, 'vertical');
  humanBoard.placeShip(Ship(3, 'A2'), 0, 9, 'vertical');
  humanBoard.placeShip(Ship(3, 'A3'), 3, 3, 'horizontal');
  humanBoard.placeShip(Ship(2, 'A4'), 5, 7, 'horizontal');

  // Update human player's board in DOM
  renderBoard(humanBoard.board, boardOne);

  // Initialize the AI ships (***MANUALLY PLACING FOR NOW***)
  aiBoard.placeShip(Ship(5, 'B0'), 0, 2, 'vertical');
  aiBoard.placeShip(Ship(4, 'B1'), 6, 3, 'horizontal');
  aiBoard.placeShip(Ship(3, 'B2'), 9, 0, 'horizontal');
  aiBoard.placeShip(Ship(3, 'B3'), 1, 3, 'vertical');
  aiBoard.placeShip(Ship(2, 'B4'), 5, 7, 'vertical');

  // This function runs when the human player clicks the AI board to attack
  const playGame = function playOnHumanClick(e) {
    // Choose target based on where player clicked
    const humanTarget = humanPlayer.chooseTarget(
      e.target.id.charAt(14),
      e.target.id.charAt(16)
    );

    if (humanTarget) {
      /* 
        This only runs if the target has not already been hit, preventing the
        board from being updated again and from the AI from attacking until a valid
        target is chosen.
      */

      // Attack the AI board and update the AI board in the DOM
      aiBoard.receiveAttack(humanTarget[0], humanTarget[1]);
      updateAIBoard(aiBoard.board, humanTarget[0], humanTarget[1], boardTwo);

      // AI player chooses target. Human board is attacked and human board is updated in DOM
      const aiTarget = aiPlayer.chooseTarget();
      humanBoard.receiveAttack(aiTarget[0], aiTarget[1]);
      updateHumanBoard(humanBoard.board, aiTarget[0], aiTarget[1], boardOne);
      endGame();
    }
  };

  // This function will check if the game is over
  const endGame = function checkIfGameIsOver() {
    if (humanBoard.checkAllSunk() || aiBoard.checkAllSunk()) {
      let result;
      if (humanBoard.checkAllSunk()) {
        result = 'lose';
      } else if (aiBoard.checkAllSunk()) {
        result = 'win';
      }
      showGameOver(
        document.querySelector('#game-over-modal'),
        document.querySelector('#game-over-text'),
        result
      );
    }
  };

  // This function restarts the game
  const restartGame = function restartGameOnButtonClick() {
    // Remove all child elements of #content div
    while (document.querySelector('#content').firstChild) {
      document
        .querySelector('#content')
        .removeChild(document.querySelector('#content').firstChild);
    }

    // Render page again
    createPage(document.querySelector('#content'));

    // Select boards and restart button again
    boardOne = document.querySelector('#board-one');
    boardTwo = document.querySelector('#board-two');

    restartButton = document.querySelector('#play-again-button');

    // Initialize the boards again
    humanBoard = Gameboard();
    aiBoard = Gameboard();

    // Initialize the players again
    humanPlayer = Player('human', aiBoard.board);
    aiPlayer = Player('AI', humanBoard.board);

    // Initialize the human ships (***MANUALLY PLACING FOR NOW***)
    humanBoard.placeShip(Ship(5, 'A0'), 8, 4, 'horizontal');
    humanBoard.placeShip(Ship(4, 'A1'), 1, 1, 'vertical');
    humanBoard.placeShip(Ship(3, 'A2'), 0, 9, 'vertical');
    humanBoard.placeShip(Ship(3, 'A3'), 3, 3, 'horizontal');
    humanBoard.placeShip(Ship(2, 'A4'), 5, 7, 'horizontal');

    // Update human player's board in DOM
    renderBoard(humanBoard.board, boardOne);

    // Initialize the AI ships (***MANUALLY PLACING FOR NOW***)
    aiBoard.placeShip(Ship(5, 'B0'), 0, 2, 'vertical');
    aiBoard.placeShip(Ship(4, 'B1'), 6, 3, 'horizontal');
    aiBoard.placeShip(Ship(3, 'B2'), 9, 0, 'horizontal');
    aiBoard.placeShip(Ship(3, 'B3'), 1, 3, 'vertical');
    aiBoard.placeShip(Ship(2, 'B4'), 5, 7, 'vertical');

    // Attach event listener to enemy board to allow human to attack it again
    boardTwo.onclick = (e) => {
      playGame(e);
    };

    // Attach event listener to restart button to allow human to restart again
    restartButton.onclick = () => {
      restartGame();
    };
  };

  // Attach event listener to enemy board to allow human to attack it
  boardTwo.onclick = (e) => {
    playGame(e);
  };

  // Attach even listener to restart button to allow human to restart
  restartButton.onclick = () => {
    restartGame();
  };
})();

export { gameloop };
