require('angular')

var app = angular.module('myApp', []);

app.factory('MyService', ['$rootScope', '$location', function($rootScope, $location) {
  return 'MyService'
}]);


app.controller('MyCtrl', ['$timeout', 'MyService', function($timeout, MyService){
  debugger
}])
