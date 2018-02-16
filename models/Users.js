
import { Schema } from "mongoose";

var mongoose = require("mongoose");
var schema = mongoose.Schema;
 var usersSchema = new Schema({
    id: {
        type: String,
        unique: true,
        require : true
    },
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
    password: {
        type : String,
        required : true
    }


 });
var user = mongoose.model("user" ,usersSchema);
module.exports = user;