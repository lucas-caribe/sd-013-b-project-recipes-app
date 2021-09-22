import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FoodsByOrigin() {
  const pageTitle = {
    pageName: 'Explorar Origem',
    setIcon: true,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      FOODS
      <Footer />
    </div>
  );
}
