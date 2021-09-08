import './style.css';
import { Ship } from './Ship.js';

const title = document.createElement('h1');
title.id = 'page-title';
title.innerHTML = 'BATTLESHIP';

document.querySelector('body').appendChild(title);

console.log(Ship(5));
