import React from 'react';

const copy = require('clipboard-copy');

export const handleShareBtn = (pathname) => {
  const text = document.querySelector('.share-text');
  text.style.display = 'block';
  copy(pathname);
};

export const renderIngredients = (recipeDetails) => {
  const ingredientsList = Object.entries(recipeDetails)
    .filter((e) => (e[0].includes('Ingredient') && e[1]));
  const measuresList = Object.entries(recipeDetails)
    .filter((e) => (e[0].includes('Measure') && e[1]));
  return ingredientsList.map((ingredient, i) => (
    <li
      key={ ingredient[0] }
      data-testid={ `${i}-ingredient-name-and-measure` }
    >
      {`${ingredient[1]} - ${measuresList[i][1]}`}
    </li>));
};

export const renderRecomendationList = (card, index, type) => (
  <div
    key={ index }
    data-testid={ `${index}-recomendation-card` }
    className="recomendation-card"
  >
    <img src={ card[`str${type}Thumb`] } alt={ card[`str${type}`] } />
    <div data-testid={ `${index}-recomendation-title` }>{card[`str${type}`]}</div>
  </div>
);

export const handleStartRecipe = (history) => {
  const { pathname } = history.location;
  history.push(`${pathname}/in-progress`);
};
