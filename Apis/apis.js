var express = require('express');
app = express();
var bodyParser = require('body-parser');
var registerUser = require("../modules/registerUser");
var User = require("../models/Users");


module.exports.getUsers = function(req , res){
    console.log('got Api');
    registerUser.getUsers(function(err , users){
        if(err) throw err
        
        res.json(users);

    })
};
module.exports.addUser = function(req , res) {
    console.log(req.body);
    var user = new User(req.body);
    registerUser.addUser(user ,function(err , users){
        if(err) throw err
        
        res.json(users);
    });
    };