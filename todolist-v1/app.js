const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const dateModule = require(__dirname + "/date.js");
// console.log(dateModule());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const newItems = ["Buy Food", "Heat Food", "Cook Food"];
const workItems = [];

app.get("/", function(req, res) {

  const date = dateModule.getDate();
  res.render("todo", {listTitle: date, listItems: newItems});
});

app.post("/", function(req,res){
  const newItem = req.body.todoitem;
  const title = req.body.list;
  if(title === "Work"){
    workItems.push(newItem);
    res.redirect("/work");
  }
  else{
    newItems.push(newItem);
    res.redirect("/")
  }
});

app.get("/work", function(req,res){
  res.render("todo", {listTitle: "Work List", listItems: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
});


app.listen(3000, function() {
  console.log("Server is up and running!!");
})
