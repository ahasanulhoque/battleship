import {
  createPage,
  renderBoard,
  updateHumanBoard,
  updateAI,
  updateAIBoard,
} from './dom-manipulation.js';
import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';
import { Ship } from './Ship.js';

const gameloop = (function loopThroughGame() {
  // Initialize page with empty boards displayed on screen
  createPage(document.querySelector('#content'));

  // Initialize the boards
  const humanBoard = Gameboard();
  const aiBoard = Gameboard();

  // Initialize the players
  const humanPlayer = Player('human', aiBoard.board);
  const aiPlayer = Player('AI', humanBoard.board);

  // Initialize the human ships (***MANUALLY PLACING FOR NOW***)
  humanBoard.placeShip(Ship(5, 'A0'), 8, 4, 'horizontal');
  humanBoard.placeShip(Ship(4, 'A1'), 1, 1, 'vertical');
  humanBoard.placeShip(Ship(3, 'A2'), 0, 9, 'vertical');
  humanBoard.placeShip(Ship(3, 'A3'), 3, 3, 'horizontal');
  humanBoard.placeShip(Ship(2, 'A4'), 5, 7, 'horizontal');

  // Update human player's board in DOM
  renderBoard(humanBoard.board, document.querySelector('#board-one'));

  // Initialize the AI ships (***MANUALLY PLACING FOR NOW***)
  aiBoard.placeShip(Ship(5, 'B0'), 0, 2, 'vertical');
  aiBoard.placeShip(Ship(4, 'B1'), 6, 3, 'horizontal');
  aiBoard.placeShip(Ship(3, 'B2'), 9, 0, 'horizontal');
  aiBoard.placeShip(Ship(3, 'B3'), 1, 3, 'vertical');
  aiBoard.placeShip(Ship(2, 'B4'), 5, 7, 'vertical');

  // Attach event listener to enemy board to allow human to attack it
  const boardTwo = document.querySelector('#board-two');
  boardTwo.onclick = (e) => {
    // Choose target based on where player clicked
    const humanTarget = humanPlayer.chooseTarget(
      e.target.id.charAt(14),
      e.target.id.charAt(16)
    );

    if (humanTarget) {
      /* 
        This only runs if the target has not already been hit, preventing the
        board from being updated again.
      */
      aiBoard.receiveAttack(humanTarget[0], humanTarget[1]);
      updateAIBoard(aiBoard.board, humanTarget[0], humanTarget[1], boardTwo);
    }
  };
})();

export { gameloop };
