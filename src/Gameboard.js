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

  return { board };
};

export { Gameboard };
