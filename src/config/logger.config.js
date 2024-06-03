const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports  = [];

// the below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which define what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// The below transport configuration enabkes logging in mongdb database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));

// The below transport configuration enavles logging in mongodb databse
allowedTransports.push(new winston.transports.File({
    filename: 'logFile.log',
    level: 'error'

}));
const logger = winston.createLogger({
    // default formatting
    format: winston.format.combine(
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which define what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;