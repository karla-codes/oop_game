/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameBtn = document.querySelector('#btn__reset');
const gameKeyboard = document.querySelector('#qwerty');
const overlay = document.querySelector('#overlay');
const overlayH1 = overlay.querySelector('h1');
const phrase = document.querySelector('#phrase');
const hearts = document.querySelectorAll('.tries img');

startGameBtn.addEventListener('click', e => {
  const liItems = phrase.querySelectorAll('li');
  liItems.forEach(li => li.remove());

  const keyboardButtons = gameKeyboard.querySelectorAll('.key');
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

gameKeyboard.addEventListener('click', e => {
  const key = e.target;
  if (key.className === 'key') {
    game.handleInteraction(key);
  }
});
