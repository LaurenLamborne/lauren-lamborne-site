var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');
require('./models/MsgModel');

mongoose.connect('mongodb://LL123:1234@ds041934.mongolab.com:41934/post', function (err) {
	if (err){
		return console.log("Error database", err);
	}
	else {
		console.log("Connected to lab");
	}
});

app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});
//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Route Links
var msgRoutes = require('./routes/MsgRoutes');

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

// API
app.use('/api/msg', msgRoutes);

var server = app.listen(port, "0.0.0.0", function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});
