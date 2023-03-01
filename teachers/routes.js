const express = require('express');
const router = express.Router();
const teacherController = require('./controller');

router.post('/create', teacherController.create);
// router.get('./searchStudent', teacherController.searchStudent);
router.get('/getOne/:id', teacherController.getOne);
router.patch('/update/:id', teacherController.update);
router.delete('/delete/:id', teacherController.delete);

module.exports = router;
