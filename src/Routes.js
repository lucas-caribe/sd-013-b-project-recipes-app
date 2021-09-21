import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/bebidas" component={ Bebidas } /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
