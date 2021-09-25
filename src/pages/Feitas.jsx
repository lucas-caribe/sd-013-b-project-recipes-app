import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';
import { fetchAllRecipes } from '../services';

export default function Feitas() {
  useCurrentPage('Receitas Feitas');

  // ESTA LÓGICA DO FETCH DEVERÁ SER SUBSTITUÍDA!
  // AS RECEITAS FEITAS SERÃO SETADAS NA PÁGINA DE 'RECEITA EM PROGRESSO'
  // (usando aqui para fins de desenvolvimento desta página)
  const { setAllRecipes } = useContext(Context);

  useEffect(() => {
    async function getRecipes() {
      const quantity = 25;
      // criar uma constante que representa o array de objetos retornado pelo fetch()
      const { meals } = await fetchAllRecipes('meals');
      console.log('log abaixo esta no useEffect de <Feitas />');
      console.log(meals);
      // setando o retorno da API no estado global, fazendo o slice, pois quero somente os 12 primeiros itens do array retornado
      setAllRecipes(meals.slice(0, quantity));
    }

    getRecipes();
  }, [setAllRecipes]);

  return (
    <div className="page">
      <Header />

      <div className="recipe-done-buttons">
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>

      <RecipeDoneCard meal />
    </div>
  );
}
