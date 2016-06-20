var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http, $firebaseObject) {
  var ref = firebase.database().ref().child("data");
  // var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  // $scope.data = $firebaseObject(ref).$loaded().then(function() {
  //   console.log("d", $scope.data);
  // });
  // $scope.messages = $firebaseArray(ref);
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");
  // var url = "http://ixchommies.herokuapp.com/brus";
  // $http({
  //   method: "GET",
  //   url: url,
  //   params: { token: "ba1c55f06bd6b5f28f46f09ecd744287" }
  // }).then(function(response) {
  //   $scope.brus = response.data;
  //   console.log("b", $scope.brus);

  // });
});
