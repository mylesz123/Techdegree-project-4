//console.log('hi');
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.
class Game {
  constructor(phrases, missed){
    this.missed = missed = 0;
    this.phrases = phrases;
  }
  getRandomPhrase(phrases) {//randomly selects phrase from array, returns split up phrase fitting placeholders
    // const phrase = this.phrases;
    const pickPhrase = Math.floor(Math.random() * (this.phrases.length));
    const RandomPhrase = new Phrase(this.phrases[pickPhrase]);
    return RandomPhrase

 }


}//end game class
