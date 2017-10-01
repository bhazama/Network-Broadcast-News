//jshint esversion: 6

const net = require('net');
const clients = [];
let portAddress = 6969;
let hostAddress = "0.0.0.0";



let server = net.createServer((socket) => {
  clients.push(socket);


  socket.on('data', (data) => {
    console.log(data.toString());
    // socket.setEncoding('utf8');
    // socket.write("connected");
    // process.stdin.pipe(socket);
  });
  socket.on('end', () => {
    console.log("client disconnected");
  });

  socket.write(`data\r\n`);
  socket.pipe(socket);

});

  server.on('error', (err) => {
    throw err;
  });

server.listen({host: hostAddress, port: portAddress}, function(){
  console.log('server listening on ' + hostAddress + " : " + portAddress);
  console.log(clients);
});

console.log("hello world");