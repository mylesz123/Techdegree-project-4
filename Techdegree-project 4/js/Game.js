//console.log('hi');
//methods for starting and ending the game,
//handling interactions, getting random phrases,
//checking for a win, and removing a life counter.
class Game {
  constructor(phrase, miss){
    this.phrase = new Phrase;
    this.miss = tries;
  }
  getRandomPhrase() {//randomly selects phrase from array, returns split up phrase fitting placeholders
   const pickPhrase = phrases[Math.floor(Math.random() * phraseList.length)];
   return pickPhrase.toLowerCase().split("");
 }

}//end game class
