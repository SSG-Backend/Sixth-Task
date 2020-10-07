var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var app = express();

app.listen(3000 ,function(){
    console.log("Server is running");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.use(bodyParser.urlencoded({extended: true}));
app.post("/add-book", function(req,res){
    var data = {'Book Name': req.body.name,
                'Author Name': req.body.author,
                'ISBN': req.body.isbn
              };
    fs.writeFileSync('book.json', JSON.stringify(data));
});

app.post("/get-all",function(req,res){
  var file = require('book.json');
  res.send(file) }

);


app.post("/update-book", function(req,res){
    var data = {'Book Name': req.body.name,
    'Author Name': req.body.author,
    'ISBN': req.body.isbn
  };});

app.post("/delete-book", function(req,res){
    var isb = req.body.isbn;
    res.send(isb +' book has been deleted');
});
