//const newPhrase = new Phrase();
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.

class Game {
  constructor(phrases, missed){
    this.phrases = phrases.map((phrase) => new Phrase(phrase));
    this.missed = 0;
    this.randomPhrase = new Phrase(this.getRandomPhrase());//new object
  }

  getRandomPhrase() {//randomly selects phrase from array, returns split up phrase fitting placeholders
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
 }

 handleInteraction(letter){
   /*this method checks to see if the button clicked by
    the player matches a letter in the phrase.
    */
    const phraseDiv = document.querySelector("#phrase ul");
    //if(phraseDiv.textContent.includes(letter))
    const e = event.target;
    e.disabled = true;

    /*If the selected letter matches, call the showMatchedLetter() method on
    the phrase and then call the checkForWin() method.*/
    if(phraseDiv.textContent.includes(letter)){//if checkletter is flase, call removeLife()
      e.classList.add('chosen');
      this.randomPhrase.showMatchedLetter(letter);
      this.checkForWin();
    }
    else{
      console.log('wrong');
      e.classList.add('wrong');
      this.removeLife();
    }
 }//end handleInteraction

removeLife(){
  //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
  // if (this.missed === 5) {
  //   this.gameOver();
  // }
}
checkForWin(){
  //this method checks to see if the player has selected all of the letters.
}
gameOver(){
  //if missed === 5 game over!
  //this method displays a message if the player wins or a different message if they lose.
}

 startGame() {
  this.randomPhrase.addPhraseToDisplay();
  this.missed = 0;
}


}//end game class
