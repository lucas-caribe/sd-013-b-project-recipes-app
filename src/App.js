import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Explorar from './pages/Explorar';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/perfil" component={ Perfil } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
