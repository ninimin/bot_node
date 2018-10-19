// const server = require('express');
// const PORT = process.env.PORT || 9999;
// const request = require('request');
// const bodyParser = require('body-parser');

// server()
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ extended: false}))
//     .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${ PORT }`))
//     .listen(PORT, () => console.log(`Listening on ${ PORT }`));


 const http = require('http');

const hostname = 'node-botnode.herokuapp.com';
//const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}/`);
});   
// const http = require('httpa');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });