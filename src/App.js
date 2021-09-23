import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Detalhes from './pages/Detalhes';
import Explorar from './pages/Explorar';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarIngredientes from './pages/ExplorarIngredientes';
import ExplorarOrigem from './pages/ExplorarOrigem';
import Login from './pages/Login-Screen/Login';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarIngredientes }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarOrigem } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/comidas/:id" component={ Detalhes } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
