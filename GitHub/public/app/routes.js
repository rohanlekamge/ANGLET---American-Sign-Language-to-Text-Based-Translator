angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix(''); 

	$routeProvider.when('/', {
		templateUrl : 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl : 'app/views/pages/about.html'
	})

	.when('/register', {
		templateUrl : 'app/views/pages/users/register.html',
		controller : 'regCtrl',
		controllerAs : 'register'
	})

	.when('/conversation', {
		templateUrl : 'app/views/pages/convertion.html'
	})

	.when('/login', {
		templateUrl : 'app/views/pages/users/login.html'
	})

	.otherwise(	{redirectTo: '/'} );
	
})