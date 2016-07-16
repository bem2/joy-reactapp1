import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
    <div>
    <App user="Joy">Hello world I am Joy.</App>
    <App user="Bem">And This is Bem.</App>
    </div>, 
    document.getElementById('app')
);