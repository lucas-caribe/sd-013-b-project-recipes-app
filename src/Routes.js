import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import FoodsExplore from './pages/FoodsExplore';
import DrinksExplore from './pages/DrinksExplore';
import FoodsExploreIngredients from './pages/FoodsExploreIngredients';
import DrinksExploreIngredients from './pages/DrinksExploreIngredients';
import FoodsExploreArea from './pages/FoodsExploreArea';
import Profile from './pages/Profile';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/comidas" component={ Recipes } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas" component={ FoodsExplore } />
        <Route path="/explorar/bebidas" component={ DrinksExplore } />
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
        <Route
          path="/perfil"
          component={ Profile }
        />
      </Switch>
    </Router>
  );
}

export default Routes;
