var app = require('../app');
var mongoose = require('mongoose');

var dbUrl = require('./database.json')[app.get('env')];

var db = mongoose.connection;

mongoose.connect(dbUrl, function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(new Date() + ": connected to " + app.get('env') + " DB");
});

db.on('error', function(err) {
    console.log(new Date() + ' ' + app.get('env') + ' DB ERROR:' + err);
});

db.on('open', function(err) {
    if (err) {
        console.log(err);
    }
    console.log(new Date() + ': connection is open now');
});


db.on('disconnected', function() {
    console.log(new Date() + ' ' + app.get('env') + ' DB DISCONNECTED');
});