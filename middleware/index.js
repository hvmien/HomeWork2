var express = require('express');

module.exports = function(app){
	console.log('sdfhasgd');
	app.use(express.static('public'));
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.session({secret: 'building a blog'}));
	app.use(express.bodyParser());

	app.use(function(req,res,next){
		
		console.log('mien');
	   	req.locals.isLoggedIn = req.session.isLoggedIn;	    
	next();
	});
}