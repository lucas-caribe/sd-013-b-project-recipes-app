import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './pages/login-screen';

function App() {
  return (
    <Switch>
      <Route path="/" component={ LoginScreen } />

    </Switch>
  );
}

export default App;
