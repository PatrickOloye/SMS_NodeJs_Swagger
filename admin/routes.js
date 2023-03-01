const express = require('express');
const router = express.Router();
const AdminController = require('./controller');

router.post('/create', AdminController.create);
router.get('/getOne/:id', AdminController.getOne);
router.get('/getAllStudent', AdminController.getAllStudent);
router.get('/getAllTeachers', AdminController.getAllTeachers);

router.patch('/update/:id', AdminController.update);
router.delete('/delete/:id', AdminController.delete);

module.exports = router;
