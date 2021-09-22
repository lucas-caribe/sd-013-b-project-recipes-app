import React from 'react';
import { Route, Switch } from 'react-router';

import Comidas from './pages/Comidas/Comidas';
import Bebidas from './pages/Bebidas/Bebidas';
import ExplorarOrigem from './pages/ExplorarOrigem/ExplorarOrigem';
import ExplorarIngredientes from './pages/ExplorarIngredientes/ExplorarIngredientes';
import ExplorarComidas from './pages/ExplorarComidas/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas/ExplorarBebidas';
import Explorar from './pages/Explorar/Explorar';
import Perfil from './pages/Perfil/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas/ReceitasFavoritas';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarOrigem } />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarIngredientes }
        />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
      </Switch>
    </div>
  );
}

export default App;
