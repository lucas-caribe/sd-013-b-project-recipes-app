import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DrinksSlider from '../components/DrinksSlider';
import getIngredients from '../services/getIngredients';
import shareIcon from '../images/shareIcon.svg';
import './css/MealDetails.css';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import addFavoriteToStorage from '../services/addFavoriteToStorage';
import removeFavoritesFromStorage from '../services/removeFavoriteFromStorage';
import RecipeButton from '../components/RecipeButton';

const copy = require('clipboard-copy');

function RecipeDetail({ match: { params: { id } }, type }) {
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [modal, setModal] = useState(false);
  const [favorited, setFavorited] = useState(false);

  let favoritesFromStorage = localStorage.getItem('favoriteRecipes');
  favoritesFromStorage = JSON.parse(favoritesFromStorage);

  if (favoritesFromStorage && favoritesFromStorage.find((recipe) => recipe.id === id)
    && !favorited) {
    setFavorited(true);
  }

  const endPoints = {
    meal: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    drink: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    suggestedDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    suggestedMeals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  };

  useEffect(() => {
    const getDetails = async () => {
      let url = endPoints.meal;
      if (type === 'drinks') {
        url = endPoints.drink;
      }
      let data = await fetch(url);
      data = await data.json();
      setSelectedRecipe(data[type]);
    };

    const getSuggestions = async () => {
      let url = endPoints.suggestedDrinks;
      let getter = 'drinks';
      if (type === 'drinks') {
        url = endPoints.suggestedMeals;
        getter = 'meals';
      }
      let data = await fetch(url);
      data = await data.json();
      setSuggestedRecipes(data[getter]);
    };
    getDetails();
    getSuggestions();
  }, []);

  const handleShareClick = () => {
    setModal('Link copiado!');
    if (type === 'meals') return copy(`http://localhost:3000/comidas/${id}`);
    copy(`http://localhost:3000/bebidas/${id}`);
  };

  const handleFavoriteClick = () => {
    if (favorited) {
      removeFavoritesFromStorage(id);
      setFavorited(false);
      return;
    }
    addFavoriteToStorage(type, selectedRecipe);
    setFavorited(true);
  };

  return (
    <div>
      { selectedRecipe.map((recipe, i) => (
        <div key={ i }>
          <img
            data-testid="recipe-photo"
            src={ type === 'meals' ? recipe.strMealThumb : recipe.strDrinkThumb }
            alt="imagem da receita"
            style={ { height: '100px' } }
          />
          <h2
            data-testid="recipe-title"
          >
            { type === 'meals' ? recipe.strMeal : recipe.strDrink }
          </h2>
          <div>
            <button data-testid="share-btn" type="button" onClick={ handleShareClick }>
              <img src={ shareIcon } alt="icone de compartilhar" />
            </button>
            { modal }
            <button
              type="button"
              onClick={ handleFavoriteClick }
            >
              <img
                data-testid="favorite-btn"
                src={ favorited ? blackHeartIcon : whiteHeartIcon }
                alt="botão de favoritar receita"
              />
            </button>
          </div>
          <h4
            data-testid="recipe-category"
          >
            { type === 'meals' ? recipe.strCategory : recipe.strAlcoholic}
          </h4>
          <div>
            { getIngredients(selectedRecipe).map((ingredient, index) => (
              <p
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ ingredient }
              >
                { ingredient }
              </p>
            ))}
          </div>
          <p data-testid="instructions">{ recipe.strInstructions }</p>
          { type === 'meals' ? <iframe
            data-testid="video"
            width="320"
            height="180"
            title="video"
            src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
            frameBorder="0"
            allowFullScreen
          /> : null }
          <DrinksSlider type={ type } suggestedRecipes={ suggestedRecipes } />
          <RecipeButton type={ type } id={ id } />
        </div>
      ))}
    </div>
  );
}

export default RecipeDetail;

RecipeDetail.propTypes = {
  match: PropTypes.object,
}.isRequired;
