import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
// import Login from './pages/Login';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/comidas" component={ Recipes } />
        <Route exact path="/perfil" component={ Profile } />
      </Switch>
    </Router>
  );
}

export default Routes;
