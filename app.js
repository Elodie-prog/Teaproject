const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const app = express();

const PORT = process.env.PORT;

const notes = require('./routes/notes');
const users = require('./routes/user');

app.use('/user', users);
app.use('/notes', notes);


app.listen (PORT, () =>{
    console.log ( `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
})


