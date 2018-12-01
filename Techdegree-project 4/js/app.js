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

$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  $('#overlay ').hide();
  newGame.startGame();
});//end click event
