import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { fetchCocktailDetails, fetchMealDetails } from '../services/fetchDetails';
import getIngredientsInArray from '../helpers/getIngredientsInArray';

export default function InProgress() {
  const [Recipe, setRecipe] = useState({});
  const [Ingredients, setIngredient] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;

  const renderIngredients = () => (
    <>
      {Ingredients.map((Ingredient, index) => (
        <label
          htmlFor={ Ingredient }
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            type="checkbox"
            value={ Ingredient }
            id={ Ingredient }
            name={ Ingredient }
          />
          {Ingredient}
        </label>
      ))}
    </>
  );

  const renderMealsComponents = () => (
    <div>
      <img
        src={ Recipe.strMealThumb }
        alt={ Recipe.strMeal }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strMeal}</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h4 data-testid="recipe-category">{Recipe.strCategory}</h4>
      <ul>
        {renderIngredients()}
      </ul>
      <p data-testid="instructions">
        {Recipe.strInstructions}
      </p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );

  const renderDrinksComponents = () => (
    <div>
      <img
        src={ Recipe.strDrinkThumb }
        alt={ Recipe.strDrink }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strDrink}</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h4 data-testid="recipe-category">{Recipe.strCategory}</h4>
      {
        renderIngredients()
      }
      <p data-testid="instructions">
        {Recipe.strInstructions}
      </p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );

  const fetchDetails = useCallback(
    async (id) => {
      if (pathname.includes('/comidas')) {
        const { meals } = await fetchMealDetails(id);
        setRecipe({ ...meals[0] });
      }
      if (pathname.includes('/bebidas')) {
        const { drinks } = await fetchCocktailDetails(id);
        setRecipe({ ...drinks[0] });
      }
    },
    [setRecipe, pathname],
  );

  useEffect(() => {
    const ID = pathname.split('/')[2];
    fetchDetails(ID);
  }, [pathname, fetchDetails]);

  useEffect(() => {
    const IngredientArray = getIngredientsInArray(Recipe);
    setIngredient(IngredientArray);
  }, [Recipe]);

  return (
    <div>
      <h1>Em Progresso</h1>
      {
        pathname.includes('/comidas')
          ? renderMealsComponents()
          : renderDrinksComponents()
      }
    </div>
  );
}
