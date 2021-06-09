const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

//const logger = require('./middleware/logger');
const morgan = require('morgan');
const app = express();

// Importing and setting up config
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT;


// For parsing request bodies
// Describe the characteristics of the engine
app.use(express.json());

if (process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use(logger);

// Set up the template engine
app.engine('hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    }
  }));
  app.set('view engine', 'hbs')

const notes = require('./routes/notes');
const users = require('./routes/user');

app.use('/user', users);
app.use('/notes', notes);


app.listen (PORT, () =>{
    console.log ( `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
})


