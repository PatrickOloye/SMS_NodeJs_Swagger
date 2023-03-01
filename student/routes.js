const express = require('express');
const router = express.Router();
const studentController = require('./controller');

router.post('/create', studentController.create);
router.get('/searchStudent', studentController.create);
router.get('/getOne', studentController.create);
router.patch('/update', studentController.create);
router.delete('/delete', studentController.create);

module.exports = router;
