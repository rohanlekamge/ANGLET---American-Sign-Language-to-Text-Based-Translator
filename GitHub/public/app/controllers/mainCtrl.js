angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $location) {

var app = this;


this.doLogin = function(loginData) {
		app.errorMsg = false;
		console.log('form submitted');
		//console.log(this.regData);

		//User.create(regData)
		Auth.login(app.loginData).then(function(data) {
			// console.log(data.data.success);
			// console.log(data.data.message);

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


	//User.create(regData)
	

