import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../buttonsFavoriteAndShare/buttonShare';
import ButtonFav from './buttonFav';

export default function ButtonRecipesFavorites(
  { testeidShare, url, id, testeidFavorite, setLocalFavorite },
) {
  return (
    <>
      <ButtonShare url={ url } datatestid={ testeidShare } />
      <ButtonFav
        id={ id }
        datatestid={ testeidFavorite }
        setLocalFavorite={ setLocalFavorite }
      />
    </>
  );
}

ButtonRecipesFavorites.propTypes = {
  testeidShare: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
  testeidFavorite: PropTypes.string.isRequired,
  setLocalFavorite: PropTypes.func.isRequired,
};

ButtonRecipesFavorites.defaultProps = {
  id: null,
};
