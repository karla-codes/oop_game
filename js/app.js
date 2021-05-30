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
const letterKeys = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
];

// starts new game on button click
startGameBtn.addEventListener('click', e => {
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
// document.addEventListener('keyup', e => {
//   if (overlay.style.display) {
//     const keyLetter = e.key.toLowerCase();
//     letterKeys.forEach(letter => {
//       if (keyLetter === letter) {
//         const matchingButton = keyboardButtons.filter(
//           button => button.textContent === keyLetter
//         );
//         game.handleInteraction(matchingButton[0]);
//       }
//     });
//   }
// });
