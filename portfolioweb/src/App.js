import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { underConstruction } from './js/views/underConstruction';

function App() {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={underConstruction} />
        </switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
