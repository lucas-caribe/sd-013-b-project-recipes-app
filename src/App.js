import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarIngredientes from './pages/ExplorarIngredientes';
import ExplorarLocalDeOrigem from './pages/Explorar-C-localdeOrigem';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
          <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
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
          <Route
            exact
            path="/explorar/comidas/area"
            component={ ExplorarLocalDeOrigem }
          />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
