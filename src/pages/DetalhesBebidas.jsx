import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DetalhesBebidas() {
  return (
    <div>
      Detalhes das bebidas
      <img data-testid="recipe-photo" alt="recipeFoto" />
      <h3 data-testid="recipe-title">Titulo</h3>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="iconHeard" />
      </button>
      <p data-testid="recipe-category">Categoria</p>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>Ingredientes</p>
      <p data-testid="instructions">Instruções</p>
      <p data-testid="video">Video</p>
      <p data-testid={ `${0}-recomendation-card` }>Card recomendation</p>
      <button type="button" data-testid="start-recipe-btn">Start recipe</button>
    </div>
  );
}

export default DetalhesBebidas;
