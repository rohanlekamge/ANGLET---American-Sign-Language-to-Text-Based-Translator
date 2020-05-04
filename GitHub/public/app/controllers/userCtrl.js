angular.module('userControllers', ['userServices'])

.controller('regCtrl', function($http, $location, User) {

	var app = this;

	//User.create(regData)
	this.regUser = function(regData) {
		app.errorMsg = false;
		console.log('form submitted');
		//console.log(this.regData);

		//User.create(regData)
		User.create(app.regData).then(function(data) {
			console.log(data.data.success);
			console.log(data.data.message);

			if (data.data.success) {
				//success mesage
				app.successMsg = data.data.message;
				//redirect to home page
				$location.path('/conversation');
			}else{
				//create and error message
				app.errorMsg = data.data.message;
			}
		});
	};
});

