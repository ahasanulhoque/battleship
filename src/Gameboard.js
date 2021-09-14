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
          board[row + i][column] = ship.shipHealth[i];
        }
      } else if (orientation === 'horizontal' && column + ship.length < 10) {
        /* 
          If ship is being placed horizontally, verify placement is valid
          Then place ship
        */

        for (let i = 0; i < ship.length; i++) {
          board[row][column + i] = ship.shipHealth[i];
        }
      }
    }
  };

  return { board, placeShip };
};

export { Gameboard };
