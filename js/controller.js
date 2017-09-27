var app = angular.module('mainApp', ['ngRoute']);

//set up routing
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/welcome.html',
		//checks if logged in before access to templateUrl
		resolve: {
			"check": function($location, $rootScope) {
				if(!$rootScope.loggedIn){
					$location.path('/');
				}
			}
		}
	})
	.otherwise({
		redirectTo: '/'
	});
});

//Checks if login entry is true or false, sets $rootScope && path 
app.controller('loginCtrl', function($scope, $location, $rootScope) {
	$scope.submit = function() {		
		if($scope.username === 'admin' && $scope.password === 'admin') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		} else {
			alert('Wrong!');
		}
	};
});