import { Ship } from '../Ship.js';

test('1: Create battleship', () => {
  const testShip = Ship(5);
  expect(testShip).toEqual({
    length: 5,
    shipHealth: [1, 1, 1, 1, 1],
    shipStatus: true,
  });
});
