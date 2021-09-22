import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Comidas from './pages/Comidas';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
