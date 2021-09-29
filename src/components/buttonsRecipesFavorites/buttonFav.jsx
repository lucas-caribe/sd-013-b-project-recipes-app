import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function ButtonFav({ id, datatestid, setLocalFavorite }) {
  const [IconFav, setIconFav] = useState(whiteHeartIcon);
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    if (storage.some((recipe) => recipe.id === id)) {
      setIconFav(blackHeartIcon);
    }
  }, []);

  const handlerClickFavorite = ({ target }) => {
    const newArray = storage.filter((recipe) => recipe.id !== target.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
    setLocalFavorite(newArray);
    setIconFav(whiteHeartIcon);
  };

  return (
    <button
      src={ IconFav }
      type="button"
      onClick={ handlerClickFavorite }
      data-testId={ datatestid }
    >
      <img src={ IconFav } alt="button favorite" id={ id } />
    </button>
  );
}

ButtonFav.propTypes = {
  id: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  setLocalFavorite: PropTypes.func.isRequired,
};
