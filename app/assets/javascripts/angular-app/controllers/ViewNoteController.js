angular
  .module('app')
  .controller('ViewNoteController', ViewNoteController);

function ViewNoteController(Note, $stateParams) {
  var ctrl = this;
  ctrl.note = Note.get({ id: $stateParams.id });
}
