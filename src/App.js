import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Início
import RecipesProvider from './Context/RecipesProvider';
import DrinksPage from './Pages/DrinksPage';
import MainFoodPage from './Pages/HeaderWithSearch';
import ProfilePage from './Pages/ProfilePage';
import Login from './Pages/Login';
import ExplorePage from './Pages/ExplorePage';
import ExploreMealsPage from './Pages/ExploreMealsPage';
import ExploreMealsByIngredients from './Pages/ExploreMealsByIngredient';
import ExploreDrinksPage from './Pages/ExploreDrinksPage';
import ExploreDrinksByIngredient from './Pages/ExploreDrinksByIngredient';
import ExploreMealsByArea from './Pages/ExploreMealsByArea';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import DrinkDetails from './Pages/DrinkDetails';
import MealDetails from './Pages/MealDetails';
// import RecipesContext from './Context/RecipesContext';

function App() {
  // const { randomMeal } = useContext(RecipesContext);
  // const { idMeal } = randomMeal;
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ MainFoodPage } />
          <Route exact path="/perfil" component={ ProfilePage } />
          <Route exact path="/bebidas" component={ DrinksPage } />
          <Route exact path="/explorar" component={ ExplorePage } />
          <Route exact path="/explorar/comidas" component={ ExploreMealsPage } />
          <Route exact path="/comidas/:idMeal" component={ MealDetails } />
          <Route exact path="/bebidas/:idDrink" component={ DrinkDetails } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreMealsByIngredients }
          />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinksPage } />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksByIngredient }
          />
          <Route
            exact
            path="/explorar/comidas/area"
            component={ ExploreMealsByArea }
          />
          <Route
            exact
            path="/receitas-feitas"
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/receitas-favoritas"
            component={ FavoriteRecipes }
          />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>

  );
}

export default App;
