/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // displays phrase on game board
  addPhraseToDisplay() {
    const phraseLetters = this.phrase.split('');
    const ul = document.querySelector('#phrase ul');
    const listItems = phraseLetters
      .map(letter => {
        if (letter === ' ') {
          return `<li class="space">${letter}</li>`;
        } else {
          return `<li class="hide letter ${letter}">${letter}</li>`;
        }
      })
      .forEach(item => ul.insertAdjacentHTML('beforeend', item));
    return listItems;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(button) {
    const buttonLetter = button.textContent;
    const phraseLetters = this.phrase.split('');
    const matchingLetter = phraseLetters.includes(buttonLetter);

    if (matchingLetter) {
      this.showMatchedLetter(button, buttonLetter);
    } else {
      game.removeLife();
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(button, letter) {
    const matchedLetters = document.querySelectorAll(`.${letter}`);
    button.classList.add('chosen');
    matchedLetters.forEach(letter => {
      letter.classList.remove('hide');
      letter.classList.add('show');
    });
  }
}
