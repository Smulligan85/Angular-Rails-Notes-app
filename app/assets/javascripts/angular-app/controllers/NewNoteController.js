angular
  .module('app')
  .controller('NewNoteController', NewNoteController);
function NewNoteController(Note, $location) {
  var ctrl = this;
  ctrl.note = new Note();

  ctrl.addNote = function() {
    ctrl.note.$save(function() {
      $location.path('notes');
    });
  };
}
