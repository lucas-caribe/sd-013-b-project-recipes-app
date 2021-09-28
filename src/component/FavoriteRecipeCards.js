import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import ShareIcon from '../images/shareIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';
import IconButton from '../mini-components/IconButton';

function FavoriteRecipeCards() {
  const favoriteRecipesFromStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const { filteredRecipes } = useContext(Context);

  function handleToShareBtn(recipe, target) {
    const initialLink = 'http://localhost:3000/';
    const copyText = `${initialLink}${recipe.type}s/${recipe.id}`;
    navigator.clipboard.writeText(copyText);
    if (target.parentNode.innerHTML === '<div>Link copiado!</div>') {
      // empty
    } else {
      target.parentNode.innerHTML = '<div>Link copiado!<div>';
    }
  }

  function handleFavoriteButton(recipe) {
    const allRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newAllRecipes = allRecipes.filter((item) => item.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newAllRecipes));
    window.location.reload();
  }

  return (
    <div>
      { favoriteRecipesFromStorage ? favoriteRecipesFromStorage.filter((recipe) => (
        recipe.type !== filteredRecipes))
        .map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                style={ { width: '120px' } }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category}`
                : `${recipe.alcoholicOrNot}` }
            </p>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
            </Link>
            <IconButton
              dataTest={ `${index}-horizontal-share-btn` }
              btnImage={ ShareIcon }
              altText="Share Icon"
              btnFunction={ ({ target }) => handleToShareBtn(recipe, target) }
            />
            <IconButton
              dataTest={ `${index}-horizontal-favorite-btn` }
              btnImage={ BlackHeart }
              altText="Favorited Icon"
              btnFunction={ () => handleFavoriteButton(recipe) }
            />
          </div>
        )) : <p>Loading...</p>}
    </div>
  );
}

export default FavoriteRecipeCards;
