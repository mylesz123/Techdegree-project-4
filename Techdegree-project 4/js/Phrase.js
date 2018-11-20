console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){
    //this method adds letter placeholders to the display when the game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const letter = /^[a-zA-Z]+$/;
    const space = /^\s+$/;
    let hideLetter = `<li class="hide letter"> </li>`;
    let hideSpace = `<li class="hide space"> </li>`;
    if(phrase === letter){//phrase.value.match(letter);
      //add the kind of list item needed for a letter
      document.createElement(hideLetter);
    }
    else if(phrase === space){
      //add list item needed for a space.
      document.createElement(hideLetter);
    }
  }

}//end phrase class
