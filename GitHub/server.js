var express = require('express'); // ExperssJS Framework

var app = express(); // Invoke express to variable for use in application

var port = process.env.PORT || 8080; // Set default port or assign a port in enviornment

var morgan = require('morgan'); // Import Morgan Package

var mongoose = require('mongoose'); // HTTP request logger middleware for Node.js

// var User = require('./app/models/user');
var router = express.Router(); // Invoke the Express Router
var appRoutes = require('./app/routes/api')(router); // Import the application end points/API

var path = require('path');

var bodyParser = require('body-parser'); // Node.js body parsing middleware. Parses incoming request bodies in a middleware before your handlers, available under req.body.

app.use(morgan('dev')); // Morgan Middleware

app.use(bodyParser.json()); // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // Allow front end to access public folder

app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/tutorial', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
        console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
});

app.get('*', function(req,res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})

// Start Server
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});