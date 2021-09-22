import React from 'react';
import HeaderWithoutSearch from './HeaderWithoutSearch';

export default function DoneRecipes() {
  return (
    <>
      <HeaderWithoutSearch />
      <h3 data-testid="page-title">Receitas Feitas</h3>
    </>
  );
}
