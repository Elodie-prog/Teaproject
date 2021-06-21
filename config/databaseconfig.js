const mongoose = require('mongoose');


const connectionToDb = () => {
    const MONGODB_LOCAL=process.env.LOCAL_MONGODB_URL;
    mongoose.connect(MONGODB_LOCAL, {userNewUrlParser: true, useUnifiedTopology: true});
    console.log("connection to the DDBB");
}

//
module.exports = connectionToDb;
