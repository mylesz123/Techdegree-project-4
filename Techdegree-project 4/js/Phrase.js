//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase; //.toLowerCase()
  }

  addPhraseToDisplay(letter){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    const phraseDiv = document.querySelector("#phrase ul");
    let tp = this.phrase.phrase.split("");
    console.log(tp); //["m", "y", " ", "l", "e", "g"]

    Array.from(tp).forEach(letter => {
      //this.phrase is iterable so make an Array.from!
      if(letter !== ' '){
        phraseDiv.innerHTML += (`<li class="hide letter ${letter}"> ${letter} </li>`);
      }//show letter
      else {
        phraseDiv.innerHTML += `<li class="space"></li>`;
      }
      return
      //console.log(letter);
    });
  }//end addPhraseToDisplay

  checkletter(letter){
    //letter selected must match a letter in the phrase.
    const check = this.phrase; //.toLowerCase()
    if(check.includes(letter)){return true}
    else{return false};
  }

  showMatchedLetter(letter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    //loop list item. If the text content matches the letter, add the class "show"

    //const hidden = `.hide.letter.${letter}`;
    // $('#phrase li').removeClass('hide').addClass('show');

    console.log(letter);
    let li = $('#phrase li');
    console.log(li);

    for (let i = 0; i < li.length; i++){
      if (li[i].textContent.toLowerCase() == letter.toLowerCase()){
        console.log(li[i]);
        $(li[i]).removeClass('hide').addClass('show');
      }
    }
  }

}//end phrase class
