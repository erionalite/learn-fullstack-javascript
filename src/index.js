import App  from './Components/App';
import React from 'react'
import ReactDOM from 'react-dom';
window.React = React

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setTimeout(()=>{
    ReactDOM.render(
        <h2>.....</h2>,
        document.getElementById('root')
    )},4000);
