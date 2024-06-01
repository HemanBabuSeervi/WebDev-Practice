const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async (req, res) => {
	console.log("here");
	const payload = req.body;
	const parsedPayload = createTodo.safeParse(req.body);
	if(!parsedPayload.success){
		return res.status(400).json({
			msg : 'Wrong Syntax'
		});
	}
	console.log("here2");
	const effect = await Todo.create({
		title : payload.title,
		description : payload.description,
		completed : false
	});
	console.log("here3");
	if(!effect){
		return res.status(500).json({
			msg : "Could'nt add todo"
		});
	}
	console.log("here4");

	return res.json({
		_id : effect._id,
		msg : "Todo Added"
	});
});


app.get('/todos', async (req, res) => {
	const todos = await Todo.find();
	res.json({
		...todos
	});
});

app.post('/completed', async (req, res) => {
	const payload = req.body;
	const parsedPayload = updateTodo.safeParse(req.body);
	if(!parsedPayload.success){
		return res.status(400).json({
			msg : 'Wrong Syntax'
		});
	}
	const stat = await Todo.updateOne({
		_id : payload._id
	},{
		completed : true
	});

	if(stat.matchedCount != stat.modifiedCount){
		return res.status(500).json({
			msg : "Could'nt complete the task"
		});
	}

	return res.json({
		msg : "Task marked complete"
	});
});

app.listen(3000, () => { console.log("On port 3000") } );
