const express = require('express');
const userController = require('../controllers/user')
const router = express.Router();

router.get('/notes', userController.getAllNotes);
    

module.exports = router;