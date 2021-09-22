import React from 'react';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import Footer from '../Components/Footer';

export default function ExplorePage() {
  return (
    <div>
      <h3 data-testid="page-title">Explorar</h3>
      <HeaderWithoutSearch />
      <Footer />
    </div>
  );
}
