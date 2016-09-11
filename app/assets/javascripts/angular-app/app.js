angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.notes', {
        url: 'notes',
        templateUrl: 'home/notes.html',
        controller: 'NotesController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/new.html',
        controller: 'NewNoteController as ctrl'
      })
      .state('home.show', {
        url: 'note/:id',
        templateUrl: 'home/show.html',
        controller: 'ViewNoteController as ctrl'
      })
      .state('home.edit', {
        url: 'edit/:id',
        templateUrl: 'home/edit.html',
        controller: 'EditNoteController as ctrl'
      });

    $urlRouterProvider.otherwise('/');
  });
