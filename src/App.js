import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/Recipes/RecipesProvider';
import RecipesList from './components/RecipeList';
import FoodDetails from './components/FoodDetails';
import DrinkDetails from './components/DrinkDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from './Components/testes/login';
import perfil from './Components/testes/perfil';
import receitas from './Components/testes/receitas';
import explorar from './Components/testes/explorar';
import explorarComidas from './Components/testes/explorar comidas';
import explorarBebidas from './Components/testes/explorar bebidas';
import explorarBebidasIgredientes
  from './Components/testes/explorar bebidas por ingrediente';
import explorarComidasIgredientes
  from './Components/testes/explorar comidas por ingrediente copy';
import comidasArea from './Components/testes/comidas area';
import receitasFeitas from './Components/testes/receitas feitas';
import receitasFavoritas from './Components/testes/receitas favoritas';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/comidas/:id" component={ FoodDetails } />
        <Route exact path="/bebidas/:id" component={ DrinkDetails } />
        <Route exact path="/comidas" component={ RecipesList } />
        <Route exact path="/bebidas" component={ RecipesList } />
        <Route exact path="/perfil" component={ perfil } />
        <Route exact path="/profile" component={ perfil } />
        <Route exact path="/explorar" component={ explorar } />
        <Route exact path="/explorar/comidas" component={ explorarComidas } />
        <Route exact path="/explorar/bebidas" component={ explorarBebidas } />
        <Route exact path="/explorar/comidas/area" component={ comidasArea } />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ explorarBebidasIgredientes }
        />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ explorarComidasIgredientes }
        />
        <Route exact path="/receitas" component={ receitas } />
        <Route exact path="/receitas-feitas" component={ receitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ receitasFavoritas } />
        <Route exact path="/" component={ login } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
