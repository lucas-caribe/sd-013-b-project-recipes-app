import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { shareButtonFunc,
  setFavorites, checkFavorite } from '../GlobalFuncs/shareAndFavButtonFuncs';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShareAndFavButton({ recipeInfos:
  { id, tipo, area, category, alcoholic, title, image } }) {
  const [copiedText, setCopyText] = useState('');
  const [favorite, setFavorite] = useState(checkFavorite(id));

  const removeCopiedText = () => {
    const TIMER_LIMIT = 2000;
    setTimeout(() => {
      setCopyText('');
    }, TIMER_LIMIT);
  };

  const handleShare = () => {
    shareButtonFunc(window.location.href.replace('/in-progress', ''));
    setCopyText('Link copiado!');
    removeCopiedText();
  };

  const handleFavorite = () => {
    const modifiedRecipe = {
      id,
      type: tipo,
      area,
      category,
      alcoholicOrNot: alcoholic,
      name: title,
      image,
    };
    setFavorite(!favorite);
    setFavorites(modifiedRecipe);
  };

  return (
    <div>
      <button
        type="button"
        src={ shareIcon }
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="Share Icon" />
      </button>

      <button
        type="button"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        onClick={ handleFavorite }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="Favorite icon" />
      </button>

      <span>{ copiedText }</span>
    </div>
  );
}

ShareAndFavButton.propTypes = {
  recipeInfos: PropTypes.shape({
    id: PropTypes.string,
    tipo: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholic: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ShareAndFavButton;
