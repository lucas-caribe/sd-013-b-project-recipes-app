import React from 'react';
import { Switch, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Comidas from './pages/Comidas';

function App() {
  return (
    <Switch>
      <Route path="/perfil" component={ Comidas } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Comidas } />
      <Route exact path="/explorar" component={ Comidas } />
      <Route exact path="/explorar/comidas" component={ Comidas } />
      <Route exact path="/explorar/comidas/ingredientes" component={ Comidas } />
      <Route exact path="/explorar/comidas/area" component={ Comidas } />
      <Route exact path="/explorar/bebidas" component={ Comidas } />
      <Route path="/explorar/bebidas/ingredientes" component={ Comidas } />
    </Switch>
  );
}

export default App;
