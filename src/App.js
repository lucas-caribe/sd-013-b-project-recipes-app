import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import MealProgress from './pages/MealProgress';
import MealDetails from './pages/MealDetails';
import Meals from './pages/Meals';
import DrinkAreas from './pages/DrinkAreas';
import DrinkDetails from './pages/DrinkDetails';
import DrinkProgress from './pages/DrinkProgress';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import MealIngredients from './pages/MealIngredients';
import MealAreas from './pages/MealAreas';
import ExploreMeals from './pages/ExploreMeals';
import DrinkIngredients from './pages/DrinkIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';
import FinishedRecipes from './pages/FinishedRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas/:id/in-progress" component={ MealProgress } />
      <Route path="/comidas/:id" component={ MealDetails } />
      <Route path="/comidas" component={ Meals } />
      <Route path="/bebidas/:id/in-progress" component={ DrinkProgress } />
      <Route path="/bebidas/:id" component={ DrinkDetails } />
      <Route path="/bebidas" component={ Drinks } />
      <Route exact path="/explorar" component={ Explore } />
      <Route path="/explorar/comidas/ingredientes" component={ MealIngredients } />
      <Route path="/explorar/comidas/area" component={ MealAreas } />
      <Route path="/explorar/comidas" component={ ExploreMeals } />
      <Route path="/explorar/bebidas/ingredients" component={ DrinkIngredients } />
      <Route path="/explorar/bebidas/area" component={ DrinkAreas } />
      <Route path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/profile" component={ Profile } />
      <Route path="/receitas-feitas" component={ FinishedRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
