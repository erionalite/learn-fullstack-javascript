import App  from './Components/App';
import React from 'react'
import ReactDOM from 'react-dom';
import data from './testData'
import axios from 'axios'
window.React = React

axios.get('/api/contests').then( resp => {
    console.log(resp)

    ReactDOM.render(
        <App initialData = {resp.data}/>,
        document.getElementById('root')
    );
    
 }).catch(console.error)



