import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comidas from './pages/Comidas';
import Login from './pages/Login';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
      </Switch>
    </div>
  );
}

export default Routes;
