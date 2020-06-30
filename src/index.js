import React from 'react'
import ReactDOM from 'react-dom';
import { App } from './App';

const color = Math.random() > 0.5 ? 'green':'red'
ReactDOM.render(
    <App headerMessage="4"/>,
    document.getElementById('root')
);