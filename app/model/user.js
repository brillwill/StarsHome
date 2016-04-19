var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : String,
	sex : String,
	email : String,
	username : String,
	password : String,
	isAdmin : Boolean
});

module.exports = mongoose.model('User', UserSchema);