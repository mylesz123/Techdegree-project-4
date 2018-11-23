console.log('hi');
const phraseList = [
  'holy cow',
  'sweet Jesus',
  'you betcha',
  'on 4nem',
  'love sosa'
];
//perform basic DOM selection, add event handlers, and to reset the game when it ends

$('#btn__reset').on('click', ()=>{
  //when start game is clicked, addPhraseToDisplay method should begin.
  $('#overlay ').hide();
  const showPhrase = new Phrase();
  showPhrase.addPhraseToDisplay(phraseList);

});//end click event
