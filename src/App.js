import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';
import Provider from './context/Provider';
// import RecipeDetails from './components/RecipeDetails';
import FoodDetailsPage from './Pages/FoodDetailsPage';
import DrinkDetailsPage from './Pages/DrinkDetailsPage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/comidas" component={ FoodPage } />
        <Route exact path="/comidas/:id" component={ FoodDetailsPage } />
        <Route exact path="/bebidas" component={ DrinkPage } />
        <Route exact path="/bebidas/:id" component={ DrinkDetailsPage } />
      </Switch>
    </Provider>
  );
}

export default App;

//  178319
