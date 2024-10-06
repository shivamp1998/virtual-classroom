const express = require('express');
const http = require('http');
const { Server }  = require("socket.io");
const db = require('./models/index')
const logger = require('./config/logger')
const cors = require('cors');

const app = express();
const routes = require('./routes/ClassroomRoutes');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

//socket setup
const io = new Server(server, {
    cors: {
        origin: '*'
    },
    path: '/socket'
   
});
io.on('connection', (socket) => {
    logger.info(`connection to socket successfull: ${socket.id}`);

    socket.on("disconnect", (socket) => {
        logger.info(`socket disconnected`)
    })
})


//middlewares
app.use('/', routes);
app.use(cors('*'))
app.use(express.json());







module.exports = server;  

