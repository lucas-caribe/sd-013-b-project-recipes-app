import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import Details from './pages/Details';
import Explore from './pages/Explore';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Loading from './components/Loading';

function App() {
  return (
    <Switch>
      <Route path="/header" component={ Header } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Main } />
      <Route exact path="/bebidas" component={ Main } />
      <Route path="/comidas/:receitaId" component={ Details } />
      <Route path="/bebidas/:receitaId" component={ Details } />
      <Route path="/comidas/:receitaId/in-progress" component={ Recipes } />
      <Route path="/bebidas/:receitaId/in-progress" component={ Recipes } />
      <Route exact path="/receitas-feitas" component={ Recipes } />
      <Route exact path="/receitas-favoritas" component={ Recipes } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ Explore } />
      <Route exact path="/explorar/bebidas" component={ Explore } />
      <Route exact path="/explorar/comidas/ingredientes" component={ Explore } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ Explore } />
      <Route exact path="/explorar/comidas/area" component={ Explore } />
      <Route path="/perfil" component={ Profile } />
      <Route component={ Loading } />
    </Switch>
  );
}

export default App;
