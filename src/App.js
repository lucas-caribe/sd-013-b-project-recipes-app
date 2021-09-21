import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Início
import RecipesProvider from './Context/RecipesProvider';
import Login from './Pages/Login';
import MainFoodPage from './Pages/MainFoodPage';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ MainFoodPage } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>

  );
}

export default App;
