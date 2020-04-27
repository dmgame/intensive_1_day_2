const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const SOCKET_EVENTS = {
  MESSAGE: 'message'
}

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('message', (msg) => {
    console.log(msg);

    io.emit('new_message', msg.toUpperCase());
    // socket.emit('new_message', msg.toUpperCase());
  });

  socket.on('connect_room', (data) => {
    socket.join(data.room_name);
    io.to(data.room_name).emit('room_message', { info: 'some data' });
  })
});

const PORT = 3000;


http.listen(PORT, () => {
  console.log(`server up and running, PORT:${PORT}`);
});
