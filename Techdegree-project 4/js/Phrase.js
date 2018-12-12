//handle creation of phrases
class Phrase {
  constructor(phrase){
    this.phrase = phrase; //.toLowerCase()
  }

  addPhraseToDisplay(){
    //adds letter placeholders to display when game starts.
    //Each letter is presented by an empty box, one list item for each letter.
    // console.log(this.phrase);
    // let characters = this.phrase.split('');
    // const phraseDiv = document.querySelector("#phrase ul");
    //
    // for(let i = 0; i <= characters.length; i ++){
    //   if(characters[i] !== ' '){
    //     phraseDiv.innerHTML += (`<li class="show letter"> ${characters[i]} </li>`);
    //   }
    //   else {
    //     phraseDiv.innerHTML += `<li class="space"></li>`;
    //   }
    // };

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

  }//end addPhraseToDisplay

  checkletter(letter){
    //letter selected must match a letter in the phrase.
    const check = this.phrase.toLowerCase();
    return check.includes(letter);
  }

  showMatchedLetter(targetLetter){
    /*reveals the letter(s) on the board that matches player's selection.*/
    //const hidden = `.hide.letter.${showLetter}`;
    let li = document.querySelectorAll('li');
    let phrase = this.phrase;
    for (let i = 0; i < phrase.length; i++) {
      if(phrase[i] === targetLetter) {
          $(li).removeClass('hide').addClass('show');
      }
    }
  }

}//end phrase class
