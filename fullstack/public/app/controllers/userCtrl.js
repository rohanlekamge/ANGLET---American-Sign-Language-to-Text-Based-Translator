angular.module('userControllers', [])

.controller('regCtrl', function() {
	this.regUser = function() {
		console.log('Testing new button');
	}
})

.config(function() {
 	console.log('Testing new ctrl module');
})