console.log('testing main application config');
angular.module('userApp', ['appRoutes', 'userControllers'])

.config(function() {
	console.log('testing user application');
});