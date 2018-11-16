var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require ('cors'),
	path = require('path'),
	app = express();

var corsOptions = {
  origin: ['http://localhost', 'http://localhost:3000'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json());

app.options('*', cors());

// app.put('/insert', cors(corsOptions), function(req, res, next){
// 	var insert = require('./insert');
// });

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
