angular
  .module('app')
  .controller('EditNoteController', EditNoteController);

function EditNoteController(Note, $location, $stateParams) {
  var ctrl = this;
  ctrl.note = Note.get({ id: $stateParams.id });
  ctrl.editNote = function() {
    ctrl.note.$update(function() {
      $location.path('notes');
    });
  };
}

