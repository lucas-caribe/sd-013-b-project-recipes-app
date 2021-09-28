import React, { useContext } from 'react';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodMain from '../components/FoodMain';
import foodContext from '../context/FoodContext';
import FoodCategory from '../components/FoodCategory';

export default function FoodPage() {
  const { foodState } = useContext(foodContext);

  return (
    <div>
      <Header title="Comidas" />
      <FoodCategory />
      { foodState
        ? <FoodCard />
        : global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') }
      <FoodMain />
      <Footer />
    </div>
  );
}
