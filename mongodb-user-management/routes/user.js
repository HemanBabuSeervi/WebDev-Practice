const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middlewares/user');
const { User, Course } = require("../db");

router.post('/signup', (req, res) => {
	const username = req.header.username;
	const password = req.header.password;

	const exists = await User.findOne({
		username
	});

	if(exists){
		return res.status(400).json({
			msg : "User exists"
		});
	}

	await User.create({
		username,
		password
	});

	res.json({
		msg : "User created"
	});
});
router.get('/courses',(req, res) => {
	return res.json( await Course.find() );
});
router.post('/courses/:courseId', userMiddleware, (req, res) => {
	const exists = await Course.findOne({
		_id : req.param.courseId
	});
	if(exists==null){
		return res.status(404).json({
			msg : 'No such course'
		});
	}

	const username = req.headers.username;
	await User.updateOne( {
		username
	}, {
		purchasedCourses : {
			$push : req.param.courseId
		}
	});

	return res.json({
		msg : "Purchase Success"
	});
});

router.get('/purchasedCourses', (req, res) => {
}):

module.exports = router;
