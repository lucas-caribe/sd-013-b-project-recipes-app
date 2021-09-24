import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <SearchBar />
      <Switch>
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ Explorar } />
        <Route exact path="/explorar/comidas/ingredientes" component={ Explorar } />
        <Route exact path="/explorar/comidas/area" component={ Explorar } />
        <Route exact path="/explorar/bebidas" component={ Explorar } />
        <Route exact path="/explorar/bebidas/ingredientes" component={ Explorar } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
      </Switch>
    </div>
  );
}

export default App;
