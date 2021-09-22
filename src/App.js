import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';
import ExplorePage from './pages/ExplorePage';
import ExploreFoodPage from './pages/ExploreFoodPage';
import ExploreDrinkPage from './pages/ExploreDrinkPage';
import PerfilPage from './pages/PerfilPage';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/explorar" component={ ExplorePage } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/explorar/comidas" component={ ExploreFoodPage } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinkPage } />
          <Route exact path="/perfil" component={ PerfilPage } />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
