const Ship = (length) => {
  /*
     shipHealth will be array with index representing one space on the ship
     1: space has not been hit
     0: space has been hit
  */
  let shipHealth = [];

  /*
    shipStatus is boolean to determine whether ship has sunk
    true: ship has not sunk
    false: ship has sunk
  */
  let shipStatus = true;

  // When a Ship is created, _createShip runs to initialize the shipHealth array
  const _createShip = (() => {
    for (let i = 0; i < length; i++) {
      shipHealth.push(1);
    }
  })();

  return { length, shipHealth, shipStatus };
};

export { Ship };
