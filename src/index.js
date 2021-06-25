import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UnderConstruction from './js/components/UnderConstruction';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <UnderConstruction />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
