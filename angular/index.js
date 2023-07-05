// require('./angular');
// module.exports = angular;


var app = angular.module('weatherApp', []);

// Maping for the icons
let WWO_CODE = {
    "113": "Sunny",
    "116": "PartlyCloudy",
    "119": "Cloudy",
    "122": "VeryCloudy",
    "143": "Fog",
    "176": "LightShowers",
    "179": "LightSleetShowers",
    "182": "LightSleet",
    "185": "LightSleet",
    "200": "ThunderyShowers",
    "227": "LightSnow",
    "230": "HeavySnow",
    "248": "Fog",
    "260": "Fog",
    "263": "LightShowers",
    "266": "LightRain",
    "281": "LightSleet",
    "284": "LightSleet",
    "293": "LightRain",
    "296": "LightRain",
    "299": "HeavyShowers",
    "302": "HeavyRain",
    "305": "HeavyShowers",
    "308": "HeavyRain",
    "311": "LightSleet",
    "314": "LightSleet",
    "317": "LightSleet",
    "320": "LightSnow",
    "323": "LightSnowShowers",
    "326": "LightSnowShowers",
    "329": "HeavySnow",
    "332": "HeavySnow",
    "335": "HeavySnowShowers",
    "338": "HeavySnow",
    "350": "LightSleet",
    "353": "LightShowers",
    "356": "HeavyShowers",
    "359": "HeavyRain",
    "362": "LightSleetShowers",
    "365": "LightSleetShowers",
    "368": "LightSnowShowers",
    "371": "HeavySnowShowers",
    "374": "LightSleetShowers",
    "377": "LightSleet",
    "386": "ThunderyShowers",
    "389": "ThunderyHeavyRain",
    "392": "ThunderySnowShowers",
    "395": "HeavySnowShowers",
}
let WEATHER_SYMBOL = {
    "Unknown": "tornado-icon.png",
    "Cloudy": "clody-icon.png",
    "Fog": "cloud-fog-icon.png",
    "HeavyRain": "cloud-heavy-rain-icon.png",
    "HeavyShowers": "cloud-heavy-rain-icon.png",
    "HeavySnow": "cloud-heavy-snow-icon.png",
    "HeavySnowShowers": "cloud-heavy-snow-icon.png",
    "LightRain": "cloud-rain-icon.png",
    "LightShowers": "cloud-rain-icon.png",
    "LightSleet": "cloud-rain-icon.png",
    "LightSleetShowers": "cloud-rain-icon.png",
    "LightSnow": "cloud-snow-icon.png",
    "LightSnowShowers": "cloud-snow-icon.png",
    "PartlyCloudy": "clody-icon.png",
    "Sunny": "sun-icon.png",
    "ThunderyHeavyRain": "cloud-lightning-heavy-rain-icon.png",
    "ThunderyShowers": "cloud-lightning-rain-icon.png",
    "ThunderySnowShowers": "cloud-lightning-snow-icon.png",
    "VeryCloudy": "cloud-icon.png",
}


app.controller('WeatherController', function($scope, $http) {
    $scope.weather = {};
    $scope.city = '';
    $scope.SorM = 'sun';
    //Getting api
    
    $http.get(`https://wttr.in/?format=j1`)
    
    .then(function(response) {
        //Setting the weather scope to the data
        $scope.weather = response.data;

        $scope.location = $scope.weather.nearest_area[0].areaName[0].value;
        $scope.temp_F = $scope.weather.current_condition[0].temp_F;
        $scope.date = $scope.weather.current_condition[0].localObsDateTime;
        
        
        console.log($scope.weather)
    });

    let timeNow = new Date().toLocaleTimeString();
    let hourNow = timeNow.split(':')[0];

    if (hourNow > 18 || hourNow < 6) {
        if ($scope.SorM === 'sun') {
            $scope.screenMode();
        }
    };

    $scope.searchLocation = () => {
        let url = `https://wttr.in/${$scope.city}?format=j1`
        $http.get(url)
            .then(function (res) {
                $scope.weather = res.data
                console.log($scope.weather)
                $scope.location = $scope.weather.nearest_area[0].areaName[0].value;
                $scope.temp_F = $scope.weather.current_condition[0].temp_F;
                $scope.date = $scope.weather.current_condition[0].localObsDateTime;
                //Edit weather scope
                //Error where it doesn't pass as a json object
            })

    }

    $scope.screenMode = () => {
        let body = angular.element(document.querySelector('body'));
        let weatherCard = angular.element(document.querySelector('.weatherCard'));
        let searchBar = angular.element(document.querySelector('.searchBar'));
        if ($scope.SorM === 'sun') {
            $scope.SorM = 'moon'
            body.css('background-image', 'url(../images/nightTime.jpg)');
            weatherCard.css('background-color', 'var(--color-black)');
            weatherCard.css('color', 'var(--color-white)');
            searchBar.css('background-color', 'var(--color-black)');
            searchBar.css('color', 'var(--color-white)');
        }
        else if ($scope.SorM === 'moon') {
            $scope.SorM = 'sun'
            body.css('background-image', 'url(../images/sunnySky.jpg)');
            weatherCard.css('background-color', 'var(--color-white)');
            weatherCard.css('color', 'var(--color-black)');
            searchBar.css('background-color', 'var(--color-white)');
            searchBar.css('color', 'var(--color-black)');
        }
    }
});


//app.controller('SearchController', function ($scope, $http) {
      
      
//      $scope.searchLocation = () => {
//          let url = `https://wttr.in/${$scope.city}?format=j1`
//          $http.get(url)
//          .then(function(res){
//              $rootScope.weather = res.data
//              console.log($scope.city)
//              console.log($rootScope.weather)
//          //   //Edit weather scope
//          //Error where it doesn't pass as a json object
//          })
          
//      }

//  });