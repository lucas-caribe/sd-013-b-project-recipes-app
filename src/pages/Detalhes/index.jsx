import React, { useState } from 'react';

function Detalhes() {
  const id = 52900;
  const [hasVideo, setHasVideo] = useState(true);
  return (
    <main>
      <img data-testid="recipe-photo" src="https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg" alt="" height="400px" width="400px" />
      <h1 data-testid="recipe-title">Xablau</h1>
      <button data-testid="share-btn" type="button">Share</button>
      <button data-testid="favorite-btn" type="button">Favorite</button>
      <h2 data-testid="recipe-category">Xableu</h2>
      <ul>
        <li data-testid="0-ingredient-name-and-measure">Ingrediente 1</li>
        <li data-testid="1-ingredient-name-and-measure">Ingrediente 2</li>
      </ul>
      <p data-testid="instructions">Instruções</p>
      {hasVideo && <iframe data-testid="video" src="https://www.youtube.com/watch?v=-YDh4WEmK_E" title="recipe-video" frameBorder="0" /> }
      <div>
        <div data-testid="0-recomendation-card">Card 1</div>
        <div data-testid="1-recomendation-card">Card 2</div>
      </div>
      <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
    </main>
  );
}

export default Detalhes;
