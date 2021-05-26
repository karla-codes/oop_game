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

  // //checks to see if the letter selected by the player matches a letter in the phrase
  // checkLetter(selectedLetter) {}
  // // reveals the letter(s) on the board that matches the player's selection
  // showMatchedLetter() {}
}
