import React from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function Feitas() {
  useCurrentPage('Receitas Feitas');

  // AS RECEITAS FEITAS DEVERÃO SER SETADAS NA PÁGINA DE 'RECEITA EM PROGRESSO'
  return (
    <div className="page">
      <Header />

      <div className="recipe-done-buttons">
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>

      <RecipeDoneCard />
    </div>
  );
}
