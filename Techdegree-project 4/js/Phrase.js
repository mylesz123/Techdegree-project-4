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
      console.log(letter);
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

  checkletter(){
    /*Add event listener to each keyboard button,
    so by clicking a button calls the markButton() function.*/
    //let show = this;
    $('.key').on('click', (e)=> {
      const button = e.target;
      console.log(button);
      //markButton(button);

     // if(this.className === 'key'){
     //  markButton(this.textContent);
     // }
     return
    });

  }//end checkLetter

  showMatchedLetter(showLetter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    const hidden = `.hide.letter.${selected}`;
    $(hidden).removeClass('hide').addClass('show');
  }

}//end phrase class
