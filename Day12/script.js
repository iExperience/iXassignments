var app = angular.module("TodoApp", []); // Do not forget the empty array.

app.controller("MainCtrl", function($scope) {
  $scope.newItem = "";
  $scope.items = [];

  $scope.addItem = function() {
    $scope.items.push($scope.newItem);
    console.log($scope.items);
    $scope.newItem = "";
  }
});