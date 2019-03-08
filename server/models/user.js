const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	username:String,
	email: String,
	password:String,
	phone:String,
	address:String,
	dob:String,
	usertype:String	
	
});

module.exports = mongoose.model('User', userSchema);