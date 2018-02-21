var express = require('express'),
     app = express(),
     server = require('http').createServer(app);
var socket = require("socket.io");
var dbConst = require("./const");
var mongoose = require("mongoose");
var api = require("./Apis/apis")
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// var registerUser = require("./modules/registerUser");
// var User = require("./models/Users");

server.listen(process.env.PORT || 3000);
console.log('server is running');


mongoose.connect(dbConst);
var db = mongoose.connection;


db.on('error',console.error.bind(console, "Connection Problem"));
db.on('open', function(){
    console.log("connected");
   
})
// app.get('/users' ,function(req , res){
//     console.log('got Api');
//     registerUser.getUsers(function(err , users){
//         if(err) throw err
        
//         res.json(users);

//     })
//     });

app.use(express.static('public'));

app.get('/users' , api.getUsers);
app.post('/addUsers' , api.addUser);

var io = socket(server);

io.on("connection",function(socket){
	console.log("estabilished Socket connection");

});