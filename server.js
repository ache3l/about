//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

//function that repsents the express module
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, res){

    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
});

app.post("/",function(req,res){
    console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var hight = parseFloat(req.body.hight);
    //BMI = kg/m
    console.log(weight);
    console.log(hight);
    var result = weight / (hight * hight)
    res.send("Your BMI is " + result);
});

app.listen(3000,function(){
    console.log("server started on 3000");
});