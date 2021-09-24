import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes } from '../services';
import HomeRecipeCard from '../components/HomeRecipeCard';

export default function Comidas() {
  useCurrentPage('Comidas');

  const { setAllRecipes } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { meals } = await fetchAllRecipes('meals');
      setAllRecipes(meals.slice(0, quantidade));
    }

    getRecipes();
  }, [setAllRecipes]);

  return (
    <div className="page">
      <Header showSearch />

      <div className="home-cards">
        <HomeRecipeCard meal />
      </div>

      <Footer />
    </div>
  );
}
