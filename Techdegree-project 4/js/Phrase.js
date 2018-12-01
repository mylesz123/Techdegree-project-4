//console.log('hi');
//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = document.querySelector("#phrase ul");
    const phrasegg = this.phrase;
    console.log(this.phrase);

    phrasegg.forEach(string => {
      const li = document.createElement('li');
      phraseDiv.appendChild(li);
      li.setAttribute('class', 'hide');
      li.textContent = string;
      // const letterCheck = /^[a-zA-Z]+$/;
      // const spaceCheck = /^\s+$/;
      return string !== ' ' ? li.className = 'letter' : li.className = 'space';

    });

  }//end addPhraseToDisplay

}//end phrase class
