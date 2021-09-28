import React, { useContext, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeRecipeCard from '../components/HomeRecipeCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes, fetchCategories } from '../services';

function Bebidas() {
  useCurrentPage('Bebidas');

  const { setAllRecipes, setCategories } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { drinks } = await fetchAllRecipes('drinks');
      setAllRecipes(drinks.slice(0, quantidade));
    }

    async function getCategories() {
      const quantidade = 5;
      const { drinks } = await fetchCategories('drinks');
      setCategories(drinks.slice(0, quantidade));
    }

    getRecipes();
    getCategories();
  }, []);

  return (
    <div className="page">
      <Header showSearch />

      <div className="categories-filter">
        <CategoryFilter />
      </div>

      <div className="home-cards">
        <HomeRecipeCard />
      </div>

      <Footer />
    </div>
  );
}

export default Bebidas;
