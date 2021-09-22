import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch } from 'react-router';
import Header from './components/Header';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/comidas" component={ <Header route="/comidas" /> } />
    </Switch>
  );
}

export default App;
