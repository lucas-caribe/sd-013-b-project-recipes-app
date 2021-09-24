import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodOrDrinkRecipe } from '../helpers/getFoodOrDrinkProperties';

import '../styles/details.css';

let data = {
  image: '',
  name: '',
  subCategory: '',
  instructions: '',
  ingredients: '',
  video: '',
};

const RecipeDetails = () => {
  const [object, setObject] = useState();
  const { id } = useParams();
  const typeOffood = window.location.href;
  const isFoodOrDrink = typeOffood.includes('comida') ? 'comida' : 'bebida';

  useEffect(() => {
    if (isFoodOrDrink === 'comida') {
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

  if (object) data = { ...getFoodOrDrinkRecipe(object, isFoodOrDrink) };
  const { image, name, subCategory, instructions, ingredients, video } = data;

  console.log('data', data);

  return (
    <div className="recipe-details">
      {
        !object ? 'Loading'
          : (
            <div>
              <div className="details-page">
                <img
                  data-testid="recipe-photo"
                  src={ image }
                  alt={ name }
                  className="main-photo"
                />
                <h1
                  data-testid="recipe-title"
                >
                  {name}
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
                    id={ id }
                  />
                </button>

                <br />

                <h3
                  data-testid="recipe-category"
                >
                  {subCategory}
                </h3>

                <h5>Ingredients</h5>

                <br />

                <ul>
                  {
                    ingredients.map((ingredient, index) => (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {ingredient}
                      </li>
                    ))
                  }
                </ul>

                <br />

                <p
                  data-testid="instructions"
                >
                  {instructions}
                </p>

                <br />

                { isFoodOrDrink === 'comida'
                  && <iframe
                    data-testid="video"
                    width="420"
                    height="315"
                    title={ name }
                    src={ video }
                  />}
                <ul>
                  {
                    ['receita'].map((value, index) => (
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
            </div>
          )
      }
    </div>
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
