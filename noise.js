$(document).ready( function() {

  var play = function(note) {
    var tune = note + "Audio";
    // Load is called first, to allow for multiple plays of a note
    $(tune).get(0).load();
    $(tune).get(0).play();g
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
