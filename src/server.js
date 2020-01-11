const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const socketio = require('socket.io');
const http = require('http');

const PORT = 3333;
const HOST = "0.0.0.0";

require('./database');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket =>{
    console.log('Usuario conectado', socket.id)
});


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(PORT, HOST);