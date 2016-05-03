var mongoose = require('mongoose');
var model = require('../app/models/user.js');

var bodyParser = require("body-parser");
var express = require('express');
var connectJade   = require('../middleware/index.js');
var User = mongoose.model('User');
var ect = require('ect');


module.exports = function(app){

	app.get('/user/message', function(req,res){
		
		res.render('../app/views/index.ect',{isLoggedIn:true});
	});

}