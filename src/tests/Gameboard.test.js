import { Gameboard } from '../Gameboard.js';
import { Ship } from '../Ship.js';

test('1: Create gameboard', () => {
  const testBoard = Gameboard();
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('2: Place a ship vertically', () => {
  const testBoard = Gameboard();
  const testShip = Ship(3, 'A0');
  testBoard.placeShip(testShip, 1, 3, 'vertical');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('3: Place a ship horizontally', () => {
  const testBoard = Gameboard();
  const testShip = Ship(5, 'A0');
  testBoard.placeShip(testShip, 1, 3, 'horizontal');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 'A01', 'A02', 'A03', 'A04', 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("4: Can't place ship beyond vertical edges", () => {
  const testBoard = Gameboard();
  const testShip = Ship(3, 'A0');
  testBoard.placeShip(testShip, 0, 8, 'horizontal');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("5: Can't place ship beyond horizontal edges", () => {
  const testBoard = Gameboard();
  const testShip = Ship(4, 'A0');
  testBoard.placeShip(testShip, 8, 1, 'vertical');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("6: Can't place ship if it would intersect with another ship (opposite orientation)", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(3, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 1, 1, 'horizontal');
  testBoard.placeShip(testShip2, 0, 2, 'vertical');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 'A00', 'A01', 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("7: Can't place ship if it would intersect with another ship (same row)", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(3, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 5, 6, 'horizontal');
  testBoard.placeShip(testShip2, 5, 3, 'horizontal');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 'A00', 'A01', 'A02', 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("8: Can't place ship if it would intersect with another ship (same column)", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'vertical');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A04', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('9: Can place multiple ships if they do not intersect', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A10', 'A11', 'A12', 'A13', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A04', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("10: Can create ships and place them in board's array", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
      },
      { length: 4, shipCode: 'A1', shipHealth: ['A10', 'A11', 'A12', 'A13'] },
    ],
  });
});

test("11: If second ship can't be placed, do not put it in allShips array", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'vertical');
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
      },
    ],
  });
});

test("12: Hit ship using Gameboard's receiveAttack function", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.receiveAttack(4, 3);
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', -1, 'A02', 'A03', 'A04'],
      },
    ],
    missedShots: [],
  });
});

test("13: Hit second ship using Gameboard's receiveAttack function", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  testBoard.receiveAttack(1, 6);
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
      },
      { length: 4, shipCode: 'A1', shipHealth: ['A10', 'A11', 'A12', -1] },
    ],
    missedShots: [],
  });
});

test('14: Multiple ships on board, miss shot', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  testBoard.receiveAttack(0, 6);
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
      },
      { length: 4, shipCode: 'A1', shipHealth: ['A10', 'A11', 'A12', 'A13'] },
    ],
    missedShots: [[0, 6]],
  });
});

test('15: Miss shot and see board unchanged', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  testBoard.receiveAttack(0, 6);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A10', 'A11', 'A12', 'A13', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A04', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('16: Hit ship and see board changed', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  const testShip2 = Ship(4, 'A1');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.placeShip(testShip2, 1, 3, 'horizontal');
  testBoard.receiveAttack(1, 6);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A10', 'A11', 'A12', -1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A00', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A01', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A02', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A03', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A04', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test('17: Miss multiple times', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.receiveAttack(7, 2);
  testBoard.receiveAttack(9, 9);
  testBoard.receiveAttack(2, 3);
  expect(testBoard).toMatchObject({
    allShips: [
      {
        length: 5,
        shipCode: 'A0',
        shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
      },
    ],
    missedShots: [
      [7, 2],
      [9, 9],
      [2, 3],
    ],
  });
});

test('18: Hit ship multiple times and see board changed', () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.receiveAttack(3, 3);
  testBoard.receiveAttack(4, 3);
  testBoard.receiveAttack(5, 3);
  testBoard.receiveAttack(6, 3);
  testBoard.receiveAttack(7, 3);
  expect(testBoard).toMatchObject({
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});

test("19: Sink ship using Gameboard's receiveAttack() function", () => {
  const testBoard = Gameboard();
  const testShip1 = Ship(5, 'A0');
  testBoard.placeShip(testShip1, 3, 3, 'vertical');
  testBoard.receiveAttack(3, 3);
  testBoard.receiveAttack(4, 3);
  testBoard.receiveAttack(5, 3);
  testBoard.receiveAttack(6, 3);
  testBoard.receiveAttack(7, 3);
  expect(testShip1.isSunk()).toBe(true);
});
