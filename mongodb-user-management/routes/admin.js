const { Router } = require('express');
const router = Router();
const adminMiddleware = require('../middlewares/admin');
const { Admin, Course } = require("../db");

router.post('/signup', (req, res) => {
	const user = req.headers.username;
	const pass = req.headers.password;

	const exists = await Admin.findOne({
		username : user
	});
	if(exists){
		return res.status(400).json({
			msg : "Admin Exists"
		});
	}

	await Admin.create({
		username : user,
		password : pass
	});
	return res.status(200).json({
		msg : "Admin created"
	});
});

router.post('/courses', adminMiddleware, (req, res) => {
	const course = req.body;
	const exists = await Course.findOne({title : course.title});
	if(exists){
		return res.status(400).json({
			msg : "A Course already exists with the title"
		});
	}

	const newCourse = await Course.create( course );
	return res.json({
		id : newCourse_id,
		msg : "Course created successfully"
	});
});

router.get('/courses', adminMiddleware, (req, res) => {
	res.json( await Course.find() );
});

module.exports = router;
