//console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrases){
    this.phrases = phrases;
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = $("#phrase ul");
    const phrases = this.phrases;
    console.log(phrases)

      phrases.forEach(string => {
      //for(let i = 0; 1 <= string.length; i ++){}
      const letterCheck = /^[a-zA-Z]+$/;
      const spaceCheck = /^\s+$/;
        if(string.match(spaceCheck)){// hint : if(number.startsWith('(503)'))
            return `<li class="hide space"></li>`;
        }
        else if(string.match(letterCheck)) {
            return `<li class="hide letter">${string}</li>`;
        }
    });
    return phraseDiv.innerHTML = phrases.split();

  }//end addPhraseToDisplay

}//end phrase class
