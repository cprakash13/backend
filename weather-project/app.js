
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  const query = req.body.location;
  const apiKey = "3f2a124f73e85e320defe7577d32941a"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit;

  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.feels_like;
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<h1>The temperature in " + query + " is " + temp + " deg Celcius</h1>")
      res.write("<h2>The weather is currently " + weatherDesc + "</h2>");
      res.write("<img src=" + iconURL + " alt='weather-icon'>");
      res.send();
    });
  });
});





app.listen(3000,function(){
  console.log("Server is up and running!");
});
