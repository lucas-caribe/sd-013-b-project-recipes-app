import React, { useContext, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeRecipeCard from '../components/HomeRecipeCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes, fetchByCategory, fetchCategories } from '../services';

function Bebidas() {
  useCurrentPage('Bebidas');


  const { setAllRecipes, setCategories, selectedCategory, apiRadio, filter } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    async function getCategories() {
      const quantidade = 5;
      const { drinks } = await fetchCategories('drinks');
      setCategories(drinks.slice(0, quantidade));
    }

    async function getAllRecipes() {
      const quantidade = 12;
      const { drinks } = await fetchAllRecipes('drinks');
      setAllRecipes(drinks.slice(0, quantidade));
    }

    async function getByCategory() {
      const quantidade = 12;
      const { drinks } = await fetchByCategory('drinks', selectedCategory);
      setAllRecipes(drinks.slice(0, quantidade));
    }

    getCategories();

    if (selectedCategory === 'All') {
      getAllRecipes();
    } else {
      getByCategory();
    }
  }, [selectedCategory, setAllRecipes, setCategories]);

  // NAO TENTE ENTENDER ESSE EFFECT !!
  // PRO SEU PROPRIO BEM
  useEffect(() => {
    const quantidade = 12;
    if (filter === true && apiRadio.drinks !== null) {
      setAllRecipes(apiRadio.drinks.slice(0, quantidade));
      if (window.location.pathname === '/bebidas' && apiRadio.drinks.length === 1) {
        const id = apiRadio.drinks[0].idDrink;
        history.push(`/bebidas/${id}`);
      }
    }
    if (apiRadio !== undefined && apiRadio.drinks === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [apiRadio]);

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
