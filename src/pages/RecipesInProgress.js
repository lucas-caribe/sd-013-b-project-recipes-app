import React, { useContext } from 'react';
import RecipesContext from '../context/recipesContext';
import '../Styles/RecipesInProgress.css';

const getAllIgredients = (mealDetails) => {
  const maxIngredients = 15;
  const ingredients = [];

  for (let i = 1; i <= maxIngredients; i += 1) {
    const ingredient = `strIngredient${i}`;
    const measure = `strMeasure${i}`;
    if (mealDetails[ingredient] === '') break;
    if (mealDetails[ingredient] === null) break;
    ingredients.push(`${mealDetails[measure]}${mealDetails[ingredient]}`);
  }

  return ingredients;
};

const handleClick = ({ target }) => {
  const getClassIngredient = document.getElementById('ingredient-item');
  getClassIngredient.className = 'ingredient-checked';
  console.log(getClassIngredient);
  target.disabled = true;
};

const RecipesInProgress = () => {
  const { mealDetails } = useContext(RecipesContext);

  if (mealDetails[0] === undefined) return <p>Loading...</p>;

  const getIngredients = getAllIgredients(mealDetails[0]);
  console.log(mealDetails[0]);
  const { strMealThumb, strInstructions, strCategory, strMeal } = mealDetails[0];

  return (
    <div>
      <img src={ strMealThumb } alt="recipe" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">{strMeal}</h2>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <h3 data-testid="recipe-category">{strCategory}</h3>
      Igredientes da receita:
      <br />
      <div className="ingredients-in-progress">
        {getIngredients.map((result, index) => (
          <label
            data-testid={ `${index}-ingredient-step` }
            key={ result }
            htmlFor="result"
          >
            <input id="ingredient-item" type="checkbox" onClick={ handleClick } />
            <span>{result}</span>
          </label>
        ))}
      </div>
      <h3 data-testid="instructions">Intruções</h3>
      <p>{strInstructions}</p>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Recita
      </button>
    </div>
  );
};

export default RecipesInProgress;
