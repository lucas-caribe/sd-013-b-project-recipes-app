import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route exact path="/perfil" component={ Perfil } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
