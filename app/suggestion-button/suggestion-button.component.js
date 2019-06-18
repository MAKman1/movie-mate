"use strict";  
angular.
  module('suggestionButton').
  component('suggestionButton', {
    templateUrl: 'suggestion-button/suggestion-button.template.html',
    controller: ['$scope', '$http', '$location',
      function SuggestionController($scope, $http, $location) {
        let self = this;


        self.goRandom = function goRandom(){
            console.log("wtf");
            $scope.movies = $http.get("https://api.themoviedb.org/3/discover/movie?api_key=87c3999d73e7dcecc589536ae1d4f73f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").then( function (res){
          
                var response = res.data;

                $location.path('movies/' + response.results[ parseInt(Math.random() * 10, 10)].id);
                    
            });
        }
        
    }  
    ]
  });