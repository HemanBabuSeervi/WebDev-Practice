const mongoose = require('mongoose');

connectToDB();
async function connectToDB(){
	await mongoose.connect('mongodb://127.0.0.1:27017/todo-react');
}


const todoSchema = new mongoose.Schema({
	title : String,
	description : String,
	completed : Boolean
});

const Todo = mongoose.model('Todos', todoSchema);

module.exports = {
	Todo
};
