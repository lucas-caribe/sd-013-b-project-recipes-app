import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <BrowserRouter>
        <Switch>
          <Route path="/explorar" component={ ExplorePage } />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
