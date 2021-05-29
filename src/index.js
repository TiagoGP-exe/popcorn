import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './style/global-style.css';



ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);