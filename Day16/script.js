var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";
var FIREBASE_URL = "https://project-220434664661779401.firebaseio.com";

app.factory("Auth", function($firebaseAuth) {
  return $firebaseAuth();
});

app.run(function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
});

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    controller: "FeedCtrl",
    templateUrl: "templates/feed.html",
    resolve: {
      firebaseUser: function(Auth) {
        return Auth.$requireSignIn();
      }
    }
  })
  $routeProvider.when("/login", {
    controller: "LoginCtrl",
    templateUrl: "templates/login.html",
    resolve: {
      firebaseUser: function(Auth) {
        return Auth.$waitForSignIn();
      }
    }
  })
  $routeProvider.when("/me", {
    controller: "MeCtrl",
    templateUrl: "templates/me.html"
  })
});

app.controller("LoginCtrl", function($scope, $location, Auth, firebaseUser) {
  // var ref = firebase.database().ref();
  console.log(firebaseUser);
  $scope.firebaseUser = firebaseUser;

  $scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;
    Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
      .then(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
        console.log(firebaseUser);
        $scope.message = "User created with uid: " + firebaseUser.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
  }

  $scope.signIn = function() {
    $scope.message = null;
    $scope.error = null;
    Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
      .then(function(firebaseUser) {
        $scope.message = "Signed in!";
        $scope.firebaseUser = firebaseUser;
      }).catch(function(error) {
        $scope.error = error;
      });
  }

  Auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      $location.path("/");
    } else {
      $scope.message = "Logged out!"
    }
  });
});

app.controller("FeedCtrl", function($scope, $http, $location, firebaseUser, Auth) {
  $scope.firebaseUser = firebaseUser;
  $scope.logout = function() {
    Auth.$signOut();
    console.log("out");
  }
});
