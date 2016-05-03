var errors = require('./errors');

var login = require('./login.js');


var express = require('express');
/*
var router = express.Router();
router.get('/', function(req, res) {
  res.render('../app/views/index.ect', { title: 'home' });
});

console.log('index routes');

module.exports = router;
*/



module.exports = function(app){
	//homepage

	app.get('/', function(req, res) {
		isLoggedIn = true;
	  res.render('../app/views/index.ect', { title: 'home'});

	});

	//login
	login(app);

	//errors handlers
	errors(app);
}