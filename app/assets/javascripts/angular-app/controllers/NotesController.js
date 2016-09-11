angular
  .module('app')
  .controller('NotesController', NotesController);
function NotesController(Note, $state) {
  var ctrl = this;
  ctrl.notes = Note.query();

  ctrl.deleteNote = function(note) {
    note.$delete(function() {
      $state.go($state.current, {}, {reload: true});
    });
  };
}
