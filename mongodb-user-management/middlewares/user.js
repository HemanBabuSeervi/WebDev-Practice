const db = require("../db/index.js");
function userMiddleware(req, res, next){
	const user = req.headers.username;
	const pass = req.headers.password;
	if(db.User.find({ username : user, password : pass }).length==0){
		return res.status(401).send({
			msg : "Unauthorized Access"
		});
	}
	next();
}

module.exports = userMiddleware;
