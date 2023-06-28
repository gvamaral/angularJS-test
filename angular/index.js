// require('./angular');
// module.exports = angular;


var app = angular.module('weatherApp', []);


app.controller('WeatherController', function($scope, $http) {
    $scope.weather = {};
    $scope.gg = 'Your location!'
    //Getting api
    $http.get('https://api.open-meteo.com/v1/forecast?latitude=40&longitude=-111&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=GMT')
    
    .then(function(response) {
        //Setting the weather scope to the data
        $scope.weather = response.data;

        //Converting a portion of the data from a number to a readable string
        if($scope.weather.current_weather.is_day == 1){
          $scope.weather.current_weather.is_day = "Day"
        }
        else{
          $scope.weather.current_weather.is_day = "Night"
        }
        
        console.log($scope.weather)
      });
  });