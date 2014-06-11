/*
* Sample Users model
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var usersSchema = new Schema({
	created_at: {type: Date, default: Date.now},
	email: {type: String, default: ''},
	name: {
		first: {type: String, default: ''},
		last: {type: String, default: ''}
	}
});

module.exports = mongoose.model('Users', usersSchema);