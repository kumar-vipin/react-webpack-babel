import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;