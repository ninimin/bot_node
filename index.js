server()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${ PORT }`))
    // เพิ่มส่วนของ Webhook เข้าไป
    .post('/webhook', function (req, res) {
        let replyToken = req.body.events[0].replyToken;
        let msg = req.body.events[0].message.text;
        
        console.log(`Message token : ${ replyToken }`);
        console.log(`Message from chat : ${ msg }`);

        res.json({
            status: 200,
            message: `Webhook is working!`
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
////////////////////////////////////////////////////////
// const server = require('express');
// const PORT = process.env.PORT || 9999;
// const request = require('request');
// const bodyParser = require('body-parser');

// server()
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ extended: false}))
//     .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${ PORT }`))
//     .listen(PORT, () => console.log(`Listening on ${ PORT }`));
//////////////////////////////////////////////////////////////////////////////
// const http = require('https');

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