angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	//console.log('Testing our Routes');
	$locationProvider.hashPrefix('');
	$routeProvider

	.when('/', {
		templateUrl : 'app/viewz/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/viewz/pages/about.html'
	})

	.when('/register', {
		templateUrl : 'app/viewz/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'register'
	})

	.when('/convertion', {
		templateUrl: 'app/viewz/pages/convertion.html'
	})

	.otherwise({ redirectTo: '/'});
})