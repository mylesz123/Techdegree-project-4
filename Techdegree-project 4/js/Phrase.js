//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase; //.toLowerCase()
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = document.querySelector("#phrase ul");
    console.log(this.phrase); //["m", "y", " ", "l", "e", "g"]

    Array.from(this.phrase).forEach(letter => {
      //this.phrase is iterable so make an Array.from!
      if(letter !== ' '){
        phraseDiv.innerHTML += (`<li class="hide letter ${letter}"> ${letter} </li>`);
      }//show letter
      else {
        phraseDiv.innerHTML += `<li class="space"></li>`;
      }
      //console.log(letter);
    });
  }//end addPhraseToDisplay

  checkletter(letter){
    //letter selected must match a letter in the phrase.
    const check = this.phrase.toLowerCase();
    return check.includes(letter);
  }

  showMatchedLetter(targetLetter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    const hidden = `.hide.letter.${selected}`;
    $(hidden).removeClass('hide').addClass('show');
  }
}//end phrase class
