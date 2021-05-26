const express = require('express');
const app = express();

const PORT = 3000;

app.get('/greeting', (req,res) => {
    res.send('<h1>My Tea notes</h1>');
})
app.listen (PORT, () =>{})
