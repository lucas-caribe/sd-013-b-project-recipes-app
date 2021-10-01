import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/Recipes/RecipesProvider';
import RecipesList from './components/RecipeList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import receitasFeitas from './components/testes/receitas feitas';
import receitasFavoritas from './components/testes/receitas favoritas';
import ExplorarOrigem from './pages/ExplorarOrigem';
import ExplorarBebidas from './pages/ExplorarBebidas';
import NotFound from './pages/NotFound';
import ExpBebidaIngredientes from './pages/ExpBebidasIngredientes';
import ExpComidaIngredientes from './pages/ExpComidasIngredintes';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/comidas/:id" component={ RecipesList } />
        <Route exact path="/bebidas/:id" component={ RecipesList } />
        <Route exact path="/comidas" component={ RecipesList } />
        <Route exact path="/bebidas" component={ RecipesList } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExpComidaIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarOrigem } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExpBebidaIngredientes }
        />
        <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        <Route exact path="/receitas-feitas" component={ receitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ receitasFavoritas } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
