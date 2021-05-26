/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase();
// const game = new Game();
// game.startGame();
// console.log(game.activePhrase.phrase);
// game.getRandomPhrase().addPhraseToDisplay();

// console.log(game.phrases);
let game;
const startGameBtn = document.querySelector('#btn__reset');

startGameBtn.addEventListener('click', e => {
  game = new Game().startGame();
});
