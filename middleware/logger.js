const logger = (req, fres, next)=> {
    console.log(`METHOD: ${req.method}`);
    console.log(`REQUESTS: ${req}`);

}

module.exports = logger;
