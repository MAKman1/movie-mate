"use strict";  
angular.
  module('movieDetails').
  component('movieDetails', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$scope', '$http', '$routeParams',
      function HomeController($scope, $http, $routeParams) {
        let self = this;
        $scope.movie = $http.get("https://api.themoviedb.org/3/movie/" + $routeParams.movieId + "?api_key=87c3999d73e7dcecc589536ae1d4f73f").then( function (res){
          
          var response = res.data;
          var out = {
            name: response.original_title,
            plot: response.overview,
            img: 'https://image.tmdb.org/t/p/w300' + response.poster_path,
          }
          self.movie = out;
        });
      }
    ]
  });