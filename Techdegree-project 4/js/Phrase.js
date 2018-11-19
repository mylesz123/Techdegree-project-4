console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){
    //this method adds letter placeholders to the display when the game starts.
    //Each letter is presented by an empty box, one list item for each letter.
  }

}//end phrase class

$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  let showPhrase = new Phrase();
  showPhrase.forEach(phrase => addPhraseToDisplay;

});//end click event
