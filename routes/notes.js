const express = require('express');
const router = express.Router();

router.get('/greeting', (req,res) => {
    res.send('<h1>My Tea notes</h1>');
})
app.get('/notes/getNote/:id', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Note with id: ${req.params.id}`
    })
});

router.put('/notes/modify/:id', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Modify info with id: ${req.params.id}`
    })
});

router.delete('/notes/delete/:id', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Delete note with id: ${req.params.id}`
    })
});

router.post('/notes/addNote', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Add new note with id: ${req.params.id}`
    })
});

module.exports = router;
