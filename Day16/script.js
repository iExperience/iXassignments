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

app.controller("FeedCtrl", function($scope, $http, $location, $firebaseAuth) {
  var auth = $firebaseAuth();
  auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      $scope.firebaseUser = firebaseUser;
    } else {
      $location.path("/login");
    }
  });

  $scope.logout = function() {
    auth.$signOut();
    $location.path("/login");
  }
});
