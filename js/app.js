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
startGameBtn.addEventListener('click', e => {
  const liItems = phrase.querySelectorAll('li');
  liItems.forEach(li => li.remove());

  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('chosen', 'wrong');
    button.classList.add('key');
  });

  hearts.forEach(
    heart => (heart.attributes[0].textContent = 'images/liveHeart.png')
  );

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
  const keyLetter = e.key;
  const matchingButton = keyboardButtons.filter(
    button => button.textContent === keyLetter
  );
  game.handleInteraction(matchingButton[0]);
});
