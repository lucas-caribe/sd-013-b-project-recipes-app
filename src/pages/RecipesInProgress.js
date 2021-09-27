import React from 'react';

const RecipesInProgress = () => (
  <div>
    <img src={ ' ' } alt=" " data-testid="recipe-photo" />
    <h2 data-testid="recipe-title"> </h2>
    <button type="button" data-testid="share-btn">
      Compartilhar
    </button>
    <button type="button" data-testid="favorite-btn">
      Favoritar
    </button>
    <h3 data-testid="recipe-category"> </h3>
    <label htmlFor="radio">
      Igredientes da receita:
      <br />
      <input type="radio" data-testid="index-ingredient-step" />
      {' Igrediente 1'}
    </label>
    <p data-testid="instructions">Intruções</p>
    <button type="button" data-testid="finish-recipe-btn">
      Finalizar Recita
    </button>
  </div>
);

export default RecipesInProgress;
