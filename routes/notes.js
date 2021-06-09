const express = require('express');
const notesController = require('../controllers/notes');
const router = express.Router();

router.get('/:id', notesController.getNoteById);
router.post('/:id', notesController.createById);
router.put('/:id', notesController.modifyById);
router.delete('/:id', notesController.deleteById);

module.exports = router;

