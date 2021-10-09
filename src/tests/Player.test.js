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

test('4: Player must choose target again after choosing already hit target', () => {
  const testBoard = Gameboard();
  const player1 = Player('human', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  const target = player1.chooseTarget(3, 3);
  testBoard.receiveAttack(target[0], target[1]);
  let target2 = player1.chooseTarget(3, 3);
  if (!target2) {
    target2 = player1.chooseTarget(4, 3);
  }
  testBoard.receiveAttack(target2[0], target2[1]);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('5: Player must choose target again after choosing already missed target', () => {
  const testBoard = Gameboard();
  const player1 = Player('human', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  const target = player1.chooseTarget(7, 7);
  testBoard.receiveAttack(target[0], target[1]);
  let target2 = player1.chooseTarget(7, 7);
  if (!target2) {
    target2 = player1.chooseTarget(1, 1);
  }
  testBoard.receiveAttack(target2[0], target2[1]);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 'miss', 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 'miss', 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('6: AI player randomly chooses target', () => {
  const testBoard = Gameboard();
  const player1 = Player('AI', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  const target = player1.chooseTarget();
  testBoard.receiveAttack(target[0], target[1]);
  console.log(testBoard.board);
  expect(testBoard).not.toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('7: AI player will not choose target that has already been hit', () => {
  const testBoard = Gameboard();
  const player1 = Player('AI', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  testBoard.receiveAttack(3, 3);
  const target = player1.chooseTarget();
  testBoard.receiveAttack(target[0], target[1]);
  console.log(testBoard.board);
  expect(testBoard).not.toMatchObject({
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

test('8: AI player will not choose target that has already been missed', () => {
  const testBoard = Gameboard();
  const player1 = Player('AI', testBoard.board);
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 2, 3, 'vertical');
  testBoard.receiveAttack(8, 1);
  const target = player1.chooseTarget();
  testBoard.receiveAttack(target[0], target[1]);
  console.log(testBoard.board);
  expect(testBoard).not.toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 'miss', 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});
