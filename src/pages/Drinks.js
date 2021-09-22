import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      <h1>Drinks</h1>
      <Footer />
    </div>
  );
}
