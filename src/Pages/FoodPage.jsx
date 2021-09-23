import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeDetails from '../components/RecipeDetails';

export default function FoodPage() {
  return (
    <div>
      <Header title="Comidas" />
      <RecipeDetails />
      <Footer />
    </div>
  );
}
