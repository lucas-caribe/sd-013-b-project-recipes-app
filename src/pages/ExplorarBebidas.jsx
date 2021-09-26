import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ButtonExplorer from '../components/ButtonExplorer';
import Footer from '../components/Footer';
import { getDrinkSurprise } from '../services/fetchRadioBebidas';

export default function ExplorarBebidas() {
  const history = useHistory();

  function redirectExplorerByIngredient() {
    const redirect = '/explorar/bebidas/ingredientes';
    history.push(redirect);
  }

  async function redirectSurprise() {
    const drinkSurprise = await getDrinkSurprise();
    const redirect = `/bebidas/${drinkSurprise[0].idDrink}`;
    history.push(redirect);
  }

  return (
    <main className="main-content">
      <Header pageTitle="Explorar Bebidas" searchButton={ false } />

      <ButtonExplorer
        id="by-ingredient"
        dataTest="explore-by-ingredient"
        className="button-explorer"
        text="Por Ingredientes"
        onClick={ redirectExplorerByIngredient }
      />
      <ButtonExplorer
        id="surprise"
        dataTest="explore-surprise"
        className="button-explorer"
        text="Me Surpreenda!"
        onClick={ redirectSurprise }
      />

      <Footer />
    </main>
  );
}
