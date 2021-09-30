import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Details from './pages/Details';
import Drinks from './pages/Drinks';
import Meals from './pages/Meals';
import Explore from './pages/Explore';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Loading from './components/Loading';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Main } />
        <Route exact path="/bebidas" component={ Main } />
        <Route exact path="/comidas/:receitaId" component={ Meals } />
        <Route exact path="/bebidas/:receitaId" component={ Drinks } />
        <Route exact path="/comidas/:receitaId/in-progress" component={ Recipes } />
        <Route exact path="/bebidas/:receitaId/in-progress" component={ Recipes } />
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
    </ContextProvider>

  );
}

export default App;
