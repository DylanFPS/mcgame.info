app.controller("logoutController", ["$scope", "$state", "$stateParams", "$http", "$timeout", "$cookies", function ($scope, $state, $stateParams, $http, $timeout, $cookies) {
    $cookies.remove("username");
    $cookies.remove("uuid");
    $cookies.remove("accessToken");

    $scope.refreshCookies();

        $state.go($stateParams.go||"index")
}]);