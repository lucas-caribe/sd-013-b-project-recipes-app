import React, { useContext, useEffect, useState } from 'react';
import foodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { idAPI } from '../services/foodAPI';

export default function FoodDetailsPage() {
  // const [recipe, setRecipe] = useState({});
  const { foodState } = useContext(foodContext);
  const [mealDetails, setMealDetails] = useState();
  const url = window.location.href;
  const urlSlicePoint = 30;
  const identifier = url.slice(urlSlicePoint);

  async function getRecipe(id) {
    const recipeDetails = await idAPI(id);
    return recipeDetails;
  }

  useEffect(() => {
    if (foodState[0]) {
      const { idMeal } = foodState[0];
      // console.log(foodState[0])
      getRecipe(idMeal)
        .then((mealDet) => setMealDetails(mealDet));
    } getRecipe(identifier)
      .then((mealDet) => setMealDetails(mealDet));
  }, []);

  if (mealDetails) {
    const { strMeal,
      strMealThumb, strCategory, strInstructions, strYoutube } = mealDetails.meals[0];

    const youTubeUrlSlicePoint = 23;
    const videoId = strYoutube.slice(youTubeUrlSlicePoint);

    const ingredients = [];
    Object.keys(mealDetails.meals[0]).forEach((key) => {
      if (key.includes('strIngredient')) ingredients.push(mealDetails.meals[0][key]);
    });

    const measures = [];
    Object.keys(mealDetails.meals[0]).forEach((key) => {
      if (key.includes('strMeasure')) measures.push(mealDetails.meals[0][key]);
    });

    return (
      <div>
        {/* {console.log(mealDetails.meals[0])} */}
        {/*
        {console.log(Object.values(mealDetails.meals[0]).slice(9, 29))}
        {console.log(Object.values(mealDetails.meals[0]).slice(29, 49))} */}
        {/* {console.log(ingredients, ingredientQuantities)}
        */}
        <ul>
          {ingredients.map((ingredient, index) => {
            if (ingredient) {
              return (
                <li
                  key={ ingredient }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ingredient}
                  {' '}
                  -
                  {' '}
                  {measures[index]}
                </li>);
            }
            return null;
          })}
        </ul>
        <p data-testid="recipe-title">{ strMeal }</p>
        <img data-testid="recipe-photo" src={ strMealThumb } alt="foto" />
        <p data-testid="recipe-category">{strCategory}</p>
        <p data-testid="instructions">{strInstructions}</p>
        <iframe title="How To" data-testid="video" src={ `https://www.youtube.com/embed${videoId}` } />
        <div data-testid={ `${0}-recomendation-card` }>Recomendacoes???</div>
        <button data-testid="share-btn" type="button">
          <img
            src={ shareIcon }
            alt="share-button"
          />
        </button>
        <button data-testid="favorite-btn" type="button">
          <img
            src={ whiteHeartIcon }
            alt="add-to-fav-button"
          />
        </button>
        <button type="button" data-testid="start-recipe-btn">Iniciar a receita</button>
      </div>
    );
  }
  return <span>Loading!!!</span>;
}
console.log('change');
