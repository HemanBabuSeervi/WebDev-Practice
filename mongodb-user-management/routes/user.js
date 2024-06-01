const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middlewares/user');

router.post('/signup', (req, res) => {
});
router.get('/courses',(req, res) => {
});
router.post('/courses/:courseId', userMiddleware, (req, res) => {
});
router.get('/purchasedCourses', (req, res) => {
}):

module.exports = router;
