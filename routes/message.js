var mongoose = require('mongoose');
var model = require('../app/models/user.js');

var bodyParser = require("body-parser");
var express = require('express');
var connectJade   = require('../middleware/index.js');
var User = mongoose.model('User');
var ect = require('ect');
var http = require('http')
  , fs = require('fs');


module.exports = function(app){

	app.get('/user/message', function(req,res){
		console.log(req.session.user);
		res.render('../app/views/message/mes.ect',{tilogin:req.session.user});
	});



}