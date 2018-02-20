var express = require('express'),
     app = express(),
     server = require('http').createServer(app);
var socket = require("socket.io");
var dbConst = require("./const");
var mongoose = require("mongoose");
var registerUser = require("./modules/registerUser")
var User = require("./models/Users");
server.listen(process.env.PORT || 3000);
console.log('server is running');


mongoose.connect(dbConst);
var db = mongoose.connection;


db.on('error',console.error.bind(console, "Connection Problem"));
db.on('open', function(){
    console.log("connected");
   
})



app.get('/register' ,(req , res) => {
console.log('got Api');
var newUser = User({
    firstName: "Manu",
    lastName: "S",
    email: "manusakthi@gmail.com",
    
  
})
registerUser(newUser, (error, data) => {
    res.send(data);
});



});
app.use(express.static('public'));
var io = socket(server);

io.on("connection",function(socket){
	console.log("estabilished Socket connection");

});