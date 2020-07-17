import express from 'express'
import config from './config';
import apiRouter from './api'
import React from 'react'
import sassMiddleware from 'node-sass-middleware'
import path from 'path';
import data from './src/testData.json'
const server = express();
server.use(sassMiddleware({
    src:path.join(__dirname,'sass'),
    dest:path.join(__dirname,'public')
}));

server.listen(config.port, config.host,()=>{
    console.info('Express listening on port', config.port)
})
server.set('view engine','ejs');
import {serverRender} from  './serverRender';

server.get('/api/contests',(reg,res) => {
    res.send({contests:data.contests})
})
server.get('/',(reg,res) => {
    serverRender().then(content =>
        res.render('index',{
            content
        })
    ).catch(console.error);
   
})

server.use(express.static('public'));
server.use('/api', apiRouter);