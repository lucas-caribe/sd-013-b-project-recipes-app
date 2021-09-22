import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Explorar from './pages/Explorar';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route path="/explorar" component={ Explorar } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
