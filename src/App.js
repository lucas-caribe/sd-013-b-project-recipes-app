import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipesList from './components/RecipeList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/Recipes/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/comidas/:id" component={ RecipesList } />
        <Route exact path="/bebidas/:id" component={ RecipesList } />
        <Route path="/comidas" component={ RecipesList } />
        <Route path="/bebidas" component={ RecipesList } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
