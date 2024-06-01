const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017");

const userSchema = new Schema({
	username : String,
	password : String
});

const adminSchema = new Schema({
	username : String,
	password : String
});

const courseSchema = new Schema({
	title : String,
	description : String,
	price : Number,
	banner : String,
	published : Boolean
});

const User = mongoose.model('Users', userSchema);
const Admin = mongoose.model('Admins', adminSchema);
const Course = mongoose.model('Courses', courseSchema);

module.exports = {
	Users,
	Admins,
	Courses
};
