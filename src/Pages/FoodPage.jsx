import React from 'react';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FoodPage() {
  return (
    <div>
      <Header title="Comidas" />
      <FoodCard />
      <Footer />
    </div>
  );
}
