var app = angular.module("FormApp", []); // Do not forget the empty array.

app.controller("FormCtrl", function($scope) {
  $scope.checkInputs = function() {
    $scope.people = [];
    $scope.person = {}; // You will not need this for form validation

    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    if ($scope.name === "") {
      // ... 
    }
    if ($scope.password) {
      // ...
    }
    if ($scope.name !== "" && $scope.email !== "" && $scope.password !== "") {
      console.log("OK");
    } else {
      console.log("Not OK");
    }
  }
});