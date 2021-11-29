var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html' )
})

app.get('/json',function(req,res){
    res.json(process.env.MESSAGE_STYLE)
})

app.use('/public',express.static(__dirname + '/public'));

app.listen()

































 module.exports = app;
