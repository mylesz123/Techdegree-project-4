//console.log('hi');
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.
const newPhrase = new Phrase();

class Game {
  constructor(phrases, missed){
    this.phrases = phrases;
    this.missed = 0;
  }
  getRandomPhrase() {//randomly selects phrase from array, returns split up phrase fitting placeholders
    // const phrase = this.phrases;
    const pickPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return pickPhrase.split('');
    console.log(pickPhrase);

 }
 startGame() {
  //this.missed = 0;
  let showPhrase = this.getRandomPhrase();
  // phrase.addPhraseToDisplay(gamePhrase);
  new Phrase(showPhrase).addPhraseToDisplay();
}


}//end game class
