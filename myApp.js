var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}));

var myLogger = function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
  }
  
app.use(myLogger)

app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html' )
})

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE === 'uppercase'){
      res.json({"message": "HELLO JSON"})
  }else{
      res.json({"message": "Hello json"})
  }
})

app.get('/now',function(req,res,next){
    req.time = new Date().toString();
    next();
}, function(req,res){
    res.json({time:req.time})
})

app.get('/:word/echo', function(req,res){
    res.json({echo:req.params.word})
})

app.get('/name', function(req,res){
  res.json({name:req.query.first+ ' ' +req.query.last})
})

app.use('/public',express.static(__dirname + '/public'));


app.listen()

































 module.exports = app;
