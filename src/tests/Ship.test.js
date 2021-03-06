import { Ship } from '../Ship.js';

test('1: Create battleship', () => {
  const testShip = Ship(5, 'A0');
  expect(testShip).toMatchObject({
    length: 5,
    shipHealth: ['A00', 'A01', 'A02', 'A03', 'A04'],
  });
});

test('2: Ship should not be sunk when first created', () => {
  const testShip = Ship(5, 'A0');
  expect(testShip.isSunk()).toBe(false);
});

test('3: Test hitting a ship', () => {
  const testShip = Ship(4, 'A0');
  testShip.hit(3);
  expect(testShip.shipHealth).toStrictEqual(['A00', 'A01', 'A02', -1]);
});

test('4: Hit ship multiple times', () => {
  const testShip = Ship(4, 'A0');
  testShip.hit(0);
  testShip.hit(2);
  expect(testShip.shipHealth).toStrictEqual([-1, 'A01', -1, 'A03']);
});

test('5: Hit ship multiple times but it has not been sunk', () => {
  const testShip = Ship(4, 'A0');
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(false);
});

test('6: Sink the ship', () => {
  const testShip = Ship(3, 'A0');
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(true);
});

test('7: See sunken ship', () => {
  const testShip = Ship(3, 'A0');
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip).toMatchObject({ length: 3, shipHealth: [-1, -1, -1] });
});
