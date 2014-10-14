var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', function ($scope) {
  $scope.dict = [
    {'name': 'Test1',
     'value': 'Value1'},
    {'name': 'Test2',
     'value': 'Value2'},
    {'name': 'Test3',
     'value': 'Value3'}
  ];
});