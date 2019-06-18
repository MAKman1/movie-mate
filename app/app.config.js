'use strict';

angular.
  module('imdbApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/movies/:movieId', {
          template: '<movie-details></movie-details>'
        }).
        when('/saved', {
          template: '<saved-movies></saved-movies>'
        }).
        otherwise('/home');
    }
  ]);
