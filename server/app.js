const express = require('express');
const http = require('http');
const { Server }  = require("socket.io");
const db = require('./models/index')
const logger = require('./config/logger')

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

//middlewares
app.use(express.json());


module.exports = app;  

