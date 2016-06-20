var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http) {
  var url = "http://ixchommies.herokuapp.com/";
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" }
  }).then(function(response) {
    $scope.brus = response.data;
    console.log("b", $scope.brus);
  });

  $http({
    method: "GET",
    url: url + "props",
    params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log("p", $scope.props);
  });

  $scope.addProp = function() {
    console.log($scope.newProp);
    $http({
      method: "POST",
      url: url + "props",
      params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" },
      data: {
        props: $scope.newProp.text,
        for: $scope.newProp.receiver.id,
      }
    }).then(function(response) {
       console.log(response.data);
       $scope.newProp = {};
    }).catch(function(response) {
      // Handle error here
    });
  }
});



























// app.controller("FeedCtrl", function($scope, $http, $filter) {
//   $scope.props = [];
//   $scope.newProp = {};
//   var token = "rafi12423";
//   var baseUrl = "http://ixchommies.herokuapp.com/";
//   $http({
//     method: "GET",
//     url: baseUrl + "props",
//     params: {token: token}
//   }).then(function(response) {
//     console.log("p", response);
//     $scope.props = response.data;
//   });

//   $http({
//     method: "GET",
//     url: baseUrl + "brus",
//     params: {token: token}
//   }).then(function(response) {
//     console.log("b", response);
//     $scope.brus = response.data;
//   });

//   $scope.addProp = function() {
//     // Mock code just to illustrate effect. We would instead make a call
//     // to the API here and get to get the prop that was created with these
//     // variables filled in. 
//     $scope.newProp.positivity_score = 0.2;
//     $scope.newProp.receiver =
//       $filter('filter')($scope.brus, {id: $scope.newProp.receiver_id})[0];
//     $scope.newProp.sender = ME;
//     console.log($scope.newProp);
//     // End sample code.
//     $scope.props.unshift($scope.newProp);
//     $scope.newProp = {}
//   }
// });