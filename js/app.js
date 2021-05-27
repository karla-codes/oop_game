/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameBtn = document.querySelector('#btn__reset');
const gameKeyboard = document.querySelector('#qwerty');
const overlay = document.querySelector('#overlay');
const overlayH1 = overlay.querySelector('h1');

// const letters = gameKeyboard.querySelectorAll('btn');

startGameBtn.addEventListener('click', e => {
  game = new Game();
  game.startGame();
});

gameKeyboard.addEventListener('click', e => {
  const key = e.target;
  if (key.className === 'key') {
    game.handleInteraction(key);
  }
});
