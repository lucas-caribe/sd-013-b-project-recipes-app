import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes, fetchCategories } from '../services';
import HomeRecipeCard from '../components/HomeRecipeCard';
import CategoryFilter from '../components/CategoryFilter';

export default function Comidas() {
  useCurrentPage('Comidas');

  const { setAllRecipes, setCategories } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { meals } = await fetchAllRecipes('meals');
      setAllRecipes(meals.slice(0, quantidade));
    }

    async function getCategories() {
      const quantidade = 5;
      const { meals } = await fetchCategories('meals');
      setCategories(meals.slice(0, quantidade));
    }

    getRecipes();
    getCategories();
  }, [setAllRecipes, setCategories]);

  return (
    <div className="page">
      <Header showSearch />

      <div className="categories-filter">
        <CategoryFilter />
      </div>

      <div className="home-cards">
        <HomeRecipeCard meal />
      </div>

      <Footer />
    </div>
  );
}
