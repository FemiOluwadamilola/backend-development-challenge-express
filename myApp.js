var express = require('express');
var path = require('path');
var app = express();


app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html' )
})

app.use(express.static(path.join(__dirname, '/public/style.css')));

app.listen()

































 module.exports = app;
