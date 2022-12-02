import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UnderConstruction from './js/components/UnderConstruction';
import PortfolioMvp from './js/components/PortfolioMvp';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <PortfolioMvp />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
