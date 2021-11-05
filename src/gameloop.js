import { createPage, renderBoard } from './dom-manipulation.js';
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
  const humanPlayer = Player('human', aiBoard);
  const aiPlayer = Player('AI', humanBoard);

  // Initialize the ships (***MANUALLY PLACING FOR NOW***)
  humanBoard.placeShip(Ship(5, 'A0'), 8, 4, 'horizontal');
  humanBoard.placeShip(Ship(4, 'A1'), 1, 1, 'vertical');
  humanBoard.placeShip(Ship(3, 'A2'), 0, 9, 'vertical');
  humanBoard.placeShip(Ship(3, 'A3'), 3, 3, 'horizontal');
  humanBoard.placeShip(Ship(2, 'A4'), 5, 7, 'horizontal');

  // Update human player's board in DOM
  renderBoard(humanBoard.board, document.querySelector('#board-one'));
})();

export { gameloop };
