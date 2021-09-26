import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ButtonExplorer from '../components/ButtonExplorer';
import Footer from '../components/Footer';
import { getMealSurprise } from '../services/fetchRadioComidas';

export default function ExplorarComidas() {
  const history = useHistory();

  function redirectExplorerByIngredient() {
    const redirect = '/explorar/comidas/ingredientes';
    history.push(redirect);
  }

  function redirectExplorerByArea() {
    const redirect = '/explorar/comidas/area';
    history.push(redirect);
  }

  async function redirectSurprise() {
    const mealSurprise = await getMealSurprise();
    const redirect = `/comidas/${mealSurprise[0].idMeal}`;
    history.push(redirect);
  }

  return (
    <main className="main-content">
      <Header pageTitle="Explorar Comidas" searchButton={ false } />

      <ButtonExplorer
        id="by-ingredient"
        dataTest="explore-by-ingredient"
        className="button-explorer"
        text="Por Ingredientes"
        onClick={ redirectExplorerByIngredient }
      />

      <ButtonExplorer
        id="by-area"
        dataTest="explore-by-area"
        className="button-explorer"
        text="Por Local de Origem"
        onClick={ redirectExplorerByArea }
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
