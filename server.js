import express from 'express'
import config from './config';
import apiRouter from './api'
import React from 'react'

const server = express();

server.listen(config.port, ()=>{
    console.info('Express listening on port', config.port)
})
server.set('view engine','ejs');
server.get('/',(reg,res) => {
    res.render('index',{
        content: 'Hello Express and <em>EJS</em>!'
    });
})

server.use(express.static('public'));
server.use('/api', apiRouter);