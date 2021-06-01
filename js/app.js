/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameBtn = document.querySelector('#btn__reset');
const gameKeyboard = document.querySelector('#qwerty');
const keyboardButtons = [].slice.call(gameKeyboard.querySelectorAll('.key'));
const overlay = document.querySelector('#overlay');
const overlayH1 = overlay.querySelector('h1');
const phrase = document.querySelector('#phrase');
const hearts = document.querySelectorAll('.tries img');

// starts new game on button click
startGameBtn.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

// handles game interactions based on the gameboard key pressed
gameKeyboard.addEventListener('click', e => {
  const key = e.target;
  if (key.className === 'key') {
    game.handleInteraction(key);
  }
});

// handles game interactions based on keyboard key pressed
document.addEventListener('keyup', e => {
  if (overlay.style.display) {
    const keyLetter = e.key.toLowerCase();
    keyboardButtons.forEach(button => {
      if (keyLetter === button.textContent) {
        if (!button.disabled) {
          const matchingButton = keyboardButtons.filter(
            button => button.textContent === keyLetter
          );
          game.handleInteraction(matchingButton[0]);
        }
      }
    });
  }
});
