//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase; //.toLowerCase()
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = document.querySelector("#phrase ul");
    console.log(this.phrase);

    Array.from(this.phrase).forEach(letter => {
      //this.phrase is iterable so make an Array.from!
      if(letter !== ' '){
        phraseDiv.innerHTML +=
        (`<li class="hide letter ${letter}">${letter}</li>`);
      }
      else {
        phraseDiv.innerHTML +=
        (`<li class="space"></li>`);
      }
    });

      // const li = document.createElement('li');
      // phraseDiv.appendChild(li);//appending to show letters div
      // li.setAttribute('class', 'hide');
      // li.innerHTML = letter;
      // return letter !== ' ' ?
      // phraseDiv.innerHTML +=
      //   (`<li class="hide letter ${letter}">${letter}</li>`) :
      // phraseDiv.innerHTML +=
      //   (`<li class="space"></li>`);

     //};

  }//end addPhraseToDisplay

  checkletter(letter){
    //letter selected must match a letter in the phrase.
    console.log(letter);
    const letterInPhrase = this.phrase.toLowerCase();
    return letterInPhrase.match(selected);
  }//end checkLetter

  showMatchedLetter(showLetter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    const hidden = `.hide.letter.${selected}`;
    $(hidden).removeClass('hide').addClass('show');
  }

}//end phrase class
