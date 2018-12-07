console.log('hi');
const phrases = [
  'holy cow',
  'sweet Jesus',
  'you betcha',
  'my leg',
  'love sosa'
];
//const newGame = new Game();
//perform basic DOM selection, add event handlers, and to reset the game when it ends
function resetDisplay(){//this function hides the start screen overlay.
  $('#overlay ').hide();
}

function markButton(event){
  /*this function is called when a player selects a letter.
  It disables the button on the onscreen keyboard,
  calls the handleInteraction() method of the Game class.
  */
  console.log(event);
  const keyButton = $('.key');

}

/******EVENT listeners******/
/*Add event listener to "Start Game" button,
calls the resetDisplay() function, creates new Game object*/
$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  resetDisplay();
  //newGame.startGame();
});//end click event

/*Add event listener to each keyboard button,
so by clicking a button calls the markButton() function.*/

// const keys = document.getElementById('qwerty');
// $(keys).on('click', ()=> {
//  if(this.className === 'key'){
//   markButton(this.textContent);
//  }
//});
