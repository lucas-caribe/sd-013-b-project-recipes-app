import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreByIngredients() {
  const pageTitle = {
    pageName: 'Explorar Ingredientes',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      FOODS
      <Footer />
    </div>
  );
}
