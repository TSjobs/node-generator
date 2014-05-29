var app = require('../app');
var mongoose = require('mongoose');

var dbUrl = require('./database.json')[app.get('env')];

mongoose.connect(dbUrl, function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(new Date() + ": connected to " + app.get('env') + " DB");
})