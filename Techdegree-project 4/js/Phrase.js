//console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){//adds letter placeholders to display when game starts.
  //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = $("#phrase ul");
    const phraseString = this.phrase;
    phraseString.forEach(string => {
      const li = document.createElement('li');
      $(phraseString).append(li);
      li.textContent = string;
      li.setAttribute("class", "hide");
      return (string !== " " ? li.className = "letter" : li.className = "space");
    });
  }//end addPhraseToDisplay

}//end phrase class
