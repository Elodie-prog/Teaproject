const express = require('express');
const dotenv = require('dotenv');
const hbs = require('express-handlebars');
dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.engine('hbs', hbs({
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


