var express = require('express') ; 
var app = express() ;
var portNumber = 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyPraser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
// var multer = require('multer');
// var upload = multer();

app.use(morgan('dev')) ;
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/VehicleRental', function(err){
	if (err) {
		console.log("Not connected to the db and the error is : " + err );
	}
	else{
		console.log("Succesfully Connected to Mongodb")
	}
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/app/viewz/index.html'))
})

app.listen(portNumber, function(){
	console.log('Running the server in the port : ' + portNumber) ; 
});