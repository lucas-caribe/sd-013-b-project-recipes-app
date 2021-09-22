import React from 'react';
import HeaderWithSearch from './HeaderWithSearch';
import '../App.css';

export default function ExploreMealsByArea() {
  return (
    <>
      <HeaderWithSearch />
      <h3 data-testid="page-title" style={ { alignSelf: 'center' } }>Explorar Origem</h3>
    </>
  );
}
