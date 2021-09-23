import { Player } from '../Player.js';
import { Gameboard } from '../Gameboard.js';
import { Ship } from '../Ship.js';

test('1: Hit board', () => {
  const testBoard = Gameboard();
  const player1 = Player('human', testBoard.board);
  const target = player1.chooseTarget(3, 3);
  testBoard.receiveAttack(target[0], target[1]);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'miss', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('2: Hit ship and see board', () => {
  const testBoard = Gameboard();
  const player1 = Player('human', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  const target = player1.chooseTarget(3, 3);
  testBoard.receiveAttack(target[0], target[1]);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('3: Hit ship and see ship', () => {
  const testBoard = Gameboard();
  const player1 = Player('human', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  const target = player1.chooseTarget(3, 3);
  testBoard.receiveAttack(target[0], target[1]);
  expect(testShip).toMatchObject({
    shipHealth: ['A00', -1, 'A02', 'A03'],
  });
});
