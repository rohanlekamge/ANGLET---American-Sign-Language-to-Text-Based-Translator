var User = require('../models/user');

module.exports = function(router){

		router.post('/users', function(req, res) {
		var user = new User();
		user.username = req.body.username ;
		user.password = req.body.password ;
		user.email = req.body.email ;

		if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
				req.json({ success: false, message: 'Ensure email, username and password are provided !! ' });
		}else{

				user.save(function(err) {
				if (err) {
					res.json({ success:false, message: 'Username or email already exists' });
				}else{
					res.json({ success:true, message: 'User created' });
				}
			});
		}

	});

	router.post('/authenticate', function(req, res) {
		User.findOne({ username: req.body.username }).select('email username password').exec(function(err, user){
			if (err) throw err ;

			if(!user){
				res.json({ success:false, message: 'Could not authenticate the user' });
			}else if(user){
				if (req.body.password) {
					var validPassword = user.comparePassword(req.body.password);
				}else{
					res.json({ success:false, password: 'Password is missing' });
				}				
				if(!validPassword){
					res.json({ success:false, message: 'Could not authenticate the user' });
				}else{
					res.json({ success:true, message: 'User authenticated ! ' });
				}
			}
		});
	}); 
	return router;
}

