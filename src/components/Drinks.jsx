import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import './Cards.css';

const inProgressRecipesObeject = {
  cocktails: {
    id: [],
  },
  meals: {
    id: [],
  },
};

function Drinks({ id }) {
  const history = useHistory();
  const [localStorageCocktails, setlocalStorageCocktails] = useState(false);
  const [foods, setFoods] = useState([]);
  const [drink, setDrink] = useState({});
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strAlcoholic,
  } = drink;

  useEffect(() => {
    function localStorageChecker() {
      if (!localStorage.inProgressRecipes) {
        localStorage.inProgressRecipes = JSON.stringify(inProgressRecipesObeject);
      }
      const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
      if (inProgressRecipes.cocktails[id]) {
        setlocalStorageCocktails(true);
      }
    }

    async function drinksRequest() {
      const foodsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const foodsData = await foodsResponse.json();
      const showCards = 6;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();

      foodsData.meals.splice(showCards, foodsData.meals.length - showCards);

      setDrink(data.drinks[0]);
      setFoods(foodsData.meals);
    }

    localStorageChecker();
    drinksRequest();
  }, [id]);

  if (!drink || !foods[0]) return <h1>loading</h1>;

  let ingredientsArray = [];
  let measureArray = [];

  Object.keys(drink).forEach((key) => {
    if (key.includes('strIngredient') && drink[key]) {
      ingredientsArray = [...ingredientsArray, drink[key]];
    }
    if (key.includes('strMeasure') && drink[key]) {
      measureArray = [...measureArray, drink[key]];
    }
  });

  function renderIngredients(array) {
    return (
      array.map((ingredient, index) => (
        <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
          { ingredient }
          {' '}
          { measureArray[index] }
        </li>
      ))
    );
  }

  function StartRecipeClick() {
    history.push(`/bebidas/${id}/in-progress`);
  }

  return (
    <div>
      <img data-testid="recipe-photo" width="120px" src={ strDrinkThumb } alt="foto" />
      <h4 data-testid="recipe-title">{ strDrink }</h4>
      <p data-testid="recipe-category">{ strAlcoholic }</p>
      <img src={ shareIcon } alt="share" data-testid="share-btn" />
      <img src={ favorite } alt="favorite" data-testid="favorite-btn" />
      <ul>
        { renderIngredients(ingredientsArray) }
      </ul>
      <p data-testid="instructions">{ strInstructions }</p>
      <section className="container">
        { foods.map((food, index) => (
          <div
            className="cards"
            key={ food.strMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <h1 data-testid={ `${index}-recomendation-title` }>{ food.strMeal }</h1>
          </div>
        )) }
      </section>
      <button
        onClick={ StartRecipeClick }
        className="recipe-start"
        type="button"
        data-testid="start-recipe-btn"
      >
        {
          localStorageCocktails
            ? 'Continuar Receita'
            : 'Iniciar Receita'
        }
      </button>
    </div>
  );
}

Drinks.propTypes = {
  id: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Drinks;
