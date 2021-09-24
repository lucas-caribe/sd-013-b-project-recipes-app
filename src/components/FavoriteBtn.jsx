import React from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import addFavoriteToStorage from '../services/addFavoriteToStorage';
import removeFavoritesFromStorage from '../services/removeFavoriteFromStorage';

function FavoriteBtn({ id, type, favorited, selectedRecipe, setFavorited }) {
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
  );
}

export default FavoriteBtn;

FavoriteBtn.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  setFavorited: PropTypes.func.isRequired,
  selectedRecipe: PropTypes.arrayOf(PropTypes.any).isRequired,
};
