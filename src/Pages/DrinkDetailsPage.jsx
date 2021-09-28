import React, { useEffect, useState } from 'react';
import { idDrinkAPI } from '../services/drinksAPI';
import { suggestionsAPI } from '../services/foodAPI';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MealsSuggestions from '../components/MealsSuggestions';
import '../App.css';

function DrinkDetailsPage() {
  const [drinkDetails, setDrinkDetails] = useState();
  const [meals, setMeals] = useState();
  const url = window.location.href;
  const urlSlicePoint = 30;
  const identifier = url.slice(urlSlicePoint);

  async function getDrink(id) {
    const answer = await idDrinkAPI(id);
    return answer;
  }

  async function getSuggestions() {
    const answer = await suggestionsAPI();
    return answer;
  }

  useEffect(() => {
    getDrink(identifier)
      .then((drinkDet) => setDrinkDetails(drinkDet));
    // console.log(identifier);
    getSuggestions()
      .then((suggestions) => setMeals(suggestions));
  }, []);

  if (drinkDetails && meals) {
    const { strDrink,
      strDrinkThumb, strAlcoholic, strInstructions } = drinkDetails.drinks[0];
    // console.log(drinkDetails.drinks[0]);

    const ingredients = [];
    Object.keys(drinkDetails.drinks[0]).forEach((key) => {
      if (key.includes('strIngredient')) ingredients.push(drinkDetails.drinks[0][key]);
    });

    const measures = [];
    Object.keys(drinkDetails.drinks[0]).forEach((key) => {
      if (key.includes('strMeasure')) measures.push(drinkDetails.drinks[0][key]);
    });

    return (
      <div>
        <p data-testid="recipe-title">{ strDrink }</p>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt="foto" />
        <p data-testid="recipe-category">{strAlcoholic}</p>
        {/* {console.log(ingredients, measures)} */}
        <p data-testid="instructions">{strInstructions}</p>
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
            } return null;
          })}
        </ul>
        {/*
        <iframe title="How To" data-testid="video" src={ `https://www.youtube.com/embed${videoId}` } /> */}
        <MealsSuggestions meals={ meals } />
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
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    );
  } return <span>Loading....</span>;
}

export default DrinkDetailsPage;
