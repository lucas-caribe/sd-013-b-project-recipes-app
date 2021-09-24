import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import Video from './Video';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodOrDrinkProperties, getFoodOrDrinkRecipe } from '../helpers/getFoodOrDrinkProperties';
import { fetchFoodsById, fetchDrinksById } from '../services/api';

const RecipeDetails = () => {
  const recipeId = useParams();
  const {
    id,
  } = recipeId;
  const typeOffood = window.location.href;
  const [object, setObject] = useState({});
  const foodOrDrink = typeOffood.includes('comida') ? 'comida' : 'bebida';

  useEffect(() => {
    console.log(foodOrDrink);
    if (foodOrDrink === 'comida') {
      const getFetchComida = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((resp) => resp.json())
          .then((resp2) => setObject(resp2.meals[0]));
      };
      getFetchComida();
    } else {
      const getFetchDrinks = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((resp) => resp.json())
          .then((resp2) => setObject(resp2.drinks[0]));
      };
      getFetchDrinks();
    }
  }, []);

  console.log(object);
  const insertAttributes = (objeto, comidaOuBebida) => {
    const a = getFoodOrDrinkRecipe(objeto, comidaOuBebida);
    console.log(a);
    return ('a');
  };
  // const x = getFoodOrDrinkProperties(object, foodOrDrink);

  return (
    <div>
      a
      {/* {console.log(object)} */}
      {Object.keys(object).length === 0 ? console.log('Loading') : <div>{insertAttributes(object, foodOrDrink)}</div>}

      {/* {console.log(insertAttributes(object[0], foodOrDrink))} */}
    </div>
  /* <div className="details-page">
      <h1>Detalhes comidas</h1>
      <img
        data-testid="recipe-photo"
        alt="imagem da receita"
        src={ thumbnail }
        alt={ title }
      />
      <h1
        data-testid="recipe-title"
      >
        {title}
      </h1>
      <button
        type="button"
      >
        <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="share Icon"
        />
      </button>
      <button
        type="button"
      >
        <img
          data-testid="favorite-btn"
          src={ whiteHeartIcon }
          alt="whiteHeart icon"
          recipe={ recipe }
          id={ id }
        />
      </button>
      <h3
        data-testid="recipe-category"
      >
        {category || isAlcoholic}
      </h3>
      Ingredients
      <ul>
        {
          { ingredients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
            {ingredient}
            </li>
          ))
        }
      </ul>
      <p
        data-testid="instructions"
      >
        {instructions}
      </p>
      { isMeal
        && <iframe
          data-testid="video"
          title={ title }
          src={ videoUrl }
        />}
      <ul>
        {
          recomendationCard.map((value, index) => (
            <li
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              { value }
            </li>
          ))
        }
      </ul>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar a Receita
      </button>

    </div>
    */
  );
};

/* RecipeDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

RecipeDetails.defaultProps = {
  thumbnail: ‘’,
  title: ‘’,
  category: ‘’,
  isAlcoholic: ‘’,
  instructions: ‘’,
  ingredients: [],
  measures: [],
  isMeal: false,
  videoUrl: ‘’,
  recipe: {},
};
*/

export default RecipeDetails;
// requisitar api no navegador, procura qualquer id
