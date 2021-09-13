const Gameboard = () => {
  const board = [];

  const _createBoard = (function createEmptyBoard() {
    for (let i = 0; i < 10; i++) {
      const newRow = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
      board.push(newRow);
    }
  })();

  return { board };
};

export { Gameboard };
