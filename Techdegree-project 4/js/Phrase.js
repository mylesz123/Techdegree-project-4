//console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){//adds letter placeholders to display when game starts.
  //Each letter is presented by an empty box, one list item for each letter.
    const letterCheck = /^[a-zA-Z]+$/;
    const spaceCheck = /^\s+$/;
    const phraseDiv = $("#phrase ul");

    this.phrase.forEach(string => {
      const li = document.createElement('li');
      li.textContent = string;
      $(phraseDiv).append(li);
      let insert;

      if(string.value.match(spaceCheck)){
          insert = `<li class="hide space">${string}</li>`;
      } else if(string.value.match(letterCheck)) {
          insert = `<li class="hide letter">${string}</li>`;
      }
      phraseDiv.innerHTML += insert;

    });
  }//end addPhraseToDisplay

}//end phrase class
