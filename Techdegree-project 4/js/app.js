console.log('hi');

const phrases = [
  'holy cow',
  'california love',
  'you betcha',
  'my leg',
  'love sosa'
];
const newGame = new Game(phrases, 0);
//passing in phrases ^^

/*Add event listener to "Start Game" button,
calls the resetDisplay() function, creates new Game object*/

$('#btn__reset').on('click', ()=>{
  $('#overlay ').hide();
  newGame.startGame();
});

/*this function is called when a player selects a letter.
It disables the button on the onscreen keyboard,
add show class
calls the handleInteraction() method of the Game class.
*/

function markButton(){
let keys = $('.key');  // selcts the key buttons
  for (let i = 0; i < keys.length; i++) {
    $(keys[i]).on('click', () => {
      newGame.handleInteraction(event.target.textContent);
    });
  };
}
markButton();
