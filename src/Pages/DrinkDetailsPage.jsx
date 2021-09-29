import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import { idDrinkAPI } from '../services/drinksAPI';
import { suggestionsAPI } from '../services/foodAPI';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MealsSuggestions from '../components/MealsSuggestions';
import IngredientsList from '../components/IngredientsList';
import '../App.css';

function DrinkDetailsPage() {
  const [drinkDetails, setDrinkDetails] = useState();
  const [meals, setMeals] = useState();
  const [hidden, setHidden] = useState(false);
  const url = window.location.href;
  const urlSlicePoint = 30;
  const identifier = url.slice(urlSlicePoint);
  const history = useHistory();
  const favorite = localStorage.getItem('favoriteRecipes');
  const SB = 'share-btn';
  const FB = 'favorite-btn';

  async function getDrink(id) {
    const answer = await idDrinkAPI(id);
    return answer;
  }

  async function getSuggestions() {
    const answer = await suggestionsAPI();
    return answer;
  }

  function handleShare() {
    copy(url);
    setHidden(true);
  }

  useEffect(() => {
    getDrink(identifier)
      .then((drinkDet) => setDrinkDetails(drinkDet));
    getSuggestions()
      .then((suggestions) => setMeals(suggestions));
    // localStorage.setItem('favoriteRecipes', JSON.stringify(array));
  }, []);

  if (drinkDetails && meals) {
    const { strDrink,
      strDrinkThumb, strAlcoholic, strInstructions, idDrink } = drinkDetails.drinks[0];

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
        <p data-testid="instructions">{strInstructions}</p>
        <IngredientsList ingredients={ ingredients } measures={ measures } />
        <MealsSuggestions meals={ meals } />
        <input
          onClick={ handleShare }
          data-testid={ SB }
          type="image"
          alt="favorite"
          src={ shareIcon }
        />
        {favorite
          ? <input data-testid={ FB } type="image" alt="fa" src={ blackHeartIcon } />
          : <input data-testid={ FB } type="image" alt="fa" src={ whiteHeartIcon } />}
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/bebidas/${idDrink}/in-progress`) }
        >
          Continuar Receita
        </button>
        {hidden ? <span>Link copiado!</span> : null}
      </div>
    );
  } return <span>Loading....</span>;
}

export default DrinkDetailsPage;
