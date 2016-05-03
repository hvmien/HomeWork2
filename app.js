var mongoose = require('mongoose');
var express = require('express');

var index = require('./routes/index');
var login = require('./routes/login');

var routes = require('./routes');

var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var ect = require('ect');
var path = require('path');
var app = express();


mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;
	
	
	app.listen(3000,function(){
		console.log('now listen on http://localhost:3000');
	});


	var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
	app.set('view engine', 'ect');
	app.engine('ect', ectRenderer.render);

	app.use(express.static('public'));
	app.use('/bower_components',  express.static(__dirname + '/bower_components'));

	app.use(express.static(__dirname + '/assets'));

	app.use(express.static(__dirname + '/app'));

	routes(app);

})