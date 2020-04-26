var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
var bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema({
	username: { type:String, lowercase:true, required:true, unique: true},
	password: { type:String, required:true },
	email: { type:String, lowercase:true, required:true, unique:true }
});

userSchema.pre('save', function(next){
	var userz = this;
	bcrypt.hash(userz.password, null, null, function(err,hash){
		if (err) return next(err);
		userz.password = hash;
		next();
	})
})

module.exports = mongoose.model('User', userSchema);

// var blogSchema = new Schema({
// 	title: String;
// 	author: String;
// 	body: String;
// 	comments: [{ body:String, date:Date}],
// 	date: { type: Date, default: Date.now },
// 	hidden: Boolean;
// 	meta: {
// 		votes: Number,
// 		favs: Number
// 	}
// });