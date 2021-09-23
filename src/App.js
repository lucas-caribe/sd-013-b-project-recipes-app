import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './Redux/Store';
import Main from './pages/Main';
import Explore from './pages/Explore';
import Perfil from './pages/Perfil';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
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
        <Route path="/:type/:id?/:status?">
          <Main />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
