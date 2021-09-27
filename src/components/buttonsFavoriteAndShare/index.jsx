import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from './buttonShare';

export default function ButtonsFavoriteAndShare({ testIdShare, testIdFavorite }) {
  return (
    <>
      <ButtonShare datatestid={ testIdShare } />
      <button type="button" data-testid={ testIdFavorite }>Favoritar</button>
    </>
  );
}

ButtonsFavoriteAndShare.propTypes = {
  testIdFavorite: PropTypes.string.isRequired,
  testIdShare: PropTypes.string.isRequired,
};
