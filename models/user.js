const mongoose = require('mongoose');

const noteSchema = new mongosse.Schema({
    title: {
        required: [true, "Title required for note"],
        type: String
    },
    image: {
        type: String
        default: 'image-url' // Find default image url
    },    
    composition: [],
    category: String,
    review: String
})
 const Note = mongoose.model('Note', noteSchema); //compiling the model

 module.exports = Note;

// title --> require STRING
//image --> STRINg (url) maybe havea default 
// id --> auto-generated (no need to specify this)
//components/composition --> ARRAY
// name --> STRING
// email --> STRING (some constraints) unique! Requiired and should be formatted e.g user@example.com
// notes --> ARRAY (one to many) need to bear in mind how you are going to query the data / use the data
// review -- > SRTING
