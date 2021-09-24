import React, { useState } from 'react';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import Video from './Video';

function RecipeDetails() {
  const [recipeFoodDetail] = useState([0]);
  const [recomendationCard] = useState([0]);

  return (
    <div className="details-page">
      <h1>Detalhes comidas</h1>
      <img
        data-testid="recipe-photo"
        alt="imagem da receita"
      />
      <title
        data-testid="recipe-title"
      >
        Comida
      </title>
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
        />
      </button>
      <p
        data-testid="recipe-category"
      >
        Texto da categoria
      </p>
      <ul>
        {
          recipeFoodDetail.map((value, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { value }
            </li>
          ))
        }
      </ul>
      <p
        data-testid="instructions"
      >
        Instruções
      </p>
      <div data-testid="video">
        <Video />
      </div>
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
  );
}

export default RecipeDetails;
// requisitar api no navegador, procura qualquer id
