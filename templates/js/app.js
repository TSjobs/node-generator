var express = require('express');
var mongoose = require('mongoose');

var app = module.exports = express();

var global = require('./config/global');
var envConf = require('./config/' + app.get('env'));
var dbUrl = require('./config/database.json')[app.get('env')];

mongoose.connect(dbUrl, function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(new Date() + ": connected to " + app.get('env') + " DB");
});
