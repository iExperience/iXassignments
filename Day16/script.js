var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    controller: "FeedCtrl",
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/login", {
    controller: "LoginCtrl",
    templateUrl: "templates/login.html"
  })
  $routeProvider.when("/me", {
    controller: "MeCtrl",
    templateUrl: "templates/me.html"
  })
});

app.controller("LoginCtrl", function($scope, $location, $firebaseAuth) {
  var auth = $firebaseAuth();
  auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      $location.path("/");
    } else {
      $scope.error = "Please sign in";
    }
  });
  $scope.signIn = function() {
    $scope.message = null;
    $scope.error = null;
    auth.$signInWithPopup("facebook")
      .then(function(result) {
        console.log(result)
        $scope.message = "Signed in!";
        $scope.firebaseUser = result.user;
      }).catch(function(error) {
        $scope.error = error;
      });
  }
});

app.controller("FeedCtrl", function($scope, $http, $location, $firebaseAuth, $firebaseArray) {
  var auth = $firebaseAuth();
  auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      $scope.firebaseUser = firebaseUser;
    } else {
      $location.path("/login");
    }
  });

  var propRef = firebase.database().ref().child("props");
  var bruRef = firebase.database().ref().child("brus");
  $scope.props = $firebaseArray(propRef);
  $scope.brus = $firebaseArray(bruRef);
  $scope.newProp = {};

  $scope.addProp = function() {
    $scope.successMessage = "";
    $scope.errorMessage = "";
    $scope.sender = $scope.firebaseUser;
    if ($scope.newProp.text && $scope.newProp.receiver) {
      console.log($scope.newProp);
      // $scope.props.$add($scope.newProp);
      // $scope.newProp = {};
      // $scope.successMessage = "Nice! You contributed to the positivity of the world."
      // $timeout(function() {
      //   $scope.successMessage = "";
      // }, 3000);
    } else {
      $scope.errorMessage = "Please make sure to choose a receiver, and add some positive text!"
    }
  }

  $scope.logout = function() {
    auth.$signOut();
    $location.path("/login");
  }
});
