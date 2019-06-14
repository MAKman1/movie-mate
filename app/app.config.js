'use strict';

angular.
  module('imdbApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/movies/:movieId', {
          template: '<movie-details></movie-details>'
        }).
        otherwise('/');
    }
  ]);
