import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';
import Provider from './context/Provider';
import RecipeDetails from './components/RecipeDetails';
import CompletedRecipes from './Pages/CompletedRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Explore from './Pages/Explore';
import ExploreFood from './Pages/ExploreFood';
import ExploreDrinks from './Pages/ExploreDrinks';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/comidas" component={ FoodPage } />
        <Route exact path="/comidas/:id" component={ RecipeDetails } />
        <Route exact path="/bebidas" component={ DrinkPage } />
        <Route exact path="/bebidas/:id" component={ RecipeDetails } />
        <Route exact path="/receitas-feitas" component={ CompletedRecipes } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/comidas" component={ ExploreDrinks } />
      </Switch>
    </Provider>
  );
}

export default App;
