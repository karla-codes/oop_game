/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// console.log(testGame.activePhrase);
// const phrases = [
//   new Phrase('I love JavaScript'),
//   new Phrase('Awesome sauce'),
//   new Phrase('Code rules'),
//   new Phrase('code and chill'),
//   new Phrase('console log'),
// ];

function logRandomPhrase(phrase) {
  console.log(phrase.phrase);
}

const game = new Game();

logRandomPhrase(game.getRandomPhrase());
logRandomPhrase(game.getRandomPhrase());
logRandomPhrase(game.getRandomPhrase());
logRandomPhrase(game.getRandomPhrase());

// console.log(game.phrases);
// const phrase = new Phrase();
