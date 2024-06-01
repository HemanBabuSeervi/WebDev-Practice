const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017");

const userSchema = new Schema({
});

const adminSchema = new Schema({
});

const courseSchema = new Schema({
});

const Users = mongoose.model('Users', userSchema);
const Admins = mongoose.model('Admins', adminSchema);
const Courses = mongoose.model('Courses', courseSchema);

module.exports = {
	Users,
	Admins,
	Courses
};
