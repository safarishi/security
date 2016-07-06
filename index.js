'use strict';

const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

var ops = {
  /*
    // the command to generate key and cert
    ssh-keygen -f host.key
    openssl req -new -key host.key -out request.csr
    openssl x509 -req -days 365 -in request.csr -signkey host.key -out server.crt
   */
  key: fs.readFileSync('host.key'),
  cert: fs.readFileSync('server.crt'),
};

app.get('/', (req, res) => {
  res.send('Hello Security World');
});

https.createServer(ops, app).listen(4433);

console.log('Https server is running');
