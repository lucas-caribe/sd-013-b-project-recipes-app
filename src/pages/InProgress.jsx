import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import { fetchCocktailDetails, fetchMealDetails } from '../services/fetchDetails';
import getIngredientsInArray from '../helpers/getIngredientsInArray';

export default function InProgress() {
  const [Recipe, setRecipe] = useState({});
  const [Copied, setCopied] = useState(false);
  const [Ingredients, setIngredient] = useState([]);
  const [IngredientsCompleted, setIngredientsCompleted] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;
  const ID = pathname.split('/')[2];

  const saveInLocalStorage = ({ target: { value, checked } }) => {
    if (!JSON.parse(localStorage.getItem(ID))) {
      localStorage.setItem(ID, JSON.stringify([]));
    }
    const ingredientInLocal = JSON.parse(localStorage.getItem(ID));

    let ingredientCompleted = { [ID]: [value] };

    if (checked) {
      ingredientCompleted = [...ingredientInLocal, value];
    }

    if (!checked) {
      const index = ingredientInLocal.indexOf(value);
      ingredientInLocal.splice(index, 1);
      ingredientCompleted = ingredientInLocal;
    }

    localStorage.setItem(ID, JSON.stringify(ingredientCompleted));
    setIngredientsCompleted(ingredientCompleted);
  };

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
            onClick={ saveInLocalStorage }
            checked={ IngredientsCompleted.includes(Ingredient) }
          />
          {Ingredient}
        </label>
      ))}
    </>
  );

  const handleClickShare = async () => {
    const newPath = pathname.split('/');
    newPath.splice(3, 1);
    const path = newPath.join('/');
    const href = `http://localhost:3000${path}`;
    copy(href);
    setCopied(true);
  };

  const renderButtons = () => (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleClickShare }
        id="Compatilhar"
      >
        Compartilhar
      </button>
      {Copied && <p>Link copiado!</p> }
      <button type="button" data-testid="favorite-btn">Favoritar</button>
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
      { renderButtons() }
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
      {
        renderButtons()
      }
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
    const IngredientsCompletedInLocal = JSON.parse(localStorage.getItem(ID));
    setIngredientsCompleted(
      IngredientsCompletedInLocal || [],
    );
    fetchDetails(ID);
    return () => {
      console.log('desmontei');
    };
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
