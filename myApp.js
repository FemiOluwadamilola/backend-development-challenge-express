var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html' )
})

const output = process.env.MESSAGE_STYLE;

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE === 'uppercase'){
      res.json({"message": "HELLO JSON"})
  }else{
      res.json({"message": "Hello json"})
  }
})

app.use('/public',express.static(__dirname + '/public'));

app.listen()

































 module.exports = app;
