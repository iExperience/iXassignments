var app = angular.module("ChommiesApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});

app.controller("FeedCtrl", function($scope, $http, $filter) {
  $scope.props = [];
  $scope.newProp = {};
  var url = "";
  $http({
    method: "GET",
    url: url
  }).then(function(response) {
    $scope.brus = ALL_BRUS;
    $scope.props = ALL_PROPS;
  });

  $scope.addProp = function() {
    $scope.newProp.positivity_score = 0.2;
    $scope.newProp.receiver =
      $filter('filter')($scope.brus, {id: $scope.newProp.receiver_id})[0];
    $scope.newProp.sender = ME;
    console.log($scope.newProp);
    $scope.props.unshift($scope.newProp);
    $scope.newProp = {}
  }
});