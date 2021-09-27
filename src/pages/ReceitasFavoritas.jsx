import React, { useState } from 'react';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { clickShare } from '../services/functionsForDetails';

export default function ReceitasFavoritas() {
  const [copyOk, setCopyOk] = useState(false);
  const favoriteRecipesFromStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favoriteRecipesFromStorage);
  return (
    <main className="main-content">
      <Header pageTitle="Receitas Favoritas" searchButton={ false } />
      <h1>Receitas favoritas</h1>
      <div>
        {favoriteRecipesFromStorage.map((recipes, index) => (
          <div key={ index }>
            <button type="button" data-testid="filter-by-all-btn">All</button>
            <button type="button" data-testid="filter-by-food-btn">Food</button>
            <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
            <img
              src={ recipes.image }
              alt="imageRecipe"
              data-testid={ `${index}-horizontal-image` }
            />
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipes.type === 'bebida' ? recipes.alcoholicOrNot
                : `${recipes.area} - ${recipes.category}`}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{recipes.name}</p>
            <button
              type="button"
              onClick={ () => clickShare(setCopyOk, recipes.type, recipes.id) }
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
            >
              <img src={ shareIcon } alt="shareIcon" />
            </button>
            <button
              type="button"
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
            >
              <img src={ blackHeartIcon } alt="blackHeart" />
            </button>
          </div>
        ))}
        <p>{copyOk ? 'Link copiado!' : null}</p>
      </div>
    </main>
  );
}
