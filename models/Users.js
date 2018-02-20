
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 var usersSchema = new Schema({
    firstName: {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    // password: {
    //     type : String,
    //     required : true
    // }


 });
var User = mongoose.model("user" ,usersSchema);
module.exports = User;