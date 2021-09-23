import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes, { func } from 'prop-types';
import { result } from 'lodash-es';
import Video from './Video';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodOrDrinkProperties, getFoodOrDrinkRecipe } from '../helpers/getFoodOrDrinkProperties';

const RecipeDetails = () => {
  const recipeId = useParams();
  const {
    id,
  } = recipeId;
  const typeOffood = window.location.href;
  const foodOrDrink = typeOffood.includes('comida') ? 'comida' : 'bebida';

  // console.log(foodOrDrink);

  const [object, setObject] = useState({});

  useEffect(() => {
    console.log(foodOrDrink);
    if (foodOrDrink === 'comida') {
      const getFetchComida = async () => {
        const results = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((resp) => resp.json())
          .then((resp2) => resp2.meals);
        setObject(results);
      };
      getFetchComida();
    } else {
      const getFetchDrinks = async () => {
        const results = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((resp) => resp.json())
          .then((resp2) => resp2.drinks);
        setObject(results);
      };
      getFetchDrinks();
    }
  }, []);
  const insertAttributes = (objeto, comidaOuBebida) => (getFoodOrDrinkRecipe(objeto, comidaOuBebida));
  const x = getFoodOrDrinkProperties(object, foodOrDrink);
  console.log(x);
  return (
    <div>
      {console.log(insertAttributes(object[0], foodOrDrink))}
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
