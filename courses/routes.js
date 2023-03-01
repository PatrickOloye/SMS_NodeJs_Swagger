const express = require('express');
const router = express.Router();
const courseController = require('./controller');

router.post('/create', courseController.create);
router.get('/getOne/:id', courseController.getOne);
router.get('/get', courseController.getAllCourses);
router.patch('/update/:id', courseController.update);
router.delete('/delete/:id', courseController.delete);

module.exports = router;
