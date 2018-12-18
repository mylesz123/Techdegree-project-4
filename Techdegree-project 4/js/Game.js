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
    const e = event.target;
    e.disabled = true;

    /*If the selected letter matches, call the showMatchedLetter() method on
    the phrase & checkForWin(), else removeLife()*/
    if(phraseDiv.textContent.includes(letter)){//if checkletter is false, call removeLife()
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
  const tries = $('.tries'); //this removes lives
  this.missed ++;
    if(this.missed <= 4){
      tries[0].remove()
    }
    else if(this.missed === 5){
        this.gameOver();
    }
}//end removeLife

checkForWin(){
  //this method checks to see if the player has selected all of the letters.
  //if all letters chosen matches all letters showing, WIN
  if($('.letter').length ===  $('.letter.show').length) {
    $('#overlay').addClass('win').show(); //winning green screen
    $('#game-over-message').text('Welcome to the winners circle!');
    $('#btn__reset').on('click', () => {
      location.reload(); //takes me back to original screen, functions as reset display
      //location method learned from fellow treehouser
    });
    return true
  }
}

gameOver(){
  //if missed === 5 game over!
  //this method displays a message if the player loses
  if (this.missed === 5) {
    $('#overlay').addClass('lose a').show();
    $('#game-over-message').text('Sorry, better luck next time!');
    $('#btn__reset').text('Play again?');
    $('#btn__reset').on('click', () => {
        location.reload(); //resetDisplay
    });
  }
}

 startGame() {
  this.randomPhrase.addPhraseToDisplay();
  this.missed = 0;
}

}//end game class
