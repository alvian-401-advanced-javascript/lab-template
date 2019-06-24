'use strict';

/**
 * Simple Server
 * @module index
 */

const http = require('http');

const pol = require('./app.js');

//app.get('/', (req, res) => {}); same as using express
const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(pol.isAlive().toString());
    // res.write('Hello World');
    res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => console.log('App up on Port', process.env.PORT));