const express = require("express");
const app = express();
const port = 3001;

const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const User = require("./models/customerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"));
var moment = require("moment");

// Method Override for DELETE request
var methodOverride = require("method-override");
app.use(methodOverride("_method"));



// DELETE Request
app.delete("/edit/:id", (req, res) => {
  User.deleteOne({_id: req.params.id})
    .then((result) => {
      res.redirect("/");
      console.log(result)
    })
    .catch((err) => {
      console.log(err);
    });
});


