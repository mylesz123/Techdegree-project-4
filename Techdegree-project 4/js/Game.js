//console.log('hi');
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.
const newPhrase = new Phrase();

class Game {
  constructor(phrases, missed){
    this.phrases = phrases;
    this.missed = 0;
    this.selected = [];
  }
  getRandomPhrase() {//randomly selects phrase from array, returns split up phrase fitting placeholders
    // const phrase = this.phrases;
    const pickPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return pickPhrase.split('');
    console.log(pickPhrase);

 }
 handleInteraction(letter){
   /*this method checks to see if the button clicked by the player matches a letter in the phrase.
  If it does not, then call the removeLife() method..
  If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method.*/
  if(this.phrase.checkLetter(letter)){
    this.phrase.showMatchedLetter(letter);
    this.checkForWin();
    this.selected.push(letter);
    console.log(selected);
  }
  else{
    this.missed += 1
    this.removeLife();
  }
 }
removeLife(){
  //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
  const tries = document.querySelectorAll('#scoreboard ol li');
  $('.tries').eq([this.missed]).remove();
}
checkForWin(){
  //this method checks to see if the player has selected all of the letters.
}
gameOver(){
  //this method displays a message if the player wins or a different message if they lose.
}

 startGame() {
  let showPhrase = this.getRandomPhrase();
  new Phrase(showPhrase).addPhraseToDisplay();
}


}//end game class
