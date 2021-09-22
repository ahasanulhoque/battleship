const Gameboard = () => {
  const board = [];

  const _createBoard = (function createEmptyBoard() {
    /*
        This function will create an empty gameboard
        Empty spaces are represented by 0
    */
    for (let i = 0; i < 10; i++) {
      board.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  })();

  // missedShots is array that will keep track of coordinates where miss occurred
  const missedShots = [];

  const allShips = [];

  const placeShip = function placeShipAtSpecifiedCoordinates(
    ship,
    row,
    column,
    orientation
  ) {
    // Ship is a ship object created elsewhere
    // row - start position of ship in first board array element
    // column - start position of ship in second board array element
    // orientation - values are "vertical" or "horizontal"

    if (row < 10 && column < 10) {
      // First verify starting positions are valid
      if (orientation === 'vertical' && row + ship.length < 10) {
        /* 
          If ship is being placed vertically, verify placement is valid
          Then place ship
        */

        for (let i = 0; i < ship.length; i++) {
          // Check if next space on board is 0
          if (board[row + i][column] === 0) {
            board[row + i][column] = ship.shipHealth[i];
          } else {
            // If next space is not 0, remove every space of the ship so far and break
            i--;
            while (i >= 0) {
              board[row + i][column] = 0;
              i--;
            }
            break;
          }

          if (i === ship.length - 1) {
            allShips.push(ship);
          }
        }
      } else if (orientation === 'horizontal' && column + ship.length < 10) {
        /* 
          If ship is being placed horizontally, verify placement is valid
          Then place ship
        */

        for (let i = 0; i < ship.length; i++) {
          // Check if next space on board is 0
          if (board[row][column + i] === 0) {
            board[row][column + i] = ship.shipHealth[i];
          } else {
            // If next space is not 0, remove every space of the ship so far and break
            i--;
            while (i >= 0) {
              board[row][column + i] = 0;
              i--;
            }
            break;
          }

          if (i === ship.length - 1) {
            allShips.push(ship);
          }
        }
      }
    }
  };

  const receiveAttack = function receiveAttackAtSpecifiedCoordinates(
    row,
    column
  ) {
    // Check if coordinates have value other than 0 and -1
    if (board[row][column] != 0 && board[row][column] != -1) {
      // Get ship number to be used as element in allShips
      const shipNumber = board[row][column].charAt(
        board[row][column].length - 2
      );

      // Get position on ship to be passed to ship's hit() function
      const shipTarget = board[row][column].charAt(
        board[row][column].length - 1
      );

      // Hit ship
      allShips[shipNumber].hit(shipTarget);

      // Change value on board to match ship value
      board[row][column] = -1;
    } else if (board[row][column] === 0) {
      missedShots.push([row, column]);
    }
  };

  // function to check if all ships are sunk

  return { board, missedShots, allShips, placeShip, receiveAttack };
};

export { Gameboard };
