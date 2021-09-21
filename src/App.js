import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './components/Login';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/comidas/:id-da-receita" component={ FoodRecipe } />
        <Route path="/bebidas/:id-da-receita" component={ DrinkRecipe } />
        <Route path="/comidas/:id-da-receita/in-progress" component={ FoodInProgress } />
        <Route path="/bebidas/:id-da-receita/in-progress" component={ DrinkInProgress } />
        <Route path="/explorar" component={ Explorer } />
        <Route path="/explorar/comidas" component={ FoodExplorer } />
        <Route path="/explorar/bebidas" component={ DrinkExplorer } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodIngredients } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinkIngredients } />
        <Route path="/explorar/comidas/area" component={ FoodArea } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
