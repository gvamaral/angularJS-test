// require('./angular');
// module.exports = angular;


var app = angular.module('weatherApp', []);
let locationn = ''



app.controller('WeatherController', function($scope, $http) {
    $scope.weather = {};
    //Getting api
    
    $http.get(`https://wttr.in/${locationn}?format=j1`)
    
    .then(function(response) {
        //Setting the weather scope to the data
        $scope.weather = response.data;

        $scope.location = $scope.weather.nearest_area[0].areaName[0].value;
        $scope.temp_F = $scope.weather.current_condition[0].temp_F;
        $scope.date = new Date().toUTCString();
        
        
        console.log($scope.weather)
      });
});


app.controller('SearchController', function ($scope, $http) {
      $scope.city = ''
      $scope.searchLocation = () => {
          let url = `https://wttr.in/${$scope.city}?format=j1`
          $http.get(url).then(
              (res) => {

              }
          )
      }

  });