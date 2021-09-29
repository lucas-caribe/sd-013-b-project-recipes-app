import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';
import Provider from './context/Provider';

// import RecipeDetails from './components/RecipeDetails';
import FoodDetailsPage from './Pages/FoodDetailsPage';
import DrinkDetailsPage from './Pages/DrinkDetailsPage';

// import RecipeDetails from './components/RecipeDetails';
import CompletedRecipes from './Pages/CompletedRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Explore from './Pages/Explore';
import ExploreFood from './Pages/ExploreFood';
import ExploreDrinks from './Pages/ExploreDrinks';
import ExploreFoodIngredient from './Pages/ExploreFoodIngredient';
import ExploreFoodArea from './Pages/ExploreFoodArea';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/comidas" component={ FoodPage } />
        <Route exact path="/comidas/:id" component={ FoodDetailsPage } />
        <Route exact path="/bebidas" component={ DrinkPage } />
        <Route exact path="/bebidas/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/comidas/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/bebidas/:id" component={ DrinkDetailsPage } />
        {/* <Route exact path="/bebidas/:id" component={ RecipeDetails } /> */}
        <Route exact path="/receitas-feitas" component={ CompletedRecipes } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredient }
        />
        <Route exact path="/explorar/comidas/area" component={ ExploreFoodArea } />

      </Switch>
    </Provider>
  );
}

export default App;

//  178319
