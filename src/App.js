import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Login';
import Comidas from './Pages/Comidas';

import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas" component={ Comidas } />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
