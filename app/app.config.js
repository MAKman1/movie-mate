'use strict';

angular.
  module('imdbApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/home/:movieId', {
          template: '<movie-detail></movie-detail>'
        }).
        otherwise('/');
    }
  ]);
