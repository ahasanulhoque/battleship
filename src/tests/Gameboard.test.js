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
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
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
      [0, 0, 0, 'A0', 'A0', 'A0', 'A0', 'A0', 0, 0],
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
      [0, 'A0', 'A0', 'A0', 0, 0, 0, 0, 0, 0],
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
      [0, 0, 0, 0, 0, 0, 'A0', 'A0', 'A0', 0],
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
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
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
      [0, 0, 0, 'A1', 'A1', 'A1', 'A1', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'A0', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });
});
