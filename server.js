
const express = require("express");
const app = express();
const server = app.listen(3000);

// I want the app to use everything it is used in this directory
app.use(express.static('public'))

const socket = require('socket.io');

const io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log(socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse', data);
        // io.sockets.emit('mouse', data);
        console.log(data);
    }
}

console.log("It's working!")