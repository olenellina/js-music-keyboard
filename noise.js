$(document).ready( function() {

  var play = function(note) {
    if (note == 'a') {
      // Loading the file first, ensures that the files can be played again
      $('#aAudio').get(0).load();
      $('#aAudio').get(0).play();
    } else if (note == 'b') {
      $('#bAudio').get(0).load();
      $('#bAudio').get(0).play();
    } else if (note == 'g') {
      $('#gAudio').get(0).load();
      $('#gAudio').get(0).play();
    } else if (note == 'f') {
      $('#fAudio').get(0).load();
      $('#fAudio').get(0).play();
    } else if (note == 'e') {
      $('#eAudio').get(0).load();
      $('#eAudio').get(0).play();
    } else if (note == 'c') {
      $('#cAudio').get(0).load();
      $('#cAudio').get(0).play();
    } else if (note == 'd') {
      $('#dAudio').get(0).load();
      $('#dAudio').get(0).play();
    }
  };

  $( ".note" ).click(function() {
    // Grab the second class of the instrument element and pass that to play
    var noteClass = $(this).attr('class').split(' ')[1];
    console.log(noteClass);
    play(noteClass);
  });

  $('body').keydown(function(event){
    console.log(event.key);
    play(event.key);
  });

});
