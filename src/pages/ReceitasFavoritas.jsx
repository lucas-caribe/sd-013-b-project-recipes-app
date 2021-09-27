import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { clickShare } from '../services/functionsForDetails';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function ReceitasFavoritas() {
  const [copyOk, setCopyOk] = useState(false);
  const [favoritesFromStorage, setFavoritesFromStorage] = useState([]);

  useEffect(() => {
    setFavoritesFromStorage(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);
  const clickFavoriteButton = (Id) => {
    const favoriteStorage = localStorage.getItem('favoriteRecipes');
    const favoritesObj = JSON.parse(favoriteStorage);
    const newFavorite = favoritesObj.filter((element) => element.id !== Id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    setFavoritesFromStorage(newFavorite);
  };
  return (
    <main className="main-content">
      <Header pageTitle="Receitas Favoritas" searchButton={ false } />
      <h1>Receitas favoritas</h1>
      <div>
        {favoritesFromStorage.map((recipes, index) => (
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
              onClick={ () => clickFavoriteButton(recipes.id) }
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
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
