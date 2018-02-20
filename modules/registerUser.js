var mongoose = require('mongoose');
var User = require("../models/Users");

module.exports = function(user)
{
    user.save(function(error,data)
{
    if(error)
    {
        return   error;
    }
    else
    {
        return data;
    }
   

});
}
