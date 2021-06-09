const express = require('express');
const userController = require('../controllers/user')
const router = express.Router();

router.get('/create', viewsController.viewNoteCreated);
    

module.exports = router;