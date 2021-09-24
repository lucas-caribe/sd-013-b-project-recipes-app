import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Explorer from './pages/Explorer';
import FoodExplorer from './pages/FoodExplorer';
import DrinkExplorer from './pages/DrinkExplorer';
import FoodIngredients from './pages/FoodIngredients';
import DrinkIngredients from './pages/DrinkIngredients';
import FoodArea from './pages/FoodArea';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import FoodRecipe from './pages/FoodRecipe';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ MainPage } />
        <Route path="/bebidas" component={ MainPage } />
        <Route path="/comidas/:recipeId" component={ FoodRecipe } />
        <Route path="/bebidas/:id-da-receita" component={ FoodRecipe } />
        {/* <Route path="/comidas/:id-da-receita/in-progress" component={ FoodInProgress } />
        <Route
          path="/bebidas/:id-da-receita/in-progress" component={ DrinkInProgress } /> */}
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/explorar/comidas" component={ FoodExplorer } />
        <Route exact path="/explorar/bebidas" component={ DrinkExplorer } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodIngredients } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinkIngredients } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route path="/perfil" component={ Profile } />
        {/* <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } /> */}
      </Switch>
    </Provider>
  );
}

export default App;
