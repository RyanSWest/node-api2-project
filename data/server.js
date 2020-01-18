const express = require('express');

const postRouter  = require('./comments/posts-router');
const server= express();
server.use(express.json());
server.use('/api/posts', postRouter);


server.get('/', (req, res)=> {
    res.send(
        `
        <h2>Lambda API</h>`
    )
})

module.exports = server;