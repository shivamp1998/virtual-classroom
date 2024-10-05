const app = require('./app');
const db = require('./models/index');
const config = require('./config/config')
const logger = require('./config/logger')
const process = require('process');


let server;
db.sequelize.authenticate()
.then(() => {
    logger.info('Connected to DB');
    server = app.listen(config.port, () => {
        logger.info(`Listening on PORT: ${config.port}`)
    })
})
.catch((err) => {
    logger.error(`Failed to sync db: ${err.message}`)
})

const exitHandler = () => {
    if(server) {
        server.close(() => {
            logger.info('Server Closed');
            process.exit(1)
        })
    }else{
        process.exit(1);
    }
}

const uncaughtExceptionHandler = (error) => {
    logger.error(`Uncaught Exception: ${error.message}`)
}

const unhandledRejectionHandler = (error) => {
    logger.error(`Unhandled Rejection: ${error.message}`)
}

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
process.on('SIGTERM', () => {
    logger.info('SIGTERM Received!');
    if(server) {
        server.close();
    }
})