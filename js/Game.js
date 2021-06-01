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
    // hide start screen overlay
    overlay.style.display = 'none';
    // set activePhrase value
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNum];
    return randomPhrase;
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    // disable selected letter
    button.disabled = true;

    // check to see if button clicked contains matching letter
    const matchingLetter = this.activePhrase.checkLetter(button.textContent);

    // if phrase includes the guessed letter, add the `chosen` CSS class to
    // selected letter's keyboard button, call showMatchedLetter() method on the
    // phrase, and then call the checkForWin() method.
    // if phrase does NOT include the guessed letter, add 'wrong' CSS class to
    // selected letter's keyboard button and call the removeLife() method
    if (matchingLetter) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.textContent);

      // if the player has won the game, call the gameOver() method
      const gameResults = this.checkForWin();

      if (gameResults) {
        this.gameOver(true);
      }
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const phraseLetters = phrase.querySelectorAll('.letter');
    const displayedLetters = phrase.querySelectorAll('.show');

    if (phraseLetters.length === displayedLetters.length) {
      return true;
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

    this.resetGame();
  }

  resetGame() {
    const ul = phrase.querySelector('ul');
    ul.innerHTML = '';

    keyboardButtons.forEach(button => {
      button.disabled = false;
      button.classList.remove('chosen', 'wrong');
      button.classList.add('key');
    });

    hearts.forEach(
      heart => (heart.attributes[0].textContent = 'images/liveHeart.png')
    );
  }
}
