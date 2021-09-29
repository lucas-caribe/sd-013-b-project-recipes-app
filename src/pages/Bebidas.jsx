import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeRecipeCard from '../components/HomeRecipeCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes } from '../services';

function Bebidas() {
  useCurrentPage('Bebidas');

  const history = useHistory();

  const { setAllRecipes, apiRadio, filter } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantidade = 12;
      const { drinks } = await fetchAllRecipes('drinks');
      console.log('console abaixo em bebidas linhas 18,19');
      console.log(drinks);
      setAllRecipes(drinks.slice(0, quantidade));
    }

    getRecipes();
  }, [setAllRecipes]);

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

      <div className="home-cards">
        <HomeRecipeCard />
      </div>

      <Footer />
    </div>
  );
}

export default Bebidas;
