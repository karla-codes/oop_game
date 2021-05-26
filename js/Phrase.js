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
          return `<li class="hide letter">${letter}</li>`;
        }
      })
      .forEach(item => ul.insertAdjacentHTML('beforeend', item));
    return listItems;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    // const
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter() {}
}
