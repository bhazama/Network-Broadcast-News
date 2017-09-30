//jshint esversion: 6

const net = require('net');

const client = net.createConnection({port: 6969}, () =>{
  console.log("connected to server");

  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();

    if(chunk !== null) {
      client.write(chunk.toString());
    }
  });
  client.write(`world\r\n`);
});

client.on('end', () => {
  console.log("client disconnected");
});




// console.log("hello world");