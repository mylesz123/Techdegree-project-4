console.log('hi');
const phrases = [
  'holy cow',
  'sweet Jesus',
  'you betcha',
  'my leg',
  'love sosa'
];
//perform basic DOM selection, add event handlers, and to reset the game when it ends
const newGame = new Game();

function resetDisplay(){//this function hides the start screen overlay.
  $('#overlay ').hide();
}

function markButton(){
  /*this function is called when a player selects a letter.
  It disables the button on the onscreen keyboard,
  calls the handleInteraction() method of the Game class.
  */
  $('#qwerty button').on('click keyup', (e) => {
    console.log(e.target);
  });
}

/******EVENT listeners******/
/*Add event listener to "Start Game" button,
calls the resetDisplay() function, creates new Game object*/
$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  resetDisplay();
  newGame.startGame();
});//end click event

/*Add event listeners to each of the keyboard buttons,
so that clicking a button calls the markButton() function.*/
const keys = document.querySelectorAll('#qwerty button');
keys.forEach(key => {
    key.addEventListener('click', (e) => {
         markButton();

    });
  });
//}
