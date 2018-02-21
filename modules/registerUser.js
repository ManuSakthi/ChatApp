var mongoose = require('mongoose');
var User = require("../models/Users");

module.exports.addUser = function(user,callback)
{
    user.save(callback);
}

module.exports.getUsers = function(callbacks)
{
    User.find(callbacks);
}
