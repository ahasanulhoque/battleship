const Gameboard = () => {
  const board = [];

  const _createBoard = (function createEmptyBoard() {
    /*
        This function will create an empty gameboard
        Empty spaces are represented by 0
    */
    for (let i = 0; i < 10; i++) {
      const newRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      board.push(newRow);
    }
  })();

  return { board };
};

export { Gameboard };
