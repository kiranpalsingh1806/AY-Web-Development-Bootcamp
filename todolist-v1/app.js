// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    var day = "";
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            console.log("Error: Current Day is equal to" + currentDay);
    }

    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(req, res) {
    console.log("Server is running on port 3000");
})