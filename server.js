import express from 'express'
import config from './config';
import apiRouter from './api'
import React from 'react'
import sassMiddleware from 'node-sass-middleware'
import path from 'path';
import data from './src/testData.json'
const server = express();
const contests = data.contests.reduce((obj,contest) => {
    obj[contest.id] = contest
    return obj;
},{});
server.use(sassMiddleware({
    src:path.join(__dirname,'sass'),
    dest:path.join(__dirname,'public')
}));

server.listen(config.port, config.host,()=>{
    console.info('Express listening on port', config.port)
})
server.set('view engine','ejs');
import {serverRender} from  './serverRender';
import { Console } from 'console';

server.get('/api/contests',(reg,res) => {
    res.send({contests: contests});
});
server.get('/api/contests/:contestId',(reg,res) => {
    
    let contest = contests[reg.params.contestId];
    contest.description = 'test test'
    res.send(contest);
});

server.get('/',(reg,res) => {
    serverRender().then(content =>
        res.render('index',{
            content
        })
    ).catch(console.error);
   
})

server.use(express.static('public'));
server.use('/api', apiRouter);