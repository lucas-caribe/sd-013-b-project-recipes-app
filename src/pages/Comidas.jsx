import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Context from '../context/Context';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes } from '../services';
import HomeRecipeCard from '../components/HomeRecipeCard';

export default function Comidas() {
  useCurrentPage('Comidas');

  const {
    setAllRecipes,
    apiRadio,
    filter,
  } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { meals } = await fetchAllRecipes('meals');
      setAllRecipes(meals.slice(0, quantidade));
    }

    getRecipes();
  }, [setAllRecipes]);

  // NAO TENTE ENTENDER ESSE EFFECT !!
  // PRO SEU PROPRIO BEM
  useEffect(() => {
    const quantidade = 12;
    console.log(apiRadio);
    if (filter === true && apiRadio.meals !== null) {
      setAllRecipes(apiRadio.meals.slice(0, quantidade));
      if (window.location.pathname === '/comidas' && apiRadio.meals.length === 1) {
        const id = apiRadio.meals[0].idMeal;
        history.push(`/comidas/${id}`);
      }
    }
    if (apiRadio !== undefined && apiRadio.meals === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [apiRadio]);

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
