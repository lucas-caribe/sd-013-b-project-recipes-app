import React from 'react';
import MainFoodPage from './HeaderWithSearch';
import Footer from '../Components/Footer';

export default function DrinksPage() {
  return (
    <>
      <MainFoodPage />
      <h3 data-testid="page-title">Bebidas</h3>
      <Footer />
    </>
  );
}
