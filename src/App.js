import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/perfil" component={ Profile } />
      <Route exact path="/comidas" component={ FoodPage } />
      <Route patch="/bebidas" component={ DrinkPage } />
    </Switch>
  );
}

export default App;
