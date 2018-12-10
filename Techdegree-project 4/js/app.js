console.log('hi');
//const phra ;
const newGame = new Game(0, phrases);
//perform basic DOM selection, add event handlers, and to reset the game when it ends
function resetDisplay(){//this function hides the start screen overlay.
  $('#overlay ').hide();
}

function markButton(button){
  /*this function is called when a player selects a letter.
  It disables the button on the onscreen keyboard,
  add show class
  calls the handleInteraction() method of the Game class.
  */
  newGame.handleInteraction();
}
markButton();

/*Add event listener to "Start Game" button,
calls the resetDisplay() function, creates new Game object*/

$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  resetDisplay();
  newGame.startGame();
});
