/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('I am no Jedi'),
      new Phrase('may the force be with you'),
      new Phrase('scruffy looking nerfherder'),
      new Phrase('never tell me the odds'),
      new Phrase('I find your lack of faith disturbing'),
    ];
    this.activePhrase = null;
  }

  // hides start screen overlay and initializes game by selecting a random phrase
  // and displaying it to the user
  startGame() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.getRandomPhrase().addPhraseToDisplay();
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[randomNum];
    return this.activePhrase;
  }
}
