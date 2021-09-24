import React from 'react';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DrinkPage() {
  return (
    <div>
      <Header title="Bebidas" />
      <DrinkCard />
      <Footer />
    </div>
  );
}
