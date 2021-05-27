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
    overlay.style.display = 'none';
    overlay.classList;
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

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    // disable selected letter
    button.disabled = true;
    // check if selected letter matches any letter(s) from phrase
    this.activePhrase.checkLetter(button);
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const phraseLetters = phrase.querySelectorAll('.letter');
    const displayedLetters = phrase.querySelectorAll('.show');

    if (phraseLetters.length === displayedLetters.length) {
      return this.gameOver(true);
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lostHeart = 'images/lostHeart.png';

    const remainingHearts = [].slice
      .call(hearts)
      .filter(
        heart => heart.attributes[0].textContent === 'images/liveHeart.png'
      );

    remainingHearts[0].attributes[0].textContent = lostHeart;

    this.missed++;

    if (this.missed === 5) {
      this.gameOver(false);
    } else {
      return;
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    overlay.style.display = '';

    if (gameWon) {
      overlayH1.textContent = 'You win!';
      overlay.className = '';
      overlay.classList.add('win');
    } else {
      overlayH1.textContent = 'You Lose. Try Again!';
      overlay.className = '';
      overlay.classList.add('lose');
    }
  }
}
