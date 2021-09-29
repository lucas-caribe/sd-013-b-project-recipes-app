import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Explore from './Pages/Explore';
import Perfil from './Pages/Perfil';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Login from './Pages/Login';
import Details from './Pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/explorar/:type?/:filter?">
        <Explore />
      </Route>
      <Route path="/perfil" exact>
        <Perfil />
      </Route>
      <Route path="/receitas-feitas" exact>
        <DoneRecipes />
      </Route>
      <Route path="/receitas-favoritas" exact>
        <FavoriteRecipes />
      </Route>
      <Route exact path="/:type/">
        <Main />
      </Route>
      <Route path="/:type/:id?/">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;
