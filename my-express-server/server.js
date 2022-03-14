const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("<h1>Hello, World</h1>");
});

app.get("/about", function(req,res){
  res.send("<h3>Hi am Sai Chandra Prakash, an Undergrad Student at IIT Kanpur. My goal now is to become a full-stack Web Developer and to acquire a Masters in Data Science, at which I am trying my best to acheive it</h3>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at prakash@gmail.com");
});

app.get("/hobbies", function(req,res){
  res.send("<ul><li>Movies</li><li>Coffee</li><li>Books</li></ul>");
});

app.listen(3000,function(){
  console.log("Server is up and running!");
});
