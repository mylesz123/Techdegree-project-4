//console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = document.querySelector("#phrase ul");
    const phrasegg = this.phrase;
    console.log(this.phrase);

    phrasegg.forEach(string => {
      const li = document.createElement('li');
      phraseDiv.appendChild(li);
      li.setAttribute('class', 'hide');
      li.textContent = string;
      // const letterCheck = /^[a-zA-Z]+$/;
      // const spaceCheck = /^\s+$/;
      return string !== ' ' ? li.className = 'letter' : li.className = 'space';

    });

  }//end addPhraseToDisplay

  checkLetter(letter){
    /*checks to see if letter selected by
    player matches a letter in the phrase.*/
    const input = document.querySelector('.letter');
    console.log(this.phrase.includes(letter));
    console.log(letter);

    letter.forEach(li => {
      console.log(li);
      return letter === li.innerHTML ? this.showMatchedLetter(li): li.className = 'hide';
    });

  }//end checkLetter

  showMatchedLetter(showLetter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    showLetter.className = 'show';
  }

}//end phrase class
