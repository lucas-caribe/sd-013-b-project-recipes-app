import React from 'react';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from '../Components/Footer';

export default function ExploreMealsPage() {
  return (
    <div>
      <HeaderWithoutSearch />
      <h3 data-testid="page-title">Explorar Ingredientes</h3>
      <Footer />
    </div>
  );
}
