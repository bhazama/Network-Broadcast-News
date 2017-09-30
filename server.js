//jshint esversion: 6

const net = require('net');
const clients = [];
let portAddress = 6969;
let hostAddress = "0.0.0.0";



const server = net.createServer((socket) => {
  clients.push(socket);

  socket.on('data', function(data) {
    var adminId = data.toString().trim();
    console.log(adminId);

    //var clientId = data
  });


});

console.log("hello world");