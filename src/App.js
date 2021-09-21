import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={ Login } />
      </Provider>
    </Switch>
  );
}

export default App;
