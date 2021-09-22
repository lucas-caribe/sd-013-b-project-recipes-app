import React from 'react';
import { Switch, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Comidas from './pages/Comidas';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ Comidas } />
    </Switch>
  );
}

export default App;
