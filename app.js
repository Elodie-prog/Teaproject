const express = require('express');
const app = express();

const PORT = 3000;

const notes = require('./routes/notes');

app.use('/notes', notes);


app.listen (PORT, () =>{})
    