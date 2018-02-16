var express = require('express'),
     app = express(),
     server = require('http').createServer(app);
var socket = require("socket.io");
var dbConst = require("./const");
var mongoose = require("mongoose");


server.listen(process.env.PORT || 3000);
console.log('server is running');


mongoose.connect(dbConst);
var db = mongoose.connection;

db.on('error',console.error.bind(console, "Connection Problem"));
db.on('open', function(){
    console.log("connected");
})

app.get('/register' , function(req , res){
console.log('got Api');
res.send('hiii mmm');

});
app.use(express.static('public'));
var io = socket(server);

io.on("connection",function(socket){
	console.log("estabilished Socket connection");

});