//const newPhrase = new Phrase();
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.

class Game {
  constructor(phrases, missed){
    this.phrases = phrases.map((phrase) => new Phrase(phrase));
    this.missed = 0;
  }

  getRandomPhrase() {//randomly selects phrase from array, returns split up phrase fitting placeholders
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
 }

 handleInteraction(letter){
   /*this method checks to see if the button clicked by
    the player matches a letter in the phrase.
    */
    const e = event.target;
    e.attr('disabled', true);
    let check = this.randPhrase;

    /*If the selected letter matches, call the showMatchedLetter() method on
    the phrase and then call the checkForWin() method.*/
    if(check.checkletter(e.textContent) === true){
      check.showMatchedLetter(letter);
      e.addClass('chosen');
      this.checkForWin();
    }
    else{//else call removeLife() method..
      console.log('wrong');
      e.addClass('wrong');
      this.removeLife();
    }
 }
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
  let randPhrase = this.getRandomPhrase();
  new Phrase(randPhrase).addPhraseToDisplay();
}


}//end game class
