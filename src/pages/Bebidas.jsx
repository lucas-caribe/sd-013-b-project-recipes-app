import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeRecipeCard from '../components/HomeRecipeCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes } from '../services';

function Bebidas() {
  useCurrentPage('Bebidas');

  const { setAllRecipes } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { drinks } = await fetchAllRecipes('drinks');
      setAllRecipes(drinks.slice(0, quantidade));
    }

    getRecipes();
  }, [setAllRecipes]);

  return (
    <div className="page">
      <Header showSearch />
    
      <div className="home-cards">
        <HomeRecipeCard />
      </div>

      <Footer />
    </div>
  );
}

export default Bebidas;
