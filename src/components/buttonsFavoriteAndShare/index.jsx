import React from 'react';
import ButtonShare from './buttonShare';

export default function ButtonsFavoriteAndShare({ testIdShare, testIdFavorite }) {
  return (
    <>
      <ButtonShare datatestid={ testIdShare } />
      <button type="button" data-testid={ testIdFavorite }>Favoritar</button>
    </>
  );
}
