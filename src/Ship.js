const Ship = (length, shipCode) => {
  /*
    length is length of ship
    shipCode is string value, shorthand to identify ship
    Convention for shipCode:
        First character: Player A or B
        Second character: Ship number for player (0, 1, 2, 3, or 4 )
        Third character: Position within ship (0, 1, 2, 3, or 4)
  */

  /*
     shipHealth will be array with each element representing one space on the ship
     shipCode value: space has not been hit
     -1: space has been hit
  */
  const shipHealth = [];

  const _createShip = (function createShipOfProvidedLength() {
    // When a Ship is created, _createShip runs to initialize the shipHealth array
    for (let i = 0; i < length; i++) {
      shipHealth.push(`${shipCode}${i}`);
    }
  })();

  const hit = function hitShip(target) {
    /* 
      hit() takes in target space that is being attacked.
      If it has not been attacked yet, it it set to 0
    */
    if (shipHealth[target] != -1) {
      shipHealth[target] = -1;
    }
  };

  const isSunk = function testIfShipSunk() {
    /*
      isSunk() checks every element of array for whether they have been hit
      If they have all been hit, return true
      If not, return false
    */
    if (shipHealth.every((e) => e === -1)) {
      return true;
    }
    return false;
  };

  return { length, shipCode, shipHealth, hit, isSunk };
};

export { Ship };
