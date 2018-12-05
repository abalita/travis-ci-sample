"use strict";

var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: "false"
  })
);


//Routes
//#############################################################################
app.get('/', (req, res)=>{
  res.json('This is travis-ci-sample Project v3 - testing branch')
});

module.exports = app;