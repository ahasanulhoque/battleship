const createPage = function createPageOnInitialPageLoad(content) {
  const pageTitle = document.createElement('h1');
  pageTitle.id = 'page-title';
  pageTitle.innerHTML = 'BATTLESHIP';

  const playArea = document.createElement('section');
  playArea.id = 'play-area';

  const boardOne = document.createElement('section');
  boardOne.id = 'board-one';

  const boardTwo = document.createElement('section');
  boardTwo.id = 'board-two';

  const createBoard = function createEachSpaceOnBoard(
    boardWrapper,
    boardNumber
  ) {
    /*
        This function will create an empty gameboard.
        boardWrapper should be boardOne or boardTwo, which
        will be appended with spaces of board.
        boardNumber should be 1 or 2, which will be used in
        ids for spaces
    */
    for (let i = 0; i < 10; i++) {
      const newRow = document.createElement('div');
      newRow.id = `board-${boardNumber}-row-${i}`;
      newRow.classList.add('row');

      for (let j = 0; j < 10; j++) {
        const newSpace = document.createElement('div');
        newSpace.id = `board-${boardNumber}-space-${i}-${j}`;
        newSpace.classList.add('space');
        newRow.appendChild(newSpace);
      }

      boardWrapper.appendChild(newRow);
    }
  };

  createBoard(boardOne, 1);
  createBoard(boardTwo, 2);

  playArea.appendChild(boardOne);
  playArea.appendChild(boardTwo);

  content.appendChild(pageTitle);
  content.appendChild(playArea);
};

export { createPage };
