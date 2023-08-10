const express = require("express");
const appserver = express();
const bodyparser = require("body-parser");

// INJECT MIDDLE WARES
appserver.use(bodyparser.json());

// INJECT CONTROLLERS

appserver.use('/popcornTime',require('./Controller/Picture.controller'))
module.exports = appserver;