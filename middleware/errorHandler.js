const { logEvents } = require('./logEvents');

const errorHandler = (req, res, err) => {
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
    console.error(err.stack);
    res.status(500).send(err.massege);
} 

module.exports = errorHandler;