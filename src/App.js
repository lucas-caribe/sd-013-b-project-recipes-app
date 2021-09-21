import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';
import Profile from './Pages/Profile';

function App() {
  return (
    <Switch>
      <Route path="/perfil" component={ Profile } />
      <Route path="/comidas" component={ FoodPage } />
      <Route patch="/bebidas" component={ DrinkPage } />
    </Switch>
  );
}

export default App;
