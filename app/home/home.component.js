"use strict";  
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$scope', '$http', '$localStorage', '$sessionStorage',
      function HomeController($scope, $http, $localStorage, $sessionStorage) {
        let self = this;
        let savedMovies = [];

        $scope.movies = $http.get("https://api.themoviedb.org/3/trending/movie/week?api_key=87c3999d73e7dcecc589536ae1d4f73f").then( function (res){
          
          var response = res.data;

          var mov = [];
          
          var length = response.results.length;
          for( let i = 0; i < length; i++){
            var newMovie = {
              name: response.results[i].original_title,
              details: response.results[i].overview,
              img: 'https://image.tmdb.org/t/p/w300' + response.results[i].poster_path,
              id: response.results[i].id,
            };
            console.log( "movie: " + response.results[i].original_title);
            mov.push( newMovie);
          }
          self.movies = mov;


          self.saveMovie = function saveMovie( movieId){
              if( $localStorage.savedMovies === null){
                savedMovies = [];
              }
              else{
                savedMovies = $localStorage.savedMovies;
              }
              savedMovies.push( movieId);
              $localStorage.savedMovies = savedMovies;
              console.log("saved : " + movieId);
          };

          self.unsaveMovie = function unsaveMovie( movieId){
            
            if( $localStorage.savedMovies === null){
              savedMovies = [];
            } else{
              savedMovies = $localStorage.savedMovies;
              for( let i = 0; i < savedMovies.length; i++){
                if( savedMovies[i] === movieId){
                  delete savedMovies[i];
                }
              }
              $localStorage.savedMovies = savedMovies;
              console.log("un-saved : " + movieId);
            }
          };

          self.isSaved = function isSaved( movieId){
            savedMovies = $localStorage.savedMovies
            if( savedMovies === null){
              savedMovies = [];
            } else{
              savedMovies = $localStorage.savedMovies;
              for( let i = 0; i < savedMovies.length; i++){
                if( savedMovies[i] === movieId){
                  return true;
                }
              }
              return false;
            }
          };


        });
      }
    ]
    
    
    
    // function HomeController() {
    //   this.movies = [
    //     {
    //       name: 'Nexus S',
    //       details: 'Fast just got faster with Nexus S.',
    //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
    //     }, {
    //       name: 'Motorola XOOM™ with Wi-Fi',
    //       details: 'The Next, Next Generation tablet.',
    //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
    //     }, {
    //       name: 'MOTOROLA XOOM™',
    //       details: 'The Next, Next Generation tablet.',
    //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
    //     }
    //   ];
    // }
  });