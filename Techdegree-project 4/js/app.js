console.log('hi');
const phraseList = [
  'holy cow',
  'sweet Jesus',
  'you betcha',
  'my leg',
  'love sosa'
];
//perform basic DOM selection, add event handlers, and to reset the game when it ends

$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  $('#overlay ').hide();
  let showPhrase;
  showPhrase = new Phrase(phraseList);
  let newGame;
  newGame = new Game();

  showPhrase.addPhraseToDisplay(newGame.getRandomPhrase());

  //showPhrase.getRandomPhrase();
});//end click event
