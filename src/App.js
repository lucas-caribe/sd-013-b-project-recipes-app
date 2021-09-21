import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import RecipesProvider from './context/RecipeProvider';
import Food from './pages/Foods';
import Drinks from './pages/Drinks';
import DrinksExplorer from './pages/DrinksExplorer';
import FoodsExplorer from './pages/FoodsExplorer';
import FoodsByOrigin from './pages/FoodByOrigin';
import Explorer from './pages/Explorer';
import ExploreByIngredients from './pages/ExploreByIngredients';
import CompletedRecipes from './pages/CompletedRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Food } />
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/explorar/comidas" component={ FoodsExplorer } />
          <Route exact path="/receitas-feitas" component={ CompletedRecipes } />
          <Route exact path="/explorar/bebidas" component={ DrinksExplorer } />
          <Route exact path="/explorar" component={ Explorer } />
          <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
          <Route exact path="/explorar/comidas/area" component={ FoodsByOrigin } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreByIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreByIngredients }
          />
          <Route exact path="/perfil" component={ Profile } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
