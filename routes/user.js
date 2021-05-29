const express = require('express');
const userController = require('../controller/users')
const router = express.Router();

router.get('/notes', userController.getAllNotes);
    

module.exports = router;