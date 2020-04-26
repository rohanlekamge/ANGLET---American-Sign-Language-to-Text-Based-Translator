var user = require('../models/user');


module.exports = function(router) {
	//  https://localhost:3000/users
	router.post('/users', function(req, res)
	{
		var User = new user();
		User.username = req.body.username;
		User.password = req.body.password;
		User.email = req.body.email;
		
		if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.username == '' || req.body.email == null || req.body.email == '') 
		{
			res.send("Make sure to provide all input feilds ! ")
		}
		else
		{
			User.save(function(err)
			{
				if (err) 
				{
					res.send('Username or email already exists ! ');
				}
				else
				{
					res.send('User Created!!');
				}
			});
		}
	});
	return router;
}