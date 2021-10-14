import { createPage } from './dom-manipulation.js';

const gameloop = (function loopThroughGame() {
  createPage(document.querySelector('#content'));
})();

export { gameloop };
