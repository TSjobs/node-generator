/*
* Sample Users controller
*/

var Users = require('../models/users');

exports.create = function(req, res) {
	new Users({
			email: 'shahqaan@townsqd.com', 
			name: {first: "Shahqaan", last: "Qasim"}
		}).save(function(err, item) {
			if (err) res.send(err);
			res.send({user: item});
			});
};

exports.displayAll = function(req, res) {
	Users.find({}, function(err, users) {
		res.send({users: users});
	});
};