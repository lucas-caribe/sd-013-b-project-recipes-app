import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';

export default function MealDetalis() {
  const { mealDetails } = useContext(RecipesContext);
  console.log(mealDetails);
  const TWENTY = 20;

  const ingredientList = [];

  for (let index = 1; index <= TWENTY; index += 1) {
    if (mealDetails[`strIngredient${index}`] !== '') {
      ingredientList.push({
        [`ingredients${index}`]: mealDetails[`strIngredient${index}`],
        [`measure${index}`]: mealDetails[`strMeasure${index}`],
      });
    }
  }

  return (
    <>
      <img
        src={ mealDetails.strMealThumb }
        alt="img-Details"
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">{ mealDetails.strMeal }</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{mealDetails.strCategory}</p>
      <ul>
        { ingredientList.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {
              `${ingredient[`ingredients${index + 1}`]} 
              - ${ingredient[`measure${index + 1}`]}`
            }
          </li>))}
      </ul>
      <h3>Instruções</h3>
      <p data-testid="instructions">{mealDetails.strInstructions}</p>
      <video data-testid="video" src=""></video>
    </>
  );
}
