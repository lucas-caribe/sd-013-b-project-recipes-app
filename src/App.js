import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Profile from './pages/Profile';
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import Provider from './context/Provider';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/comidas" component={ FoodPage } />
        <Route exact path="/comidas/:id" component={ RecipeDetails } />
        <Route exact patch="/bebidas" component={ DrinkPage } />
        <Route exact path="/bebidas/:id" component={ RecipeDetails } />
      </Switch>
    </Provider>
  );
}

export default App;
