import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { clickShare } from '../services/functionsForDetails';

export default function ReceitasFavoritas() {
  const [copyOk, setCopyOk] = useState(false);
  const [favoritesFromStorage, setFavoritesFromStorage] = useState([]);
  const { push } = useHistory();

  const sendToDetails = (type, id) => {
    if (type === 'bebida') {
      push(`/bebidas/${id}`);
    }
    if (type === 'comida') {
      push(`/comidas/${id}`);
    }
  };

  const onClickFilter = (type) => {
    switch (type) {
    case 'All':
      setFavoritesFromStorage(JSON.parse(localStorage.getItem('favoriteRecipes')));
      break;
    case 'Food':
      setFavoritesFromStorage(favoritesFromStorage
        .filter((element) => element.type === 'comida'));
      break;
    case 'Drinks':
      setFavoritesFromStorage(favoritesFromStorage
        .filter((element) => element.type === 'bebida'));
      break;
    default:
      setFavoritesFromStorage(favoritesFromStorage);
    }
  };

  const buttonsFilters = () => (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => onClickFilter('All') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => onClickFilter('Food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => onClickFilter('Drinks') }
      >
        Drinks
      </button>
    </div>
  );

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
      <div>
        {buttonsFilters()}
        <div>
          {favoritesFromStorage !== null && favoritesFromStorage.map((recipes, index) => (
            <div key={ index }>
              <button
                alt="imageRecipe"
                type="button"
                data-testid={ `${index}-horizontal-image` }
                onClick={ () => sendToDetails(recipes.type, recipes.id) }
                src={ recipes.image }
              >
                <img
                  src={ recipes.image }
                  alt="imagemComida"
                  style={ { width: '200px' } }
                />
              </button>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {recipes.type === 'bebida' ? recipes.alcoholicOrNot
                  : `${recipes.area} - ${recipes.category}`}
              </p>
              <button
                type="button"
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => sendToDetails(recipes.type, recipes.id) }
              >
                {recipes.name}
              </button>
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
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="blackHeart" />
              </button>
            </div>
          ))}
          <p>{copyOk ? 'Link copiado!' : null}</p>
        </div>
      </div>
    </main>
  );
}
