import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FoodsExploreIngredients from './pages/FoodsExploreIngredients';
import DrinksExploreIngredients from './pages/DrinksExploreIngredients';
import FoodsExploreArea from './pages/FoodsExploreArea';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Explore from './pages/Explore';
import DrinksExplore from './pages/DrinksExplore';
import FoodsExplore from './pages/FoodsExplore';
import InProgress from './pages/InProgress';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/comidas/:id" component={ Details } />
        <Route exact path="/comidas/:id/in-progress" component={ InProgress } />
        <Route exact path="/bebidas/:id" component={ Details } />
        <Route exact path="/bebidas/:id/in-progress" component={ InProgress } />
        <Route exact path="/explorar/comidas" component={ FoodsExplore } />
        <Route exact path="/explorar/bebidas" component={ DrinksExplore } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ FoodsExploreIngredients }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ DrinksExploreIngredients }
        />
        <Route
          path="/explorar/comidas/area"
          component={ FoodsExploreArea }
        />
      </Switch>
    </Router>
  );
}

export default Routes;
