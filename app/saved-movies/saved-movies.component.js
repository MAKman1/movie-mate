"use strict";  
angular.
  module('savedMovies').
  component('savedMovies', {
    templateUrl: 'saved-movies/saved-movies.template.html',
    controller: ['$scope', '$http', '$localStorage', '$sessionStorage',
      function HomeController($scope, $http, $localStorage, $sessionStorage) {
        let self = this;
        let mov = $localStorage.savedMovies;
        self.movies = [];

        for( let i = 0; i < mov.length; i++){
            if( mov[i] !== null){
                $http.get("https://api.themoviedb.org/3/movie/" + mov[i] + "?api_key=87c3999d73e7dcecc589536ae1d4f73f").then( function (res){
                    var response = res.data;

                    var newMovie = {
                        name: response.original_title,
                        details: response.overview,
                        img: 'https://image.tmdb.org/t/p/w300' + response.poster_path,
                        id: response.id,
                    };

                    self.movies.push( newMovie);
                });
            }
            
        }


        self.unsaveMovie = function unsaveMovie( movieId){
            let savedMovies = [];
            if( $localStorage.savedMovies !== null){
                savedMovies = $localStorage.savedMovies;
                for( let i = 0; i < savedMovies.length; i++){
                    if( savedMovies[i] === movieId){
                        delete savedMovies[i];
                    }
                }
                $localStorage.savedMovies = savedMovies;

                for( let a = 0; a < self.movies.length; a++){
                    if( self.movies[a].id === movieId){
                        self.movies.splice(a, 1);
                    }
                }
                console.log("un-saved : " + movieId);
            }
        };
      }
    ]
  
  });